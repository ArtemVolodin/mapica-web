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
  valueProposition: string;
  accent: ProductAccent;
  ui: "travel" | "health" | "home" | "shop" | "estate" | "productivity";
}[] = [
  {
    title: "AI Travel Platform",
    valueProposition: "Plan smarter trips in minutes.",
    description: "Intelligent itineraries, live routing and conversational trip planning.",
    accent: "blue",
    ui: "travel",
  },
  {
    title: "AI Health Coach",
    valueProposition: "Wellness that adapts to you.",
    description: "Personalized wellness insights with adaptive coaching flows.",
    accent: "violet",
    ui: "health",
  },
  {
    title: "AI Home Services App",
    valueProposition: "Book help without the hassle.",
    description: "Smart booking, dispatch and real-time service coordination.",
    accent: "cyan",
    ui: "home",
  },
  {
    title: "AI Shopping Assistant",
    valueProposition: "Shop with context, not clutter.",
    description: "Context-aware recommendations and seamless checkout experiences.",
    accent: "indigo",
    ui: "shop",
  },
  {
    title: "AI Real Estate Platform",
    valueProposition: "Find the right home faster.",
    description: "Property discovery, valuations and agent workflows powered by AI.",
    accent: "purple",
    ui: "estate",
  },
  {
    title: "AI Productivity App",
    valueProposition: "Focus and ship with AI.",
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
  useCase: string;
  icon: LucideIcon;
  color: string;
}[] = [
  { name: "Figma", description: "Design system & prototypes", useCase: "Product UI & design systems", icon: PenTool, color: "#F24E1E" },
  { name: "Flutter", description: "Cross-platform mobile", useCase: "iPhone & Android apps", icon: Smartphone, color: "#54C5F8" },
  { name: "OpenAI", description: "GPT & embeddings", useCase: "AI features & chat", icon: Sparkles, color: "#10A37F" },
  { name: "Claude", description: "Reasoning & agents", useCase: "Workflows & agents", icon: Brain, color: "#D97757" },
  { name: "Supabase", description: "Auth & database", useCase: "User data & realtime", icon: Zap, color: "#3ECF8E" },
  { name: "Firebase", description: "Push & analytics", useCase: "Notifications & metrics", icon: Flame, color: "#FFCA28" },
  { name: "Mapbox", description: "Maps & location", useCase: "Maps & routing", icon: Map, color: "#4264FB" },
  { name: "Stripe", description: "Payments & billing", useCase: "Subscriptions & checkout", icon: CreditCard, color: "#635BFF" },
  { name: "n8n", description: "Workflow automation", useCase: "Ops & integrations", icon: Code2, color: "#EA4B71" },
];

export const footerLinks = {
  products: ["AI MVPs", "Mobile Apps", "AI Agents", "Automation", "SaaS Products"],
  company: [
    { label: "About", href: "#vision" },
    { label: "Process", href: "#process" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
  stack: ["Flutter", "OpenAI", "Claude", "Supabase", "n8n"],
  social: [
    { label: "X / Twitter", href: "https://x.com/MapicaIO" },
    { label: "GitHub", href: "https://github.com/ArtemVolodin/mapica-web" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mapica" },
    { label: "Email", href: "mailto:hello@mapica.io" },
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
