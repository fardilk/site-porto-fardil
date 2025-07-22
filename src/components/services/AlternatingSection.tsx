import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    img: "https://source.unsplash.com/random/800x600?project",
    title: "Collaborative Workflow",
    desc: "Transparent communication and agile methodology ensure projects run smoothly.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?code",
    title: "Quality Code",
    desc: "Maintainable and scalable code with best practices at its core.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?support",
    title: "Ongoing Support",
    desc: "I provide guidance even after launch to keep your product growing.",
  },
];

const AlternatingSection: React.FC = () => (
  <section className="w-full py-16 bg-surface" id="workflow">
    <div className="container-80 space-y-16">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={item.img} alt={item.title} className="w-full md:w-1/2 rounded-lg shadow-md object-cover" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AlternatingSection;
