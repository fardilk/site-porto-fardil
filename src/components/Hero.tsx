import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const Hero: React.FC = () => {
  const roles = useMemo(() => [
    "Extra Miles Product Developer",
    "SEO Specialist & Technical Writer",
    "Front End & Web Developer",
    "Project Manager",
  ], []);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let charIdx = 0;
    setTyped("");
    const typeInterval = setInterval(() => {
      charIdx++;
      setTyped(roles[roleIdx].slice(0, charIdx));
      if (charIdx >= roles[roleIdx].length) {
        clearInterval(typeInterval);
      }
    }, 32); // fast typing
    return () => clearInterval(typeInterval);
  }, [roleIdx, roles]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <section
      className="relative flex flex-col items-start justify-center min-h-[90vh] w-full text-primary overflow-hidden py-20 md:py-32 hero-bg"
    >
      <div className="container-80">

        <div className="relative z-20 flex flex-row items-start text-left w-full">
          {/* Left: Status Badge, Headline & Buttons */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            {/* Status Badge */}
            <div className="flex items-center gap-2 bg-[#23252b] rounded-full px-4 py-2 shadow-lg mb-6">
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <span className="text-xs font-medium text-gray-200 tracking-wide">Available for Projects</span>
            </div>
            {/* Tagline */}
            <div className="mb-2 text-sm md:text-base font-medium text-secondary">Driven by impact, powered by detail.</div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tight mb-2 text-primary leading-tight">
              Fardil Khalidi is <span className="text-accent font-semibold">{typed}</span>
            </h1>
            <h2 className="text-base md:text-lg font-normal text-secondary mb-6 leading-tight">
              With a vision for <span className="text-primary font-semibold">business growth</span> and hands-on product execution.
            </h2>
            {/* Action Buttons */}
            <div className="flex flex-row gap-4 mb-10">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-8 py-3 rounded-lg bg-accent text-primary font-bold shadow-lg hover:shadow-xl transition-all"
              >
                See My Work
              </motion.a>
              <motion.a
                href="#scroll"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-8 py-3 rounded-lg border border-gray-600 text-primary font-bold shadow  transition-all flex items-center gap-2"
              >
                Scroll Down
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6v10m0 0l-4-4m4 4l4-4" stroke="#fca311" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </div>
          </div>
          {/* Right: Image area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center bg-white relative"
                style={{
                  boxShadow: "12px 20px 28px -6px rgba(0,0,0,0.30)", // kanan bawah, lebih tajam, ga lebay
                }}
              >
                <img
                  src="/public/fardil.png"
                  alt="Fardil Khalidi"
                  className="w-full h-full object-cover rounded-2xl object-[center_40%]"
                  style={{ filter: "blur(0.5px)" }}
                />
              </div>


              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 40px 10px #fff' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact Logos Row (Font Awesome via CDN) */}
      {/*
        To use Font Awesome icons via CDN, add the following line to your index.html <head>:
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossorigin="anonymous" />
      */}
      <div className="absolute bottom-8 left-[10%] flex flex-row items-center gap-8 opacity-70 z-10">
        <a href="https://www.linkedin.com/in/fardil-khalidi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin h-7 w-7 text-gray-500 hover:text-accent transition" />
        </a>
        <a href="https://x.com/fardealk/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter h-7 w-7 text-gray-500 hover:text-accent transition" />
        </a>
        <a href="https://github.com/fardilk/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github h-7 w-7 text-gray-500 hover:text-accent transition" />
        </a>
        <a href="https://fardilk.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <i className="fab fa-medium h-7 w-7 text-gray-500 hover:text-accent transition" />
        </a>
        <a href="mailto:fardil.khalidi@gmail.com" aria-label="Email">
          <i className="fas fa-envelope h-7 w-7 text-gray-500 hover:text-accent transition" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
