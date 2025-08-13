import ArticleGrid from "./ArticleGrid";
import { Link } from "react-router-dom";
import type { Article } from "../../pages/articlesData";

type Props = {
  currentSlug: string;
  items: Article[];
  compact?: boolean;
};

export default function RelatedArticles({ currentSlug, items, compact }: Props) {
  const filtered = items.filter((a) => a.slug !== currentSlug).slice(0, 6);
  if (filtered.length === 0) return null;
  return (
    <section className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold text-primary">See also</h3>
      {compact ? (
        <ul className="space-y-3">
          {filtered.map((a) => (
            <li key={a.slug}>
              <Link to={`/articles/${a.slug}`} className="block rounded-md px-2 py-2 hover:bg-slate-50 transition-colors">
                <div className="text-sm text-slate-500">
                  {new Date(a.date).toLocaleDateString()} • <span className="capitalize">{a.category}</span>
                </div>
                <div className="font-medium text-slate-900 line-clamp-2">{a.title}</div>
                <div className="text-xs text-slate-600 line-clamp-2">{a.excerpt}</div>
                <span className="text-blue-600 text-sm font-medium">Read more</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ArticleGrid items={filtered} />
      )}
    </section>
  );
}
