import ArticleHeroCarousel from "./ArticleHeroCarousel";
import ArticleGrid from "./ArticleGrid";
import type { Article } from "../../pages/articlesData";
import { getFallbackImage } from "./imageFallback";

type Props = {
  id: string;
  title: string;
  featured: Article[];
  popular: Article[];
  zebraIndex?: number; // for alternating background meshes
  latest?: Article[];
};

export default function CategorySection({ id, title, featured, popular, zebraIndex = 0, latest }: Props) {
  const isEven = zebraIndex % 2 === 0;
  const mesh = isEven
    ? "radial-gradient(60% 60% at 20% 10%, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0.08) 35%, rgba(255,255,255,0) 70%), radial-gradient(50% 50% at 80% 30%, rgba(99,102,241,0.12) 0%, rgba(248,250,252,0) 60%)"
    : "radial-gradient(60% 60% at 80% 20%, rgba(14,165,233,0.14) 0%, rgba(14,165,233,0.07) 35%, rgba(255,255,255,0) 70%), radial-gradient(50% 50% at 10% 40%, rgba(2,132,199,0.12) 0%, rgba(248,250,252,0) 60%)";
  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: mesh }} />
      <section id={id} className="container-80 px-6 md:px-12 py-12 space-y-6 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        {/* 70/30 split: featured left, popular right */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
          <div className="lg:col-span-7 h-full">
            <div className="md:min-h-[420px] lg:min-h-[560px] xl:min-h-[640px] 2xl:min-h-[720px] flex">
              <ArticleHeroCarousel items={featured} />
            </div>
          </div>
          <aside className="lg:col-span-3 h-full flex flex-col">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Most popular</h3>
            <div className="space-y-3 flex-1 overflow-hidden">
              {popular.slice(0, 3).map((a) => (
                <a
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="rounded-lg bg-white shadow hover:shadow-md overflow-hidden h-40 flex flex-col"
                >
                  <div className="w-full h-24 bg-slate-100">
                    <img src={a.coverImage || getFallbackImage(a, 640, 240)} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-2 flex-1 flex flex-col">
                    <div className="text-[11px] text-slate-500">
                      {new Date(a.date).toLocaleDateString()} • <span className="capitalize">{a.category}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-900 leading-tight mt-1 overflow-hidden line-clamp-2" style={{minHeight: '2.5rem'}}>
                      {a.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
  <h3 className="text-lg md:text-xl font-semibold text-slate-800">Latest Articles</h3>
  <ArticleGrid items={(latest ?? popular).slice(0, 3)} />
      </section>
    </div>
  );
}
