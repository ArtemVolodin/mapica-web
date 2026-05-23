"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Calendar, ExternalLink } from "lucide-react";
import type { CalendarConfig } from "@/lib/calendar-config";

declare global {
  interface Window {
    Cal?: (action: string, options?: Record<string, unknown>) => void;
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

type CalendarEmbedProps = {
  config: CalendarConfig;
};

const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

export function CalendarEmbed({ config }: CalendarEmbedProps) {
  const [ready, setReady] = useState(false);

  if (config.provider === "calendly") {
    return (
      <CalendlyEmbed
        pageUrl={config.pageUrl}
        ready={ready}
        onReady={() => setReady(true)}
      />
    );
  }

  return (
    <CalComEmbed
      config={config}
      onReady={() => setReady(true)}
      ready={ready}
    />
  );
}

function CalendlyEmbed({
  pageUrl,
  ready,
  onReady,
}: {
  pageUrl: string;
  ready: boolean;
  onReady: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const mountWidget = useCallback(() => {
    const parent = containerRef.current;
    if (!parent || !window.Calendly || initializedRef.current) return;

    parent.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: pageUrl,
      parentElement: parent,
      resize: true,
    });
    initializedRef.current = true;
    onReady();
  }, [pageUrl, onReady]);

  useEffect(() => {
    initializedRef.current = false;
    if (window.Calendly) {
      mountWidget();
    }
  }, [mountWidget]);

  return (
    <div className="bg-[#030308]">
      <link href={CALENDLY_WIDGET_CSS} rel="stylesheet" />

      <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-white/10">
        <Calendar size={18} className="text-blue-400 shrink-0" />
        <span className="text-sm font-medium text-white">Pick a time</span>
        {!ready && (
          <span className="text-xs text-zinc-500 ml-auto animate-pulse">
            Loading calendar…
          </span>
        )}
      </div>

      <div
        ref={containerRef}
        id="mapica-calendly-inline"
        className="calendly-booking relative w-full min-h-[660px] overflow-hidden bg-[#030308]"
      />

      <Script
        src={CALENDLY_WIDGET_JS}
        strategy="afterInteractive"
        onLoad={mountWidget}
      />

      <p className="px-5 sm:px-6 py-4 border-t border-white/10 text-center text-xs text-zinc-600">
        Confirmations are sent to your email ·{" "}
        <a
          href={pageUrl.split("?")[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
        >
          Open in Calendly
          <ExternalLink size={12} />
        </a>
      </p>
    </div>
  );
}

function CalComEmbed({
  config,
  onReady,
  ready,
}: {
  config: CalendarConfig;
  onReady: () => void;
  ready: boolean;
}) {
  const initCalCom = () => {
    if (!window.Cal || !config.calLink) return;
    const el = document.getElementById("mapica-cal-inline");
    if (!el) return;
    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("inline", {
      elementOrSelector: "#mapica-cal-inline",
      calLink: config.calLink,
      config: { theme: "dark", layout: "month_view" },
    });
    onReady();
  };

  return (
    <div className="bg-[#030308]">
      <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-white/10">
        <Calendar size={18} className="text-blue-400" />
        <span className="text-sm font-medium text-white">Pick a time</span>
        {!ready && (
          <span className="text-xs text-zinc-500 ml-auto animate-pulse">
            Loading calendar…
          </span>
        )}
      </div>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={initCalCom}
      />
      <div
        id="mapica-cal-inline"
        className="w-full min-h-[660px] overflow-hidden bg-[#030308]"
      />
    </div>
  );
}
