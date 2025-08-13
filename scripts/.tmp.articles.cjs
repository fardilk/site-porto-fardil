var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pages/articlesData.ts
var articlesData_exports = {};
__export(articlesData_exports, {
  CATEGORIES: () => CATEGORIES,
  articles: () => articles,
  ensureSeoSlug: () => ensureSeoSlug
});
module.exports = __toCommonJS(articlesData_exports);
var CATEGORIES = [
  "Product",
  "Hospital",
  "Startup",
  "Technology",
  "Career",
  "Hobbies"
];
function ensureSeoSlug(slug) {
  const safe = slug.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
  return safe.length > 60 ? safe.slice(0, 60).replace(/-+$/g, "") : safe;
}
var articles = [
  // Product
  {
    slug: "product-vision-that-aligns-team-and-customers",
    title: "Product Vision That Aligns Team and Customers",
    date: "2025-05-10",
    category: "Product",
    excerpt: "Craft a pragmatic vision that guides execution and energizes stakeholders.",
    content: `Great product vision isn\u2019t a poster on the wall; it\u2019s a decision tool your team reaches for when tradeoffs get hard. The best visions are practical, clear, and memorable. They describe a future state that customers recognize as valuable and that the team can translate into roadmaps without guessing. When a vision is real, you\u2019ll hear engineers and designers invoke it in standups (\u201CWhich option gets us closer to self-serve onboarding by default?\u201D), and you\u2019ll hear customers echo it in their own words (\u201CYou\u2019re the first tool that lets me do this without a specialist\u201D).

Start by sharpening the problem and the audience. \u201CWe help small service businesses get paid on time without back-and-forth\u201D is more actionable than \u201CWe revolutionize payments.\u201D Add observable success criteria: what changes for your user in the first 90 days? Maybe it\u2019s \u201Creduce invoice aging from 21 days to 7,\u201D or \u201Ccut onboarding clicks by 60%.\u201D These are not roadmap items; they\u2019re the yardsticks by which you judge whether you\u2019re moving toward the vision.

Next, write non-goals for this year. Non-goals are liberating. They say, out loud, which good ideas you will not pursue yet. \u201CNo marketplace features in 2025,\u201D \u201CNo custom workflows for enterprise,\u201D or \u201CNo native desktop app\u201D can be the difference between focused progress and diffuse, demoralizing work. Non-goals reduce thrash, protect team energy, and create air cover when you decline well-meaning requests.

Translate the vision into a handful of capability bets. Think of capabilities as verbs your product should perform reliably and delightfully. For our payments example, capabilities might include \u201Ccollect payments automatically,\u201D \u201Cresolve disputes quickly,\u201D and \u201Cprovide clear, proactive status.\u201D Each capability then spawns outcome-oriented initiatives: \u201Cincrease auto-collection rate from 35% to 70%,\u201D or \u201Creduce median dispute time from 10 days to 3.\u201D The roadmap remains flexible on solutions while staying firm on outcomes.

Bring customers inside the vision. Share a one-page narrative with three pieces: the current pain (in your customers\u2019 words), the envisioned flow (with a simple diagram), and the measurable outcomes. Invite 5\u20137 customers to a short call\u2014no slides, just the one-pager. Ask where the story feels off. Ask what you\u2019d need to change to make them switch immediately. You\u2019ll learn which words resonate and which are empty calories.

Internally, socialize the vision with constraints. Engineers don\u2019t need poetry; they need clarity. Answer the basics: What performance budgets are non-negotiable? What privacy and compliance constraints are in play? What manual work are we willing to accept in the first phase? Constraints remove ambiguity and let teams make fast, aligned decisions without waiting for permission.

Make the vision visible where work happens. A short doc pinned in Slack and your project tool beats a mural buried in a drive. Keep it to one screen. Include the one-sentence vision, the audience, the three capability bets, the top two success metrics, and the non-goals. If it doesn\u2019t fit on a page, it won\u2019t fit in anyone\u2019s head.

Review progress monthly in terms of the vision, not just tickets closed. Pull a simple scorecard: Are we closer to the outcomes? What did we learn that changes our assumptions? What\u2019s blocking the capability bets? If a metric is flat, don\u2019t blame effort\u2014interrogate the strategy. Perhaps the bet is right but the tactic is wrong; perhaps the bet itself needs reframing.

Expect tradeoffs. A clear vision helps you say no: to a bespoke customer request that serves one account but undermines your default path, to a flashy feature that would be hard to maintain, to a technical rewrite that delays outcomes by a quarter without unlocking new capabilities. When you do say yes to a deviation, be explicit about why and for how long. Temporary exceptions are fine; accidental strategy is not.

One practical pattern: draft your vision at three altitudes. The \u201Cheadline\u201D is what you\u2019d print on a billboard\u2014short and sticky. The \u201Cnarrative\u201D is a single page with the story and outcomes. The \u201Cappendix\u201D collects assumptions, constraints, and rejected options. This layered format lets executives, customers, and builders engage at the right depth without losing consistency.

Finally, measure morale alongside metrics. A vision that aligns team and customers should also energize the people doing the work. In retros, ask: Does the vision help you decide? Where does it get fuzzy? What feels out of scope but keeps creeping in? Use those answers to refine the non-goals and the wording. If the team can\u2019t remember the vision, it\u2019s too long. If customers don\u2019t recognize themselves in it, it\u2019s too generic. Keep editing until both problems disappear.

Great product vision is not about predicting the future; it\u2019s about choosing a direction that makes today\u2019s decisions easier. When the vision is clear, non-goals are explicit, and capabilities are outcome-framed, you unlock faster delivery and more coherent product stories. Customers feel the difference in fewer steps, fewer surprises, and more progress where it matters: in the jobs they hired you to do.

If you read only one line, make it this: write a vision your team can use without you in the room\u2014and that your customers could repeat without seeing your deck.`,
    coverImage: "/vite.svg",
    readTime: 7,
    tags: ["vision", "product", "leadership"],
    featured: true,
    popularScore: 92
  },
  {
    slug: "11-reasons-why-recruiters-should-hire-fardil-as-product-manager",
    title: "11 Reason Why Recruiter Should Hire Fardil, as Their Product Manager",
    date: "2025-08-10",
    category: "Product",
    excerpt: "Eleven concrete reasons\u2014outcomes, clarity, discovery, delivery, and more\u2014why Fardil is a high-confidence PM hire.",
    content: `Hiring a Product Manager is ultimately about outcomes. Products either make measurable progress for customers and the business\u2014or they don\u2019t. Here are eleven reasons Fardil is a high-confidence bet as your next Product Manager, with concrete behaviors and examples that translate directly to results.

## 1) Outcome-first mindset
Fardil ties every initiative to a measurable change\u2014activation, retention, or revenue\u2014so teams ship what moves the needle. He starts roadmaps from a single question: \u201CWhat customer behavior needs to change, and how will we know?\u201D That anchors work in outcomes rather than output. For a self-serve onboarding project, he\u2019ll set targets like \u201Creduce time-to-value from 20 minutes to 7,\u201D then design thin slices that validate the riskiest assumptions first. When trade-offs arise, the team defaults to the option that best advances the outcome. This focus prevents \u201Cfeature drift,\u201D keeps scope honest, and makes retrospectives meaningful.

## 2) Clarity under ambiguity
Great PMs don\u2019t eliminate ambiguity\u2014they create clarity within it. Fardil frames problems crisply, defines non-goals, and spells out success metrics that teams can execute against without hand-holding. He writes short problem narratives that fit on one page: the audience, the pain in their words, the edge constraints (privacy, performance, compliance), and what \u201Cgood\u201D looks like in 90 days. Non-goals are explicit: \u201CNo marketplace features in this phase,\u201D \u201CNo bespoke per-customer workflows.\u201D The result is momentum; designers and engineers can make decisions aligned with the strategy instead of waiting for approvals.

## 3) Strong discovery chops
Discovery reduces waste. Fardil blends qualitative and quantitative signals to narrow the solution space early. He\u2019ll schedule 5\u20137 targeted customer calls, prototype two flows in low fidelity, and run a simple smoke test\u2014like a pricing CTA that tracks intent\u2014to evaluate demand before committing build time. He\u2019s comfortable being wrong quickly in discovery so the team can be right in delivery. He documents what was learned, what changed because of it, and which assumptions remain open\u2014so future teams inherit the context, not just the artifacts.

## 4) Storytelling that aligns
Strategy dies in translation if the story is inconsistent. Fardil uses a layered narrative: a headline anyone can repeat, a one-page story for operators, and an appendix with constraints for builders. With executives, he speaks in customer outcomes and risk; with engineers, he leads with constraints and edge cases; with customers, he focuses on the job to be done. The narrative stays the same, but the level of detail adjusts. This keeps sales, marketing, support, and product singing from the same sheet, which is especially critical during launches and pricing changes.

## 5) Pragmatic delivery
Shipping is a habit. Fardil sequences work as capability bets and lands value in thin, testable slices. He protects team focus by making trade-offs explicit: what we\u2019ll do, what we\u2019ll defer, and what we\u2019ll never do. He avoids \u201Cbig bang\u201D releases unless they unlock a truly new capability; instead, he lands scaffolding that yields real learning\u2014like releasing an internal-only version to measure data quality and support load before customer exposure. The effect is faster feedback, fewer surprises, and teams that feel progress week over week.

## 6) Cross-functional glue
Products succeed when functions move in lockstep. Fardil runs crisp cadences that connect design, engineering, marketing, sales, and support around the same outcomes. He writes short PRDs with the fewest words needed, shares launch checklists with owners and dates, and keeps a public decision log. He invites marketing early to co-own the narrative and instrumentation so success can be measured beyond vanity metrics. When something slips, he negotiates scope or sequence rather than schedule theater. People feel informed and trusted, which improves velocity more than any tool.

## 7) Data-informed, not data-blind
Metrics are a compass, not a cudgel. Fardil uses data to learn, not to justify. He makes sure metrics are instrumented with intent and that definitions are plain-language (\u201Cactivated = completes A, B, and C within 24 hours\u201D). When data conflicts with strong qualitative signals, he investigates the why\u2014instrumentation gaps, cohort quirks, or mis-specified success criteria\u2014instead of ignoring those signals. He prefers small, falsifiable bets and will kill a path quickly if the data says it isn\u2019t working. That intellectual honesty compounds trust.

## 8) Taste for usable details
Delight isn\u2019t decoration; it\u2019s doing the basics beautifully. Fardil treats edge-case handling, empty states, loading skeletons, and performance budgets as core UX. He pushes for explicit error messages over generic failures, sees the risk in over-personalization, and insists on fast paths for frequent tasks. When pennies of latency add up, he works with engineering to budget them. He\u2019ll cut one feature to make the core flow snappier. Customers feel the difference\u2014even if they never name it\u2014and support tickets go down.

## 9) Ethical and customer-trusting
Trust is a moat. Fardil favors transparent pricing, fair trials, and consent-first flows. He pushes against dark patterns and ensures permissions are purpose-bound and revocable. In B2B, he writes procurement-friendly summaries and security notes that help deals move. In consumer contexts, he keeps friction low without compromising user agency. This posture earns referrals and reduces churn. Teams also feel proud of what they ship, which is a performance multiplier that rarely shows up on spreadsheets but always shows up in outcomes.

## 10) Systems thinker
Products live inside systems\u2014people, tools, policies. Fardil sees how product, ops, success, and support interact. He designs processes that scale without burning people out: simple escalation paths, clear SLAs for internal users, and dashboards that surface leading indicators before fires spread. He\u2019s comfortable introducing manual steps in V1 when they accelerate learning, and equally comfortable automating them away once the value is proven. This pragmatic systems view prevents brittle launches and creates compounding capability.

## 11) Builder energy
Momentum matters. Fardil documents decisions, clears blockers, and keeps the team moving with calm urgency. He\u2019s hands-on with prototypes when it helps, but he stays out of the way when the team is humming. He celebrates wins without hype and conducts blameless postmortems when things wobble. The vibe is simple: focused, kind, relentless. People like working on his teams because they learn, ship, and see their work land with customers.

## Final thought
If you need a PM who connects vision to delivery\u2014and makes customers feel the difference in fewer steps, clearer stories, and stronger outcomes\u2014Fardil is ready to help. Hire him when you want a product leader who will raise the bar on clarity, craft, and results.`,
    coverImage: "/Fardil On Semeru.png",
    readTime: 8,
    tags: ["hiring", "product", "pm"],
    featured: true,
    popularScore: 90
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
    popularScore: 80
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
    popularScore: 77
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
    popularScore: 71
  },
  // Startup
  {
    slug: "startup-first-10-customers-without-ads",
    title: "Your Startup's First 10 Customers\u2014Without Ads",
    date: "2025-05-01",
    category: "Startup",
    excerpt: "Personal outreach beats cold ads. Scripts, cadence, and tooling.",
    content: "The first 10 customers come from conversations, not campaigns. Here's a step-by-step playbook...",
    coverImage: "/vite.svg",
    readTime: 7,
    featured: true,
    popularScore: 89
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
    popularScore: 76
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
    popularScore: 88
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
    popularScore: 70
  },
  // Career
  {
    slug: "career-capital-build-it-deliberately",
    title: "Career Capital: Build It Deliberately",
    date: "2025-02-10",
    category: "Career",
    excerpt: "Skills, network, reputation\u2014compound them like assets.",
    content: "Pick one leverage skill per quarter and apply it in public. Keep a brag doc and share outcomes...",
    coverImage: "/vite.svg",
    readTime: 6,
    featured: true,
    popularScore: 86
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
    popularScore: 68
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
    popularScore: 74
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
    popularScore: 62
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CATEGORIES,
  articles,
  ensureSeoSlug
});
