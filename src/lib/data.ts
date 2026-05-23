import {
  Bot,
  Brain,
  Cloud,
  Code2,
  CreditCard,
  PenTool,
  Flame,
  Map,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  {
    value: "AI-native",
    label: "Workflows",
    description: "Design, build and ship with modern AI tooling from day one.",
  },
  {
    value: "2–4",
    label: "Weeks to MVP",
    description: "Rapid prototyping to production-ready cross-platform apps.",
  },
  {
    value: "Cross-platform",
    label: "By default",
    description: "iPhone, Android and web from a single Flutter codebase.",
  },
  {
    value: "Modern",
    label: "AI stack",
    description: "OpenAI, Claude, Supabase and automation wired in.",
  },
] as const;

export type ProductAccent = "blue" | "violet" | "cyan" | "indigo" | "purple" | "sky";

export const products: {
  title: string;
  description: string;
  accent: ProductAccent;
  ui: "travel" | "health" | "home" | "shop" | "estate" | "productivity";
}[] = [
  {
    title: "AI Travel Platform",
    description: "Intelligent itineraries, live routing and conversational trip planning.",
    accent: "blue",
    ui: "travel",
  },
  {
    title: "AI Health Coach",
    description: "Personalized wellness insights with adaptive coaching flows.",
    accent: "violet",
    ui: "health",
  },
  {
    title: "AI Home Services App",
    description: "Smart booking, dispatch and real-time service coordination.",
    accent: "cyan",
    ui: "home",
  },
  {
    title: "AI Shopping Assistant",
    description: "Context-aware recommendations and seamless checkout experiences.",
    accent: "indigo",
    ui: "shop",
  },
  {
    title: "AI Real Estate Platform",
    description: "Property discovery, valuations and agent workflows powered by AI.",
    accent: "purple",
    ui: "estate",
  },
  {
    title: "AI Productivity App",
    description: "Focus tools, task intelligence and workflow automation in one app.",
    accent: "sky",
    ui: "productivity",
  },
];

export const services: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "AI MVPs",
    description: "Validate ideas fast with production-grade prototypes investors can touch.",
    icon: Rocket,
  },
  {
    title: "iPhone & Android Apps",
    description: "Native-feeling Flutter apps designed in Figma and shipped to both stores.",
    icon: Smartphone,
  },
  {
    title: "AI Agents",
    description: "Custom agents that reason, act and integrate with your product stack.",
    icon: Bot,
  },
  {
    title: "AI Automation",
    description: "Workflows that connect your tools, data and teams without manual overhead.",
    icon: Workflow,
  },
  {
    title: "SaaS Products",
    description: "Subscription-ready platforms with auth, billing and analytics built in.",
    icon: Cloud,
  },
  {
    title: "OpenAI & Claude Integrations",
    description: "Best-in-class LLM features embedded safely into your mobile experience.",
    icon: Brain,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Idea & Strategy",
    description: "Define the product vision, user flows and AI opportunities together.",
  },
  {
    step: "02",
    title: "Figma Prototype",
    description: "High-fidelity UI and interactive prototypes before a single line of code.",
  },
  {
    step: "03",
    title: "AI + Flutter Build",
    description: "Cross-platform development with AI integrations and backend wiring.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    description: "App Store release, analytics and continuous improvement cycles.",
  },
] as const;

export const stackItems: {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}[] = [
  { name: "Figma", description: "Design system & prototypes", icon: PenTool, color: "#F24E1E" },
  { name: "Flutter", description: "Cross-platform mobile", icon: Smartphone, color: "#54C5F8" },
  { name: "OpenAI", description: "GPT & embeddings", icon: Sparkles, color: "#10A37F" },
  { name: "Claude", description: "Reasoning & agents", icon: Brain, color: "#D97757" },
  { name: "Supabase", description: "Auth & database", icon: Zap, color: "#3ECF8E" },
  { name: "Firebase", description: "Push & analytics", icon: Flame, color: "#FFCA28" },
  { name: "Mapbox", description: "Maps & location", icon: Map, color: "#4264FB" },
  { name: "Stripe", description: "Payments & billing", icon: CreditCard, color: "#635BFF" },
  { name: "n8n", description: "Workflow automation", icon: Code2, color: "#EA4B71" },
];

export const journalPosts = [
  {
    title: "Building AI-native products",
    excerpt: "How we ship mobile apps where AI is core infrastructure, not a bolt-on feature.",
    date: "May 2026",
    gradient: "from-blue-600/40 via-violet-600/30 to-transparent",
  },
  {
    title: "Figma to Flutter workflow",
    excerpt: "Our design-to-code pipeline that keeps pixels perfect across iOS and Android.",
    date: "Apr 2026",
    gradient: "from-violet-600/40 via-fuchsia-600/30 to-transparent",
  },
  {
    title: "AI product development",
    excerpt: "Choosing models, guardrails and UX patterns that feel magical—not gimmicky.",
    date: "Mar 2026",
    gradient: "from-cyan-600/40 via-blue-600/30 to-transparent",
  },
  {
    title: "Startup building with AI",
    excerpt: "Lessons from launching MVPs in weeks instead of quarters with modern tooling.",
    date: "Feb 2026",
    gradient: "from-indigo-600/40 via-purple-600/30 to-transparent",
  },
];

export const footerLinks = {
  products: ["AI MVPs", "Mobile Apps", "AI Agents", "Automation"],
  company: ["About", "Process", "Journal", "Contact"],
  stack: ["Flutter", "OpenAI", "Claude", "Supabase"],
  social: [
    { label: "X / Twitter", href: "https://x.com/MapicaIO" },
    { label: "GitHub", href: "https://github.com/ArtemVolodin/mapica-web" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mapica" },
  ],
} as const;

export const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
] as const;
