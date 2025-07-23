import React, { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import ArticleCard from "../components/articles/ArticleCard"
import { articles } from "./articlesData"

const categories = ["All", "Product", "Tech", "Career", "Life"]

export default function Articles() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active)

  return (
    <>
      <Navbar />
      <main className="mt-12 px-6 md:px-16 py-16 space-y-8">
        <h1 className="text-3xl font-bold text-primary text-center">Latest Articles</h1>
        <div className="flex justify-center gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1 rounded-full text-sm ${active === c ? "bg-accent text-primary" : "bg-gray-200"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </main>
    </>
  )
}
