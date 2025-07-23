import { useParams, Link } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { articles } from "./articlesData"

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) {
    return (
      <>
        <Navbar />
        <main className="mt-12 px-6 md:px-16 py-16">
          <p>Article not found.</p>
          <Link to="/articles" className="text-accent">Back to articles</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mt-12 px-6 md:px-16 py-16 max-w-[720px] mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-primary">{article.title}</h1>
        <div className="text-sm text-gray-500">
          {article.date} • <span className="capitalize">{article.category}</span> • 5 min read
        </div>
        <p className="text-gray-700 whitespace-pre-line">{article.content}</p>
        <Link to="/articles" className="text-accent">&larr; Back to articles</Link>
        <div className="pt-8 border-t">
          <p className="text-gray-700">Share this article</p>
        </div>
      </main>
    </>
  )
}
