import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const faqs = [
  { question: "How long does a typical project take?", answer: "Timelines vary depending on scope, but most websites are delivered within 4-6 weeks." },
  { question: "Do you offer ongoing maintenance?", answer: "Yes, I provide flexible maintenance and support packages." },
  { question: "Can you help with content strategy?", answer: "Absolutely. I work with you to ensure your content aligns with your goals." },
];

const FAQSection: React.FC = () => (
  <section className="w-full py-16 bg-surface">
    <div className="container-80">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <Accordion.Root type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`} className="bg-white rounded-lg shadow-sm">
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
                {faq.question}
                <ChevronDownIcon className="w-5 h-5" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-4 text-sm text-gray-600">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

export default FAQSection;
