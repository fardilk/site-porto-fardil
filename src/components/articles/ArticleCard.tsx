import { Link } from "react-router-dom"

export type Article = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
}

export default function ArticleCard({ slug, title, date, category, excerpt }: Article) {
  return (
    <article className="rounded-2xl p-4 flex flex-col bg-white shadow hover:shadow-md transition-shadow">
  <h3 className="font-semibold text-lg mb-1 text-slate-900 line-clamp-2">{title}</h3>
      <div className="text-sm text-slate-500 mb-2">
        {date} • <span className="capitalize">{category}</span>
      </div>
  <p className="text-slate-700 flex-1 line-clamp-3">{excerpt}</p>
      <Link to={`/articles/${slug}`} className="mt-4 text-blue-600 font-medium hover:underline">
        Read more
      </Link>
    </article>
  )
}
