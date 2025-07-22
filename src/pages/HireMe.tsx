import React from "react";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

const HireMe: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12 py-16">
      <div className="container-80 text-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h1>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          I'm excited to collaborate on new projects. Whether you need design, development, or both, I'm here to help bring your ideas to life.
        </p>
        <a href="/contact" className="px-6 py-3 bg-accent text-primary rounded font-semibold">
          Contact Me
        </a>
      </div>
    </main>
  </>
);

export default HireMe;
