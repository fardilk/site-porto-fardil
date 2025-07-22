import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Experience from "./pages/Experience";
import HireMe from "./pages/HireMe";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/hire-me" element={<HireMe />} />
    </Routes>
  </Router>
);

export default App;
