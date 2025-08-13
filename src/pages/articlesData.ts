import reasonsArticle from "./articles/11-reasons-why-recruiters-should-hire-fardil-as-product-manager";
import productVisionArticle from "./articles/product-vision-that-aligns-team-and-customers";

export type Category =
  | "Product"
  | "Hospital"
  | "Startup"
  | "Technology"
  | "Career"
  | "Hobbies";

export const CATEGORIES: Category[] = [
  "Product",
  "Hospital",
  "Startup",
  "Technology",
  "Career",
  "Hobbies",
];

// Rich content blocks for articles (each paragraph or element is a JSON block)
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level?: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: "list"; style?: "bulleted" | "numbered"; items: string[] }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "code"; language?: string; code: string }
  | { type: "hr" }
  | { type: "table"; headers?: string[]; rows: string[][] }
  | { type: "quote"; text: string; cite?: string };

export type Article = {
  slug: string; // SEO slug, <= 60 chars
  title: string;
  date: string; // e.g., 2025-07-01 or display string
  category: Category;
  excerpt: string;
  // Legacy plain-text content (parsed into paragraphs). Use `blocks` for richer content.
  content?: string;
  // New: Structured content blocks. Each paragraph/element is one JSON block.
  blocks?: Block[];
  coverImage?: string;
  readTime?: number;
  tags?: string[];
  featured?: boolean; // include in hero
  popularScore?: number; // sort for popular list
};

// Helper for safe slugs (not used at runtime, just for reference)
export function ensureSeoSlug(slug: string): string {
  const safe = slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return safe.length > 60 ? safe.slice(0, 60).replace(/-+$/g, "") : safe;
}

export const articles: Article[] = [
  // Product
  productVisionArticle,
  reasonsArticle,
  {
    slug: "roadmapping-with-outcomes-not-features",
    title: "Roadmapping with Outcomes, Not Features",
    date: "2025-04-02",
    category: "Product",
    excerpt: "Swap feature checklists for measurable outcomes customers feel.",
    content: "Outcomes-first roadmaps keep teams honest about impact. Start from a KPI delta, explore solution bets, and keep bets small to learn quickly...",
    coverImage: "/vite.svg",
    readTime: 5,
    popularScore: 80,
  },

  // Hospital
  {
    slug: "hospital-ops-automation-that-respects-care",
    title: "Hospital Ops Automation That Respects Care",
    date: "2025-03-18",
    category: "Hospital",
    excerpt: "Automate admin, not empathy. Where to start and how to measure.",
    content: "Hospitals are complex systems. The right automations reduce waiting time and increase staff focus on patients...",
    coverImage: "/vite.svg",
    readTime: 5,
    featured: true,
    popularScore: 77,
  },
  {
    slug: "reducing-er-bottlenecks-with-simple-queues",
    title: "Reducing ER Bottlenecks with Simple Queues",
    date: "2025-02-21",
    category: "Hospital",
    excerpt: "A lightweight triage queue can cut perceived wait time dramatically.",
    content: "Queues sound boring until they unblock patient flow. This post covers a minimal design...",
    coverImage: "/vite.svg",
    readTime: 4,
    popularScore: 71,
  },

  // Startup
  {
    slug: "startup-first-10-customers-without-ads",
    title: "Your Startup's First 10 Customers—Without Ads",
    date: "2025-05-01",
    category: "Startup",
    excerpt: "Personal outreach beats cold ads. Scripts, cadence, and tooling.",
    content: "The first 10 customers come from conversations, not campaigns. Here's a step-by-step playbook...",
    coverImage: "/vite.svg",
    readTime: 7,
    featured: true,
    popularScore: 89,
  },
  {
    slug: "pricing-experiments-that-dont-anger-users",
    title: "Pricing Experiments That Don't Anger Users",
    date: "2025-04-05",
    category: "Startup",
    excerpt: "Learn fast on pricing while keeping trust.",
    content: "Transparent trials, upgrade prompts with value framing, and clear guarantees...",
    coverImage: "/vite.svg",
    readTime: 5,
    popularScore: 76,
  },

  // Technology
  {
    slug: "technology-stack-choices-for-speed-and-safety",
    title: "Technology Stack Choices for Speed and Safety",
    date: "2025-06-06",
    category: "Technology",
    excerpt: "Keep the stack boring where it matters, modern where it pays.",
    content: "Default to well-known tools for the backbone, experiment at the edges. This reduces risk while allowing learning...",
    coverImage: "/vite.svg",
    readTime: 6,
    featured: true,
    popularScore: 88,
  },
  {
    slug: "ship-faster-with-preview-environments",
    title: "Ship Faster with Preview Environments",
    date: "2025-03-28",
    category: "Technology",
    excerpt: "Per-PR previews reduce cycle time and increase confidence.",
    content: "Preview environments unlock parallel review, catching issues earlier...",
    coverImage: "/vite.svg",
    readTime: 4,
    popularScore: 70,
  },

  // Career
  {
    slug: "career-capital-build-it-deliberately",
    title: "Career Capital: Build It Deliberately",
    date: "2025-02-10",
    category: "Career",
    excerpt: "Skills, network, reputation—compound them like assets.",
    content: "Pick one leverage skill per quarter and apply it in public. Keep a brag doc and share outcomes...",
    coverImage: "/vite.svg",
    readTime: 6,
    featured: true,
    popularScore: 86,
  },
  {
    slug: "managers-that-coach-not-control",
    title: "Managers That Coach, Not Control",
    date: "2025-01-22",
    category: "Career",
    excerpt: "Shift from task assigning to outcome coaching.",
    content: "Coaching managers ask better questions and unblock autonomy...",
    coverImage: "/vite.svg",
    readTime: 5,
    popularScore: 68,
  },

  // Hobbies
  {
    slug: "hobbies-that-refresh-builder-energy",
    title: "Hobbies That Refresh Builder Energy",
    date: "2025-05-30",
    category: "Hobbies",
    excerpt: "Pick restorative hobbies that complement deep work.",
    content: "From woodworking to trail running, hobbies that contrast your day job recharge creativity...",
    coverImage: "/vite.svg",
    readTime: 4,
    featured: true,
    popularScore: 74,
  },
  {
    slug: "learn-music-in-20-minutes-a-day",
    title: "Learn Music in 20 Minutes a Day",
    date: "2025-03-03",
    category: "Hobbies",
    excerpt: "Micro-practice that actually sticks.",
    content: "Habit stacks, low-friction setup, and playful goals make music practice sustainable...",
    coverImage: "/vite.svg",
    readTime: 3,
    popularScore: 62,
  },
];
