import ArticleCard from "./ArticleCard";
import type { Article } from "../../pages/articlesData";

type Props = {
  items: Article[];
};

export default function ArticleGrid({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <ArticleCard key={a.slug} {...a} />
      ))}
    </div>
  );
}
