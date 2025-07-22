import React from "react";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

const About: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12 py-16">
      <div className="container-80 max-w-3xl">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <p className="text-gray-700 mb-4">
          I'm Fardil Khalidi, a product developer and designer focused on crafting impactful digital experiences. With a background in project management and front-end engineering, I bridge the gap between design and development to deliver high-quality results.
        </p>
        <p className="text-gray-700 mb-4">
          My passion lies in understanding business goals and translating them into scalable solutions. Whether it's building a landing page or developing a complex application, I approach each project with curiosity and care.
        </p>
      </div>
    </main>
  </>
);

export default About;
