import type { ProductAccent } from "@/lib/data";

export type DemoId = "travel" | "running" | "realestate" | "homeservices";

export type DemoConcept = {
  id: DemoId;
  title: string;
  description: string;
  accent: ProductAccent;
  problem: string;
  solution: string;
  features: string[];
  targetUsers: string[];
  mvpScope: string[];
  stack: string[];
  timeline: string;
  monetization: string[];
};

export const demos: DemoConcept[] = [
  {
    id: "travel",
    title: "AI Travel Planner",
    description:
      "Personalized trips, routes, local places and AI itinerary planning.",
    accent: "blue",
    problem:
      "Travelers juggle maps, bookings and recommendations across too many apps.",
    solution:
      "One AI-native app that plans routes, surfaces local gems and adapts itineraries in real time.",
    features: [
      "Conversational trip planning",
      "Live maps & optimized routes",
      "Local recommendations",
      "Shareable itineraries",
    ],
    targetUsers: ["Travel startups", "D2C travel brands", "Founders validating trip products"],
    mvpScope: ["Onboarding", "AI chat planner", "Map view", "Saved trips", "Push reminders"],
    stack: ["Flutter", "Mapbox", "OpenAI", "Supabase"],
    timeline: "2–3 weeks for MVP",
    monetization: ["Freemium itineraries", "Premium trip exports", "Affiliate bookings"],
  },
  {
    id: "running",
    title: "AI Running Coach",
    description:
      "Smart training plans, pace insights and recovery recommendations.",
    accent: "violet",
    problem: "Runners need adaptive coaching without expensive personal trainers.",
    solution:
      "AI analyzes pace, distance and recovery to deliver weekly plans that evolve with you.",
    features: [
      "Personalized training plans",
      "Pace & heart-rate insights",
      "Recovery scoring",
      "Race prep modes",
    ],
    targetUsers: ["Fitness founders", "Running communities", "Wellness apps adding AI coaching"],
    mvpScope: ["Activity tracking UI", "Weekly plan", "AI coach chat", "Progress charts"],
    stack: ["Flutter", "HealthKit / Google Fit", "OpenAI", "Firebase"],
    timeline: "3–4 weeks for MVP",
    monetization: ["Subscription coaching", "Race prep packs", "Wearable integrations"],
  },
  {
    id: "realestate",
    title: "AI Real Estate Assistant",
    description:
      "Property search, smart filters, neighborhood insights and buyer support.",
    accent: "purple",
    problem: "Buyers struggle to compare listings, neighborhoods and market signals quickly.",
    solution:
      "AI search, map pins and neighborhood summaries in one premium mobile experience.",
    features: [
      "Natural-language property search",
      "Map-based discovery",
      "Neighborhood insights",
      "Saved homes & alerts",
    ],
    targetUsers: ["PropTech startups", "Brokerages", "Buyers-first marketplaces"],
    mvpScope: ["Listing feed", "Map view", "AI search", "Saved properties", "Contact flow"],
    stack: ["Flutter", "Mapbox", "Claude", "Supabase", "Stripe"],
    timeline: "3–4 weeks for MVP",
    monetization: ["Lead gen for agents", "Premium buyer insights", "SaaS for broker teams"],
  },
  {
    id: "homeservices",
    title: "AI Home Services App",
    description:
      "Booking, estimates, contractors, repair tracking and AI support.",
    accent: "cyan",
    problem: "Home repairs mean phone calls, unclear quotes and poor visibility on progress.",
    solution:
      "Book services, get AI estimates and track repairs from request to completion.",
    features: [
      "Service categories & booking",
      "AI quote estimates",
      "Contractor matching",
      "Live job progress",
    ],
    targetUsers: ["Home services marketplaces", "Contractor networks", "Property managers"],
    mvpScope: ["Category browse", "Booking flow", "Quote card", "Status tracking", "AI support"],
    stack: ["Flutter", "OpenAI", "Supabase", "Stripe", "n8n"],
    timeline: "2–4 weeks for MVP",
    monetization: ["Booking fees", "Pro subscriptions", "Priority dispatch upsells"],
  },
];

export type ProductDetail = {
  title: string;
  valueProposition: string;
  whatItDoes: string;
  coreFeatures: string[];
  possibleMvp: string[];
  stack: string[];
};

