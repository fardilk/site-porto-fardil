import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <Navbar />
      </div>
    </header>
  );
}
