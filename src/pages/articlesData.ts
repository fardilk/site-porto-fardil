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

export type Article = {
  slug: string; // SEO slug, <= 60 chars
  title: string;
  date: string; // e.g., 2025-07-01 or display string
  category: Category;
  excerpt: string;
  content: string;
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
  {
    slug: "product-vision-that-aligns-team-and-customers",
    title: "Product Vision That Aligns Team and Customers",
    date: "2025-05-10",
    category: "Product",
    excerpt: "Craft a pragmatic vision that guides execution and energizes stakeholders.",
  content: `Great product vision isn’t a poster on the wall; it’s a decision tool your team reaches for when tradeoffs get hard. The best visions are practical, clear, and memorable. They describe a future state that customers recognize as valuable and that the team can translate into roadmaps without guessing. When a vision is real, you’ll hear engineers and designers invoke it in standups (“Which option gets us closer to self-serve onboarding by default?”), and you’ll hear customers echo it in their own words (“You’re the first tool that lets me do this without a specialist”).

Start by sharpening the problem and the audience. “We help small service businesses get paid on time without back-and-forth” is more actionable than “We revolutionize payments.” Add observable success criteria: what changes for your user in the first 90 days? Maybe it’s “reduce invoice aging from 21 days to 7,” or “cut onboarding clicks by 60%.” These are not roadmap items; they’re the yardsticks by which you judge whether you’re moving toward the vision.

Next, write non-goals for this year. Non-goals are liberating. They say, out loud, which good ideas you will not pursue yet. “No marketplace features in 2025,” “No custom workflows for enterprise,” or “No native desktop app” can be the difference between focused progress and diffuse, demoralizing work. Non-goals reduce thrash, protect team energy, and create air cover when you decline well-meaning requests.

Translate the vision into a handful of capability bets. Think of capabilities as verbs your product should perform reliably and delightfully. For our payments example, capabilities might include “collect payments automatically,” “resolve disputes quickly,” and “provide clear, proactive status.” Each capability then spawns outcome-oriented initiatives: “increase auto-collection rate from 35% to 70%,” or “reduce median dispute time from 10 days to 3.” The roadmap remains flexible on solutions while staying firm on outcomes.

Bring customers inside the vision. Share a one-page narrative with three pieces: the current pain (in your customers’ words), the envisioned flow (with a simple diagram), and the measurable outcomes. Invite 5–7 customers to a short call—no slides, just the one-pager. Ask where the story feels off. Ask what you’d need to change to make them switch immediately. You’ll learn which words resonate and which are empty calories.

Internally, socialize the vision with constraints. Engineers don’t need poetry; they need clarity. Answer the basics: What performance budgets are non-negotiable? What privacy and compliance constraints are in play? What manual work are we willing to accept in the first phase? Constraints remove ambiguity and let teams make fast, aligned decisions without waiting for permission.

Make the vision visible where work happens. A short doc pinned in Slack and your project tool beats a mural buried in a drive. Keep it to one screen. Include the one-sentence vision, the audience, the three capability bets, the top two success metrics, and the non-goals. If it doesn’t fit on a page, it won’t fit in anyone’s head.

Review progress monthly in terms of the vision, not just tickets closed. Pull a simple scorecard: Are we closer to the outcomes? What did we learn that changes our assumptions? What’s blocking the capability bets? If a metric is flat, don’t blame effort—interrogate the strategy. Perhaps the bet is right but the tactic is wrong; perhaps the bet itself needs reframing.

Expect tradeoffs. A clear vision helps you say no: to a bespoke customer request that serves one account but undermines your default path, to a flashy feature that would be hard to maintain, to a technical rewrite that delays outcomes by a quarter without unlocking new capabilities. When you do say yes to a deviation, be explicit about why and for how long. Temporary exceptions are fine; accidental strategy is not.

One practical pattern: draft your vision at three altitudes. The “headline” is what you’d print on a billboard—short and sticky. The “narrative” is a single page with the story and outcomes. The “appendix” collects assumptions, constraints, and rejected options. This layered format lets executives, customers, and builders engage at the right depth without losing consistency.

Finally, measure morale alongside metrics. A vision that aligns team and customers should also energize the people doing the work. In retros, ask: Does the vision help you decide? Where does it get fuzzy? What feels out of scope but keeps creeping in? Use those answers to refine the non-goals and the wording. If the team can’t remember the vision, it’s too long. If customers don’t recognize themselves in it, it’s too generic. Keep editing until both problems disappear.

Great product vision is not about predicting the future; it’s about choosing a direction that makes today’s decisions easier. When the vision is clear, non-goals are explicit, and capabilities are outcome-framed, you unlock faster delivery and more coherent product stories. Customers feel the difference in fewer steps, fewer surprises, and more progress where it matters: in the jobs they hired you to do.

If you read only one line, make it this: write a vision your team can use without you in the room—and that your customers could repeat without seeing your deck.`,
    coverImage: "/vite.svg",
  readTime: 7,
    tags: ["vision", "product", "leadership"],
    featured: true,
    popularScore: 92,
  },
  {
    slug: "11-reasons-why-recruiters-should-hire-fardil-as-product-manager",
    title: "11 Reason Why Recruiter Should Hire Fardil, as Their Product Manager",
    date: "2025-08-10",
    category: "Product",
    excerpt: "Eleven concrete reasons—outcomes, clarity, discovery, delivery, and more—why Fardil is a high-confidence PM hire.",
    content: `Hiring a Product Manager is ultimately about outcomes. Products either make measurable progress for customers and the business—or they don’t. Here are eleven reasons Fardil is a high-confidence bet as your next Product Manager, with concrete behaviors and examples that translate directly to results.

## 1) Outcome-first mindset
Fardil ties every initiative to a measurable change—activation, retention, or revenue—so teams ship what moves the needle. He starts roadmaps from a single question: “What customer behavior needs to change, and how will we know?” That anchors work in outcomes rather than output. For a self-serve onboarding project, he’ll set targets like “reduce time-to-value from 20 minutes to 7,” then design thin slices that validate the riskiest assumptions first. When trade-offs arise, the team defaults to the option that best advances the outcome. This focus prevents “feature drift,” keeps scope honest, and makes retrospectives meaningful.

## 2) Clarity under ambiguity
Great PMs don’t eliminate ambiguity—they create clarity within it. Fardil frames problems crisply, defines non-goals, and spells out success metrics that teams can execute against without hand-holding. He writes short problem narratives that fit on one page: the audience, the pain in their words, the edge constraints (privacy, performance, compliance), and what “good” looks like in 90 days. Non-goals are explicit: “No marketplace features in this phase,” “No bespoke per-customer workflows.” The result is momentum; designers and engineers can make decisions aligned with the strategy instead of waiting for approvals.

## 3) Strong discovery chops
Discovery reduces waste. Fardil blends qualitative and quantitative signals to narrow the solution space early. He’ll schedule 5–7 targeted customer calls, prototype two flows in low fidelity, and run a simple smoke test—like a pricing CTA that tracks intent—to evaluate demand before committing build time. He’s comfortable being wrong quickly in discovery so the team can be right in delivery. He documents what was learned, what changed because of it, and which assumptions remain open—so future teams inherit the context, not just the artifacts.

## 4) Storytelling that aligns
Strategy dies in translation if the story is inconsistent. Fardil uses a layered narrative: a headline anyone can repeat, a one-page story for operators, and an appendix with constraints for builders. With executives, he speaks in customer outcomes and risk; with engineers, he leads with constraints and edge cases; with customers, he focuses on the job to be done. The narrative stays the same, but the level of detail adjusts. This keeps sales, marketing, support, and product singing from the same sheet, which is especially critical during launches and pricing changes.

## 5) Pragmatic delivery
Shipping is a habit. Fardil sequences work as capability bets and lands value in thin, testable slices. He protects team focus by making trade-offs explicit: what we’ll do, what we’ll defer, and what we’ll never do. He avoids “big bang” releases unless they unlock a truly new capability; instead, he lands scaffolding that yields real learning—like releasing an internal-only version to measure data quality and support load before customer exposure. The effect is faster feedback, fewer surprises, and teams that feel progress week over week.

## 6) Cross-functional glue
Products succeed when functions move in lockstep. Fardil runs crisp cadences that connect design, engineering, marketing, sales, and support around the same outcomes. He writes short PRDs with the fewest words needed, shares launch checklists with owners and dates, and keeps a public decision log. He invites marketing early to co-own the narrative and instrumentation so success can be measured beyond vanity metrics. When something slips, he negotiates scope or sequence rather than schedule theater. People feel informed and trusted, which improves velocity more than any tool.

## 7) Data-informed, not data-blind
Metrics are a compass, not a cudgel. Fardil uses data to learn, not to justify. He makes sure metrics are instrumented with intent and that definitions are plain-language (“activated = completes A, B, and C within 24 hours”). When data conflicts with strong qualitative signals, he investigates the why—instrumentation gaps, cohort quirks, or mis-specified success criteria—instead of ignoring those signals. He prefers small, falsifiable bets and will kill a path quickly if the data says it isn’t working. That intellectual honesty compounds trust.

## 8) Taste for usable details
Delight isn’t decoration; it’s doing the basics beautifully. Fardil treats edge-case handling, empty states, loading skeletons, and performance budgets as core UX. He pushes for explicit error messages over generic failures, sees the risk in over-personalization, and insists on fast paths for frequent tasks. When pennies of latency add up, he works with engineering to budget them. He’ll cut one feature to make the core flow snappier. Customers feel the difference—even if they never name it—and support tickets go down.

## 9) Ethical and customer-trusting
Trust is a moat. Fardil favors transparent pricing, fair trials, and consent-first flows. He pushes against dark patterns and ensures permissions are purpose-bound and revocable. In B2B, he writes procurement-friendly summaries and security notes that help deals move. In consumer contexts, he keeps friction low without compromising user agency. This posture earns referrals and reduces churn. Teams also feel proud of what they ship, which is a performance multiplier that rarely shows up on spreadsheets but always shows up in outcomes.

## 10) Systems thinker
Products live inside systems—people, tools, policies. Fardil sees how product, ops, success, and support interact. He designs processes that scale without burning people out: simple escalation paths, clear SLAs for internal users, and dashboards that surface leading indicators before fires spread. He’s comfortable introducing manual steps in V1 when they accelerate learning, and equally comfortable automating them away once the value is proven. This pragmatic systems view prevents brittle launches and creates compounding capability.

## 11) Builder energy
Momentum matters. Fardil documents decisions, clears blockers, and keeps the team moving with calm urgency. He’s hands-on with prototypes when it helps, but he stays out of the way when the team is humming. He celebrates wins without hype and conducts blameless postmortems when things wobble. The vibe is simple: focused, kind, relentless. People like working on his teams because they learn, ship, and see their work land with customers.

## Final thought
If you need a PM who connects vision to delivery—and makes customers feel the difference in fewer steps, clearer stories, and stronger outcomes—Fardil is ready to help. Hire him when you want a product leader who will raise the bar on clarity, craft, and results.`,
  coverImage: "/Fardil On Semeru.png",
  readTime: 8,
  tags: ["hiring", "product", "pm"],
  featured: true,
  popularScore: 90,
  },
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
