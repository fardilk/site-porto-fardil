import React from "react";

type CardProps = {
  img: string;
  tags: string[];
  title: string;
  url: string;
};

const CardPortfolio: React.FC<CardProps> = ({ img, tags, title, url }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="font-semibold text-lg mb-4">
        {title.length > 60 ? title.slice(0, 60) + "..." : title}
      </div>
      <div className="mt-auto">
        <a
          href={url}
          className="inline-flex items-center text-teal-700 font-medium group"
        >
          View
          <span
            className="ml-1 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-150"
          >
            →
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default CardPortfolio;
