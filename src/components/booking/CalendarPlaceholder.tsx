import { Calendar, ExternalLink } from "lucide-react";

/** Shown when NEXT_PUBLIC_CALENDAR_EMBED_URL is not configured */
export function CalendarPlaceholder() {
  return (
    <div className="p-10 md:p-14 text-center">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
        <Calendar size={28} className="text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">Calendar not connected yet</h3>
      <p className="mt-2 text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
        Add your Calendly or Cal.com link to{" "}
        <code className="text-zinc-400 text-xs">NEXT_PUBLIC_CALENDAR_EMBED_URL</code>{" "}
        in Vercel environment variables, then redeploy.
      </p>
      <a
        href="mailto:hello@mapica.io"
        className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
      >
        hello@mapica.io
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
