import React from "react"
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
    <article className="border rounded-lg p-4 flex flex-col">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="text-sm text-gray-500 mb-2">
        {date} • <span className="capitalize">{category}</span>
      </div>
      <p className="text-gray-700 flex-1">{excerpt}</p>
      <Link to={`/articles/${slug}`} className="mt-4 text-accent font-medium">
        Read more
      </Link>
    </article>
  )
}
