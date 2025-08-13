
import { useMemo, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import CategorySection from "../components/articles/CategorySection";
import { articles, CATEGORIES } from "./articlesData";
import PageMeta from "../components/seo/PageMeta";
import ArticleGrid from "../components/articles/ArticleGrid";

export default function Articles() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as typeof articles;
    return articles.filter((a) =>
      [a.title, a.excerpt, a.category, ...(a.tags ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <>
      <PageMeta
        title="Articles | Fardil"
        description="Browse featured and popular reads across Product, Technology, Startup, and more."
        image="/fardil-on-semeru.png"
        type="website"
      />
      <Navbar />
      <main
        className="relative mt-12 py-10 overflow-hidden bg-slate-50"
        style={{
          backgroundImage: [
            'radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.06) 35%, rgba(248,250,252,0.0) 72%)',
            'radial-gradient(45% 45% at 85% 85%, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.05) 30%, rgba(248,250,252,0) 66%)',
            'radial-gradient(35% 35% at 10% 15%, rgba(96,165,250,0.07) 0%, rgba(96,165,250,0.04) 25%, rgba(248,250,252,0) 60%)',
          ].join(', '),
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Very soft blue + orange mesh background layer (root) is below; content is wrapped in z-10 */}
        
        {/* Dark mesh hero */}
        <div className="relative z-10 space-y-10">
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0">
            <div className="h-[220px] sm:h-[280px] md:h-[320px] w-full"
                 style={{
                   background:
                     "radial-gradient(40% 40% at 20% 20%, rgba(59,130,246,0.35) 0%, rgba(2,6,23,0) 60%), radial-gradient(50% 50% at 80% 10%, rgba(168,85,247,0.30) 0%, rgba(2,6,23,0) 60%), linear-gradient(180deg, #0b1220 0%, #0a1020 100%)",
                 }} />
          </div>
          <div className="relative z-10 container-80 px-6 md:px-12 py-10 md:py-14">
            <h1 className="text-3xl md:text-4xl font-bold text-white">We build projects that help you meet your goals</h1>
            <p className="text-slate-200 mt-3 max-w-2xl">Search by category or browse featured and popular reads.</p>
          </div>
        </section>
  {/* Very soft blue + orange mesh background layer (slightly increased visibility) */}
  <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] rounded-full blur-2xl"
               style={{
                 background:
                   [
                     // soft blue core (stronger)
                     "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0.10) 35%, rgba(248,250,252,0.0) 72%)",
                     // soft orange glow near bottom-right (stronger)
                     "radial-gradient(45% 45% at 85% 85%, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.08) 32%, rgba(248,250,252,0) 66%)",
                     // faint blue accent near top-left (stronger)
                     "radial-gradient(35% 35% at 10% 15%, rgba(96,165,250,0.10) 0%, rgba(96,165,250,0.06) 25%, rgba(248,250,252,0) 60%)",
                   ].join(", ")
               }} />
        </div>
        

        {/* Sticky category nav with search and filters */}
        <div className="sticky top-16 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow">
          <div className="container-80 px-6 md:px-12 py-3 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <nav className="flex gap-2 overflow-x-auto no-scrollbar">
              {["All", ...CATEGORIES].map((cat) => {
                const active = activeCat === cat;
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={
                      `px-3 py-1 rounded-full text-sm whitespace-nowrap transition ` +
                      (active
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white text-slate-700 shadow-sm hover:shadow")
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="px-3 py-2 rounded-md bg-white text-slate-900 min-w-[240px] outline-none shadow-[0_0_0_1px_rgba(15,23,42,0.15)] focus:shadow-[0_0_0_2px_rgba(37,99,235,0.45)]"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>

  {query.trim() ? (
          <section className="container-80 px-6 md:px-12 py-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Search results ({results.length})
            </h2>
            <ArticleGrid items={results} />
          </section>
        ) : null}

        {(() => {
          // Filter logic combining activeCat and query state for section rendering
          const catsToRender = activeCat === "All" ? CATEGORIES : [activeCat as (typeof CATEGORIES)[number]];
          return catsToRender.map((cat, idx) => {
            let inCat = articles.filter((a) => a.category === cat);
            if (query.trim()) {
              const q = query.trim().toLowerCase();
              inCat = inCat.filter((a) =>
                [a.title, a.excerpt, a.category, ...(a.tags ?? [])]
                  .join(" ")
                  .toLowerCase()
                  .includes(q)
              );
            }
            const featured = inCat.filter((a) => a.featured);
            const popular = inCat
              .slice()
              .sort((a, b) => (b.popularScore ?? 0) - (a.popularScore ?? 0));
            const latest = inCat
              .slice()
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            if (inCat.length === 0) return null;
            return (
              <CategorySection
                key={cat}
                zebraIndex={idx}
                id={`cat-${cat.toLowerCase()}`}
                title={cat}
                featured={featured}
                popular={popular}
                latest={latest}
              />
            );
          });
        })()}
        </div>
      </main>
    </>
  );
}
