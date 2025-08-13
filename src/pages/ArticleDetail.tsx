import { useParams, Link } from "react-router-dom";
import type React from "react";
import Navbar from "../components/navbar/Navbar";
import { articles } from "./articlesData";
import LikeButton from "../components/articles/LikeButton";
import CommentSection from "../components/articles/CommentSection";
import RelatedArticles from "../components/articles/RelatedArticles";
import PageMeta from "../components/seo/PageMeta";
import { getFallbackImage } from "../components/articles/imageFallback";

function parseInlineAnchors(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const anchorRe = /(<a\b[^>]*>.*?<\/a>)/gi;
  let lastIndex = 0;
  const matches = [...text.matchAll(anchorRe)];
  if (matches.length === 0) return [text];
  for (const m of matches) {
    const idx = m.index ?? 0;
    if (idx > lastIndex) {
      parts.push(text.slice(lastIndex, idx));
    }
    const raw = m[0];
    // Extract href, class and inner text (support both single and double quotes)
    const hrefMatch = /href\s*=\s*("([^"]+)"|'([^']+)')/i.exec(raw);
    const classMatch = /class\s*=\s*("([^"]+)"|'([^']+)')/i.exec(raw);
    const href = hrefMatch?.[2] || hrefMatch?.[3] || "#";
    const cls = classMatch?.[2] || classMatch?.[3] || "text-accent underline";
    const inner = />([\s\S]*?)<\/a>/i.exec(raw)?.[1] ?? href;
    const external = /^https?:\/\//i.test(href);
    const isInternal = !external && href.startsWith("/");
    const key = `${href}-${idx}`;
    if (isInternal) {
      parts.push(
        <Link key={key} to={href} className={cls}>
          {inner}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key}
          href={href}
          className={cls}
          rel={external ? "noopener noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          {inner}
        </a>
      );
    }
    lastIndex = idx + raw.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function renderStructured(content: string) {
  const nodes: React.ReactNode[] = [];
  const lines = content.split(/\r?\n/);
  let para: string[] = [];
  let list: string[] = [];
  let keyCounter = 0;

  const flushPara = () => {
    if (para.length) {
      const text = para.join(" ");
      nodes.push(
        <p key={`p-${keyCounter++}`} className="text-slate-800 leading-7">
          {parseInlineAnchors(text)}
        </p>
      );
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      nodes.push(
        <ul key={`ul-${keyCounter++}`} className="list-disc pl-6 text-slate-800">
          {list.map((it, idx) => (
            <li key={idx}>{parseInlineAnchors(it)}</li>
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
      nodes.push(
        <h2 key={`h2-${keyCounter++}`} className="text-2xl font-semibold text-slate-900 mt-6">
          {parseInlineAnchors(line.slice(3))}
        </h2>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushList();
      nodes.push(
        <h3 key={`h3-${keyCounter++}`} className="text-xl font-semibold text-slate-900 mt-4">
          {parseInlineAnchors(line.slice(4))}
        </h3>
      );
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
