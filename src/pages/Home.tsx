import React from "react";
import { Navbar } from "../components/navbar";
import Hero  from "../components/Hero";
import Portfolio from "../components/PortfolioSec";
import ShortStorySlider from "../components/ShortStorySlider";

const Home: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <ShortStorySlider />
    <Portfolio />
    {/* Content lainnya */}
    <main className="mt-12">
      {/* Section hero, dsb */}
    </main>
  </>
);

export default Home;
