import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$299",
    features: ["Consultation", "Single Page", "Email Support"],
  },
  {
    name: "Pro",
    price: "$799",
    features: ["Up to 5 Pages", "SEO Setup", "Priority Support"],
  },
  {
    name: "Custom",
    price: "Let's Talk",
    features: ["Tailored Solution", "Dedicated Support", "Long-term Partnership"],
  },
];

const PricingSection: React.FC = () => (
  <section id="pricing" className="w-full py-16 bg-white">
    <div className="container-80 text-center">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pricing Plans
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            className="border rounded-lg p-6 flex flex-col items-center shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-accent mb-4">{plan.price}</div>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              {plan.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="/hire-me" className="px-4 py-2 bg-accent text-primary rounded font-semibold">
              Choose Plan
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