export const productDetails: Record<string, ProductDetail> = {
  "AI Travel Platform": {
    title: "AI Travel Platform",
    valueProposition: "Plan smarter trips in minutes, not hours.",
    whatItDoes:
      "Combines maps, AI chat and itinerary tools so travelers discover, route and book in one app.",
    coreFeatures: ["AI itineraries", "Route optimization", "Local guides", "Trip sharing"],
    possibleMvp: ["Map + AI chat", "3-day itinerary builder", "Save & export trip"],
    stack: ["Flutter", "Mapbox", "OpenAI", "Supabase"],
  },
  "AI Health Coach": {
    title: "AI Health Coach",
    valueProposition: "Personal wellness that adapts to your habits.",
    whatItDoes:
      "Tracks goals, delivers coaching and surfaces insights from activity and check-ins.",
    coreFeatures: ["Adaptive plans", "Habit tracking", "AI coaching", "Progress dashboards"],
    possibleMvp: ["Onboarding", "Daily coach", "Weekly insights", "Reminders"],
    stack: ["Flutter", "OpenAI", "Firebase", "Supabase"],
  },
  "AI Home Services App": {
    title: "AI Home Services App",
    valueProposition: "Book trusted help without the back-and-forth.",
    whatItDoes:
      "Connects homeowners with services, quotes and live job status powered by AI.",
    coreFeatures: ["Instant booking", "AI estimates", "Pro matching", "Job tracking"],
    possibleMvp: ["3 service categories", "Booking + quote", "Status timeline"],
    stack: ["Flutter", "OpenAI", "Supabase", "Stripe"],
  },
  "AI Shopping Assistant": {
    title: "AI Shopping Assistant",
    valueProposition: "Shop with context—not endless scrolling.",
    whatItDoes:
      "Understands preferences and context to recommend products and streamline checkout.",
    coreFeatures: ["Smart recommendations", "Visual search", "Cart intelligence", "Order tracking"],
    possibleMvp: ["Catalog browse", "AI recommendations", "Checkout"],
    stack: ["Flutter", "OpenAI", "Stripe", "Supabase"],
  },
  "AI Real Estate Platform": {
    title: "AI Real Estate Platform",
    valueProposition: "Find the right home with AI-guided search.",
    whatItDoes:
      "Search listings, compare neighborhoods and get buyer support in one mobile product.",
    coreFeatures: ["AI search", "Map discovery", "Market insights", "Agent handoff"],
    possibleMvp: ["Listings feed", "Map pins", "AI Q&A", "Saved homes"],
    stack: ["Flutter", "Mapbox", "Claude", "Supabase"],
  },
  "AI Productivity App": {
    title: "AI Productivity App",
    valueProposition: "Focus and ship with an AI co-pilot in your pocket.",
    whatItDoes:
      "Unifies tasks, focus modes and automation so teams move faster with less friction.",
    coreFeatures: ["Smart tasks", "Focus timers", "AI summaries", "Workflow automations"],
    possibleMvp: ["Task inbox", "AI daily plan", "Focus mode", "Calendar sync"],
    stack: ["Flutter", "OpenAI", "n8n", "Supabase"],
  },
};

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  body: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "ai-native-workflows",
    title: "AI-native workflows for small teams",
    excerpt:
      "How lean teams wire design, AI and Flutter into one repeatable shipping loop.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Workflow",
    gradient: "from-blue-600/40 via-violet-600/30 to-transparent",
    body: [
      "AI-native means the model, context and UX are designed together from day one—not pasted on after launch.",
      "At Mapica we start with user jobs, then wire OpenAI or Claude into flows that feel inevitable: planning, coaching, search, support.",
      "The result is apps that feel magical but stay maintainable: clear guardrails, premium UI, and Flutter for one codebase across iOS and Android.",
    ],
  },
  {
    slug: "figma-to-flutter",
    title: "From Figma to Flutter in weeks",
    excerpt:
      "Our design-to-code pipeline that keeps pixels perfect across iOS and Android.",
    date: "Apr 3, 2026",
    readTime: "5 min read",
    category: "Design",
    gradient: "from-violet-600/40 via-fuchsia-600/30 to-transparent",
    body: [
      "Figma prototypes set the contract: typography, spacing, motion and component states before we write Dart.",
      "Flutter lets us ship one premium surface to both stores while Mapbox, Supabase and AI SDKs plug in behind the scenes.",
      "Weekly design reviews + fast builds mean founders see real apps in weeks, not quarters.",
    ],
  },
  {
    slug: "faster-mvps",
    title: "Building MVPs faster in 2026",
    excerpt:
      "Modern AI tooling and cross-platform stacks compress the path from idea to App Store.",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    category: "Startups",
    gradient: "from-cyan-600/40 via-blue-600/30 to-transparent",
    body: [
      "Founders used to wait months for a credible MVP. Today: Figma in days, Flutter build in weeks, AI features without hiring an ML team.",
      "Mapica targets 2–4 weeks for focused MVPs—travel, fitness, marketplaces, tools—depending on scope and integrations.",
      "Speed matters because learning from real users beats debating slides.",
    ],
  },
  {
    slug: "ai-assisted-product",
    title: "AI-assisted product development",
    excerpt:
      "Where humans set vision—and AI accelerates design, build and iteration without chaos.",
    date: "Feb 8, 2026",
    readTime: "7 min read",
    category: "Product",
    gradient: "from-indigo-600/40 via-purple-600/30 to-transparent",
    body: [
      "Agents aren't just chat bubbles—they book, summarize, route and trigger workflows via n8n, Supabase and your APIs.",
      "We design tool access, fallbacks and human handoff so automation feels helpful, not risky.",
      "The best mobile agents are concise, context-aware and tied to clear UI outcomes.",
    ],
  },
];
