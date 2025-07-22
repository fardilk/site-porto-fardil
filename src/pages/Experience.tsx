import React from "react";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

const experiences = [
  { year: "2024", role: "Freelance Developer", desc: "Providing web solutions for various clients." },
  { year: "2022", role: "UI/UX Designer", desc: "Created user-centric designs for a SaaS startup." },
  { year: "2020", role: "Project Manager", desc: "Led a remote team delivering digital products." },
];

const Experience: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12 py-16">
      <div className="container-80">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>
        <div className="space-y-8 max-w-2xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.year} className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="font-semibold text-primary w-24">{exp.year}</div>
              <div>
                <div className="font-medium text-gray-800">{exp.role}</div>
                <p className="text-gray-600 text-sm">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Experience;
