export type CalendarProvider = "calendly" | "calcom";

export type CalendarConfig = {
  provider: CalendarProvider;
  /** Full booking page URL */
  pageUrl: string;
  /** Cal.com only: username/event-slug path */
  calLink?: string;
};

/** Mapica dark theme — matches site UI */
const CALENDLY_COLORS =
  "background_color=030308&text_color=e4e4e7&primary_color=6366f1&hide_gdpr_banner=1&hide_event_type_details=1";

function appendCalendlyTheme(url: string) {
  const sep = url.includes("?") ? "&" : "?";
  if (url.includes("background_color=")) return url;
  return `${url}${sep}${CALENDLY_COLORS}`;
}

function parseCalComLink(url: string): string | undefined {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/^\//, "");
    return path || undefined;
  } catch {
    return undefined;
  }
}

/**
 * Set NEXT_PUBLIC_CALENDAR_EMBED_URL to your full booking link, e.g.:
 * https://calendly.com/your-user/intro-call
 * https://cal.com/your-user/intro-call
 */
export function getCalendarConfig(): CalendarConfig | null {
  const raw = process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL?.trim();
  if (!raw) return null;

  let pageUrl = raw;
  if (!pageUrl.startsWith("http")) {
    pageUrl = `https://calendly.com/${raw.replace(/^\//, "")}`;
  }

  if (pageUrl.includes("calendly.com")) {
    return {
      provider: "calendly",
      pageUrl: appendCalendlyTheme(pageUrl),
    };
  }

  if (pageUrl.includes("cal.com")) {
    const calLink = parseCalComLink(pageUrl);
    return {
      provider: "calcom",
      pageUrl,
      calLink,
    };
  }

  return null;
}
