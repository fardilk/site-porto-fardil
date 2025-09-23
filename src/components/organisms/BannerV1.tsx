import Title from "../atoms/typography/Title";
import Button from "../atoms/Button";

export default function BannerV1() {
  return (
    <section className="rounded-xl bg-emerald-50 p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <Title level={2} className="mb-2">Build the Right Products Faster</Title>
        <p className="text-slate-700 mb-4">Validate your product and collect powerful insights from ready-to-buy users.</p>
        <Button>Request a demo</Button>
      </div>
      <img src="/assets/case-study.png" alt="Illustration" className="w-48" />
    </section>
  );
}
