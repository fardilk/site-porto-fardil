import React from "react";
import Navbar from "../components/navbar/Navbar";
import SliderSection from "../components/services/SliderSection";
import CardSection from "../components/services/CardSection";
import AlternatingSection from "../components/services/AlternatingSection";
import PricingSection from "../components/services/PricingSection";
import FAQSection from "../components/services/FAQSection";
import CTASection from "../components/services/CTASection";

const Services: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12">
      <SliderSection />
      <CardSection />
      <AlternatingSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  </>
);

export default Services;
