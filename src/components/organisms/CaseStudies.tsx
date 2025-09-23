import Title from "../atoms/typography/Title";

export default function CaseStudies() {
  const cases = [
    { title: "Hospital HIS", img: "/assets/his-pharmacy.png" },
    { title: "Case Study", img: "/assets/case-study.png" },
  ];
  return (
    <section>
      <Title level={2} className="mb-4">Case Studies</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((c) => (
          <div key={c.title} className="rounded-lg border p-4">
            <img src={c.img} alt={c.title} className="rounded-md mb-2" />
            <div className="font-medium text-slate-900">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
