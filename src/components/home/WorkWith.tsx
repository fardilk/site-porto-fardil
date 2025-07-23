import React from "react"
import { FaBriefcase, FaTasks, FaHandsHelping } from "react-icons/fa"

const options = [
  {
    icon: <FaBriefcase size={32} />,
    title: "Hire Full-Time",
    text: "Looking for a committed team player to grow your product.",
    button: { text: "Download CV", href: "#/cv" },
  },
  {
    icon: <FaTasks size={32} />,
    title: "Hire Project Based",
    text: "Need expertise for a specific project or short term goal.",
    button: { text: "Download CV", href: "#/cv" },
  },
  {
    icon: <FaHandsHelping size={32} />,
    title: "Collaborate",
    text: "Let's team up and build something impactful together.",
    button: { text: "Contact Me", href: "/contact" },
  },
]

export default function WorkWith() {
  return (
    <section className="px-6 md:px-16 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">Work With Me</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          I'm open to new opportunities whether you need a dedicated team member
          or a reliable partner for your next project.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {options.map((o) => (
          <div
            key={o.title}
            className="border rounded-lg p-6 flex flex-col items-center text-center gap-4"
          >
            {o.icon}
            <h3 className="font-semibold text-lg">{o.title}</h3>
            <p className="text-sm text-gray-600">{o.text}</p>
            <a
              className="px-4 py-2 bg-accent text-primary rounded"
              href={o.button.href}
            >
              {o.button.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
