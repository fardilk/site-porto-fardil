import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
