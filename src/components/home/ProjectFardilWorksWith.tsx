import { FaToolbox } from "react-icons/fa"

const projects = Array.from({ length: 8 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  href: "#",
}))

export default function ProjectFardilWorksWith() {
  return (
    <section className="px-6 md:px-16 py-16">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Active Projects
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="border rounded-lg p-6 flex flex-col items-center hover:bg-gray-50 transition"
          >
            <FaToolbox size={28} className="mb-2" />
            <span>{p.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
