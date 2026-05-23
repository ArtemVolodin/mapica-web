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
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={18} className="text-blue-400" />
          <span className="text-sm font-medium text-white">Pick a time</span>
          {!ready && (
            <span className="text-xs text-zinc-500 ml-auto animate-pulse">
              Loading calendar…
            </span>
          )}
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#030308] min-h-[620px] sm:min-h-[700px]">
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title="Book a call with Mapica"
              className="w-full border-0"
              style={{ height: "700px", minHeight: "620px" }}
              onLoad={() => setReady(true)}
              allow="fullscreen"
            />
          ) : (
            <div className="flex items-center justify-center h-[620px] text-zinc-500 text-sm">
              Loading calendar…
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-zinc-600">
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
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex items-center gap-2 mb-4">
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
        className="w-full min-h-[620px] sm:min-h-[700px] rounded-2xl overflow-hidden border border-white/5"
      />
    </div>
  );
}
