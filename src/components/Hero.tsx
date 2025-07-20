import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

const badges = [
  "Fullstack Developer",
  "Project Manager",
  "AI Automation",
  "React",
  "Golang",
  "Laravel",
  "SaaS Builder",
  "SEO Strategist",
  "DevOps Enthusiast",
  "Digital Monetizer",
];

// CDN Avatar Example: https://randomuser.me/api/portraits/men/75.jpg

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yGlow = useTransform(scrollY, [0, 250], [0, 40]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] w-full bg-white text-primary overflow-hidden py-24 md:py-32">
      {/* Parallax Glow */}
      <motion.div
        style={{ y: yGlow }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[260px] h-[140px] md:w-[360px] md:h-[180px] rounded-full bg-accent blur-2xl z-0"
      />

      {/* FOTO/AVATAR */}
      <motion.img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Fardil Khalidi"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent shadow-xl object-cover"
        style={{
          marginTop: "0px", // menyesuaikan top margin jika dibutuhkan
        }}
      />

      {/* Headline & Tagline */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 text-primary drop-shadow-sm">
          Fardil Khalidi
        </h1>
        <p className="text-lg md:text-2xl text-neutral font-medium mb-6">
          Engineering digital solutions with code & clarity.
        </p>

        {/* Swipeable Animated Badges */}
        <div className="w-full max-w-2xl mb-6">
          <Marquee
            gradient={false}
            pauseOnHover
            speed={40}
            className="flex gap-4"
          >
            {badges.map((skill, idx) => (
              <span
                key={idx}
                className="mx-2 px-4 py-1 rounded-full bg-primary text-white text-sm md:text-base font-medium shadow shadow-accent/20"
                style={{ whiteSpace: "nowrap" }}
              >
                {skill}
              </span>
            ))}
          </Marquee>
        </div>

        {/* CTA Button */}
        <motion.a
          href="#portfolio"
          whileHover={{
            scale: 1.06,
            boxShadow: "0 8px 24px 0 #fca31166",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block px-8 py-3 rounded-full bg-accent text-primary font-bold shadow-lg hover:shadow-xl transition-all"
        >
          See My Work
        </motion.a>
      </div>
    </section>
  );
}
