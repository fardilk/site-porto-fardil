import React from "react";
import Navbar from "../components/navbar/Navbar";
import CardPortfolio from "../components/CardPortfolio";

const items = [
  {
    img: "https://source.unsplash.com/random/500x400?project1",
    tags: ["Next.js", "Design"],
    title: "Corporate Landing Page",
    url: "#",
  },
  {
    img: "https://source.unsplash.com/random/500x400?project2",
    tags: ["React", "Dashboard"],
    title: "Analytics Dashboard",
    url: "#",
  },
  {
    img: "https://source.unsplash.com/random/500x400?project3",
    tags: ["E-commerce", "UX"],
    title: "Modern Shop Experience",
    url: "#",
  },
  {
    img: "https://source.unsplash.com/random/500x400?project4",
    tags: ["Branding", "Website"],
    title: "Creative Portfolio Website",
    url: "#",
  },
];

const Portfolio: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12 py-16">
      <div className="container-80">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Recent Projects</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <CardPortfolio key={i} {...item} />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Portfolio;
