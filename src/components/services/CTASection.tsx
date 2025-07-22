import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CTASection: React.FC = () => (
  <section className="w-full py-16 bg-primary text-white text-center">
    <div className="container-80">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ready to start your project?
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="pricing"
          smooth
          offset={-50}
          className="px-6 py-3 bg-accent text-primary rounded font-semibold cursor-pointer"
        >
          View Pricing
        </Link>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-primary rounded font-semibold"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
