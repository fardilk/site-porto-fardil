import { useParams, Link } from "react-router-dom";
import type React from "react";
import Navbar from "../components/navbar/Navbar";
import { articles } from "./articlesData";
import LikeButton from "../components/articles/LikeButton";
import CommentSection from "../components/articles/CommentSection";
import RelatedArticles from "../components/articles/RelatedArticles";
import PageMeta from "../components/seo/PageMeta";
import { getFallbackImage } from "../components/articles/imageFallback";

function renderStructured(content: string) {
  const nodes: React.ReactNode[] = [];
  const lines = content.split(/\r?\n/);
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (para.length) {
      nodes.push(<p className="text-slate-800 leading-7">{para.join(" ")}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      nodes.push(
        <ul className="list-disc pl-6 text-slate-800">
          {list.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushList();
      nodes.push(<h2 className="text-2xl font-semibold text-slate-900 mt-6">{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushList();
      nodes.push(<h3 className="text-xl font-semibold text-slate-900 mt-4">{line.slice(4)}</h3>);
      continue;
    }
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }
    para.push(line);
  }
  flushPara();
  flushList();
  return nodes;
}

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
  <PageMeta
    title={`${article.title} | Fardil`}
    description={article.excerpt}
    image={article.coverImage || getFallbackImage(article)}
    type="article"
  />
  <Navbar />
  <main className="relative mt-12 px-6 md:px-12 lg:px-16 py-16">
        {/* Soft blue gradient background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-50"
               style={{
                 background:
                   "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.05) 35%, rgba(17,19,25,0.0) 70%)",
               }} />
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: 80% (4/5) content */}
          <div className="lg:col-span-4 space-y-6">
            <article className="space-y-5 bg-white rounded-2xl p-6 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{article.title}</h1>
              <div className="text-sm text-slate-500">
                {new Date(article.date).toLocaleDateString()} • <span className="capitalize">{article.category}</span> • {article.readTime ?? 5} min read
              </div>
              <img src={article.coverImage || getFallbackImage(article)} alt={article.title} className="w-full rounded-xl" loading="lazy" />
              <div className="prose max-w-none">
                {renderStructured(article.content)}
              </div>
              <div className="pt-2">
                <LikeButton />
              </div>
            </article>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <CommentSection storageKey={`comments:${article.slug}`} />
            </div>
            <Link to="/articles" className="text-blue-600 hover:underline">&larr; Back to articles</Link>
          </div>

          {/* Right: 20% (1/5) sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <RelatedArticles compact currentSlug={article.slug} items={articles.filter(a => a.category === article.category)} />
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hire Fardil</h3>
              <p className="text-slate-600 mb-4">Need a product-minded engineer to ship fast, with polish? Let’s talk about your goals.</p>
              <a href="/hire-me" className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Get in touch</a>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
