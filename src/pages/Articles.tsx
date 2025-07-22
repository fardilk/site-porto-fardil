import React from "react";
import Navbar from "../components/navbar/Navbar";

const posts = [
  {
    title: "Designing For Conversion",
    date: "May 2024",
    excerpt: "Practical tips to ensure your website turns visitors into customers.",
  },
  {
    title: "Understanding Core Web Vitals",
    date: "April 2024",
    excerpt: "A breakdown of Google's performance metrics and how to hit them.",
  },
  {
    title: "Content Strategy Basics",
    date: "March 2024",
    excerpt: "Why quality content matters more than ever in today's digital landscape.",
  },
];

const Articles: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12 py-16">
      <div className="container-80">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Latest Articles</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.title} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-primary mb-1">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Articles;
