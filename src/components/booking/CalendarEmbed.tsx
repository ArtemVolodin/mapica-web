"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar, ExternalLink } from "lucide-react";
import type { CalendarConfig } from "@/lib/calendar-config";

declare global {
  interface Window {
    Cal?: (action: string, options?: Record<string, unknown>) => void;
  }
}

type CalendarEmbedProps = {
  config: CalendarConfig;
};

function buildCalendlyIframeSrc(pageUrl: string): string {
  const url = new URL(pageUrl);
  url.searchParams.set("embed_type", "Inline");
  if (typeof window !== "undefined") {
    url.searchParams.set("embed_domain", window.location.hostname);
  } else {
    url.searchParams.set("embed_domain", "mapica.io");
  }
  return url.toString();
}

export function CalendarEmbed({ config }: CalendarEmbedProps) {
  const [ready, setReady] = useState(false);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    if (config.provider === "calendly") {
      setIframeSrc(buildCalendlyIframeSrc(config.pageUrl));
    }
  }, [config]);

  if (config.provider === "calendly") {
    return (
      <div className="bg-[#030308]">
        <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-white/10">
          <Calendar size={18} className="text-blue-400 shrink-0" />
          <span className="text-sm font-medium text-white">Pick a time</span>
          {!ready && (
            <span className="text-xs text-zinc-500 ml-auto animate-pulse">
              Loading calendar…
            </span>
          )}
        </div>

        <div className="calendly-booking relative w-full overflow-hidden bg-[#030308]">
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title="Book a call with Mapica"
              className="block w-full border-0 bg-[#030308]"
              style={{ height: "720px", minHeight: "660px" }}
              onLoad={() => setReady(true)}
              allow="fullscreen"
            />
          ) : (
            <div className="flex items-center justify-center h-[660px] text-zinc-500 text-sm bg-[#030308]">
              Loading calendar…
            </div>
          )}
        </div>

        <p className="px-5 sm:px-6 py-4 border-t border-white/10 text-center text-xs text-zinc-600">
          Confirmations are sent to your email ·{" "}
          <a
            href={config.pageUrl.split("?")[0]}
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

  return <CalComEmbed config={config} onReady={() => setReady(true)} ready={ready} />;
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
