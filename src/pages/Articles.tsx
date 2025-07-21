import React from "react";
import Navbar from '../components/navbar/Navbar';

const About: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-12">
      <h1 className="text-3xl font-bold">Articles Page</h1>
      <p className="mt-2 text-gray-700">This is the portfolio page. Content coming soon!</p>
    </main>
  </>
);

export default About;
