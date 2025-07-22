import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Search } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Design Consultation",
    desc: "Work closely to transform ideas into polished mockups and prototypes.",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Responsive websites and applications optimized for performance.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    desc: "Get discovered faster and understand your audience with data-driven insights.",
  },
];

const CardSection: React.FC = () => (
  <section className="w-full py-16 bg-white">
    <div className="container-80">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What I Do
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="p-6 rounded-lg shadow-md border text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CardSection;
