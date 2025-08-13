import type { Article } from "../../pages/articlesData";

const CATEGORY_QUERY: Record<string, string> = {
  Product: "product%20management",
  Hospital: "hospital%20healthcare",
  Startup: "startup%20founders",
  Technology: "technology%20software",
  Career: "career%20growth",
  Hobbies: "hobbies",
};

export function getFallbackImage(a: Pick<Article, "category" | "title" >, width = 800, height = 450) {
  const q = CATEGORY_QUERY[a.category] || "product";
  // Unsplash source returns a random but relevant image
  return `https://source.unsplash.com/${width}x${height}/?${q}`;
}
