import React from "react";
import CardPortfolio from "./CardPortfolio";

const portfolios = [
  {
    img: "https://source.unsplash.com/random/400x300?web,1",
    tags: ["React", "UI", "Design"],
    title: "A Journey in Web UI/UX Design and Frontend Crafting That Changed My Career Path Forever",
    url: "#"
  },
  {
    img: "https://source.unsplash.com/random/400x300?web,2",
    tags: ["Tailwind", "CSS", "Responsive"],
    title: "Building Responsive Interfaces With Tailwind CSS for Modern Startups",
    url: "#"
  },
  {
    img: "https://source.unsplash.com/random/400x300?web,3",
    tags: ["Portfolio", "Showcase"],
    title: "Showcasing Projects With Passion and Clarity: My Personal Portfolio Journey",
    url: "#"
  }
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className="w-full py-16 flex flex-col items-center">
    <div className="container-80">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900">Portfolio</h2>
        <a
          href="/portfolio"
          className="group relative inline-flex items-center font-semibold text-teal-600 px-6 py-2 transition-all duration-200"
        >
          <span className="pr-6 group-hover:pr-10 transition-all duration-200">
            See My All Portfolios
          </span>
          <span
            className="absolute right-2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-200"
          >
            →
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolios.map((item, i) => (
          <CardPortfolio key={i} {...item} />
        ))}
      </div>
      <div className="bg-darkblue text-accent p-10 rounded">
        Hello Tailwind Custom Colors!
      </div>
    </div>
  </section>
);

export default Portfolio;
