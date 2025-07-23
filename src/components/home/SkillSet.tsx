import React, { useState } from "react"

type Skill = { label: string; value: number }

type Tab = { title: string; desc: string; skills: Skill[] }

const tabs: Tab[] = [
  {
    title: "Product Manager",
    desc: "Translating ideas into valuable features and roadmaps.",
    skills: [
      { label: "Research", value: 80 },
      { label: "Strategy", value: 85 },
      { label: "Roadmap", value: 75 },
      { label: "Analytics", value: 70 },
      { label: "Leadership", value: 80 },
    ],
  },
  {
    title: "Project Manager",
    desc: "Leading teams to deliver projects on time and budget.",
    skills: [
      { label: "Planning", value: 85 },
      { label: "Scrum", value: 80 },
      { label: "Budgeting", value: 70 },
      { label: "Reporting", value: 80 },
      { label: "Risk", value: 75 },
    ],
  },
  {
    title: "Fullstack Developer",
    desc: "Building efficient frontend and backend solutions.",
    skills: [
      { label: "React", value: 90 },
      { label: "Node", value: 80 },
      { label: "Database", value: 75 },
      { label: "API", value: 85 },
      { label: "Testing", value: 70 },
    ],
  },
  {
    title: "Content & Technical Writer",
    desc: "Crafting guides and docs that are clear and helpful.",
    skills: [
      { label: "Documentation", value: 90 },
      { label: "Blogging", value: 85 },
      { label: "Editing", value: 80 },
      { label: "Tutorials", value: 85 },
      { label: "SEO", value: 70 },
    ],
  },
  {
    title: "Product Marketing",
    desc: "Connecting product benefits to target audiences.",
    skills: [
      { label: "Messaging", value: 80 },
      { label: "Campaigns", value: 75 },
      { label: "Market Fit", value: 70 },
      { label: "Brand", value: 85 },
      { label: "Analytics", value: 75 },
    ],
  },
]

export default function SkillSet() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl font-bold text-primary">Skill Set & Roles</h2>
          <p className="text-gray-700">
            Diverse experience helping teams ship and market great products.
          </p>
        </div>
        <div className="md:w-2/3 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${active === i ? "bg-accent text-primary" : "bg-gray-200 text-gray-700"}`}
              >
                {t.title}
              </button>
            ))}
          </div>
          <p className="text-gray-700">{tab.desc}</p>
          <div className="space-y-4">
            {tab.skills.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="bg-gray-200 h-2 rounded">
                  <div className="bg-primary h-2 rounded" style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
