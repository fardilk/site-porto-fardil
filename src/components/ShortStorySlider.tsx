import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


// Replace lottieAnimations with image URLs for avatars/illustrations
const storyImages = [
    "https://randomuser.me/api/portraits/men/32.jpg", // Beginning
    "https://randomuser.me/api/portraits/men/33.jpg", // Freelance
    "https://randomuser.me/api/portraits/women/44.jpg", // Learning
    "https://randomuser.me/api/portraits/men/45.jpg", // Leadership
    "https://randomuser.me/api/portraits/women/46.jpg", // Today
    "https://randomuser.me/api/portraits/men/47.jpg", // Future
];

const slides = [
    {
        title: "The Beginning",
        desc: "Started with HTML/CSS, built websites for friends and local businesses. Learned everything the hard way — through trial and error.",
        image: storyImages[0],
        link: "#beginning",
    },
    {
        title: "First Freelance Gig",
        desc: "My first paid project taught me the basics of dealing with clients, deadlines, and real-world expectations.",
        image: storyImages[1],
        link: "#freelance",
    },
    {
        title: "Learning & Growth",
        desc: "Learned Git, React, and started collaborating in teams. My skills and confidence grew fast.",
        image: storyImages[2],
        link: "#growth",
    },
    {
        title: "Project Leadership",
        desc: "Took ownership of small projects from scoping to delivery. Discovered my passion for product thinking and leadership.",
        image: storyImages[3],
        link: "#leadership",
    },
    {
        title: "Today & Beyond",
        desc: "Now combining design, frontend, backend, and project strategy to deliver impactful digital products.",
        image: storyImages[4],
        link: "#today",
    },
    {
        title: "The Future",
        desc: "Excited for new challenges, continuous learning, and building products that make a difference.",
        image: storyImages[5],
        link: "#future",
    },
];

const AUTOPLAY_DELAY = 5000;

// Helper to truncate description
function truncateText(text: string, max: number) {
    return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

// SVG scribble path for progress bar
const ScribbleProgress: React.FC<{ progress: number; total: number; }> = ({ progress, total }) => {
    // Path is a playful curve, with a paper plane at the end
    // Progress is 0-based index
    const percent = progress / (total - 1);
    // Path definition (same as the SVG path below)
    const pathD = "M40 24 Q80 0 120 24 Q160 48 200 24 Q240 0 280 24 Q320 40 320 24";

    // Helper: get point on path at t (0..1) using SVG path approximation
    function getPointOnPath(d: string, t: number) {
        // Hardcoded for this path: 7 segments (start, 6 curves)
        // Each segment: [start, control, end]
        const segments = [
            { start: [40, 24], control: [80, 0], end: [120, 24] },
            { start: [120, 24], control: [160, 48], end: [200, 24] },
            { start: [200, 24], control: [240, 0], end: [280, 24] },
            { start: [280, 24], control: [320, 40], end: [320, 24] },
        ];
        // Map t (0..1) to segment
        const segCount = segments.length;
        const segT = t * segCount;
        const segIdx = Math.min(Math.floor(segT), segCount - 1);
        const localT = segT - segIdx;
        const seg = segments[segIdx];
        // Quadratic Bezier formula
        const x = (1 - localT) * (1 - localT) * seg.start[0] + 2 * (1 - localT) * localT * seg.control[0] + localT * localT * seg.end[0];
        const y = (1 - localT) * (1 - localT) * seg.start[1] + 2 * (1 - localT) * localT * seg.control[1] + localT * localT * seg.end[1];
        return { x, y };
    }

    // Get plane position on the path and raise it higher
    const planePosRaw = getPointOnPath(pathD, percent);
    const planePos = { x: planePosRaw.x, y: planePosRaw.y - 16 };

    return (
        <svg
            width="100%"
            height="48"
            viewBox="0 0 340 48"
            fill="none"
            aria-label="Story progress"
            role="progressbar"
        >
            <defs>
                <linearGradient id="gold-gradient" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8860B" />
                    <stop offset="1" stopColor="#FFD700" />
                </linearGradient>
            </defs>
            {/* Scribble path: playful curve with loops */}
            <path
                d={pathD}
                stroke="url(#gold-gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="340"
                strokeDashoffset={340 - percent * 340}
                style={{ transition: "stroke-dashoffset 0.7s cubic-bezier(.7,.2,.3,1)" }}
            />
            {/* Paper plane icon at end of progress, follows the path */}
            <g
                transform={`translate(${planePos.x},${planePos.y})`}
                style={{
                    transition: "transform 0.7s cubic-bezier(.7,.2,.3,1)",
                }}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    aria-label="Paper plane"
                    role="img"
                    style={{
                        filter: percent === 1 ? "drop-shadow(0 0 6px #FFD700)" : "none",
                        opacity: percent > 0.05 ? 1 : 0.5,
                        transition: "filter 0.3s, opacity 0.3s",
                    }}
                >
                    <path
                        d="M2 14L26 2L18 26L13 17L2 14Z"
                        fill={percent === 1 ? "#FFD700" : "#B0B0B0"}
                        stroke="#888"
                        strokeWidth="1.5"
                    />
                </svg>
            </g>
        </svg>
    );
};

const ShortStorySlider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Responsive: cards stack vertically on mobile
    // Accessibility: aria-labels, alt tags, keyboard navigation
    return (
        <section
            id="short-story"
            className="w-full py-16 bg-secondary flex flex-col items-center scroll-mt-24"
        >
            <div className="container-80 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    Short Story of Me
                </h2>
            </div>
            {/* SVG Scribble Progress Bar */}
            <div className="w-full mb-6">
                <ScribbleProgress progress={activeIndex} total={slides.length} />
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop
                centeredSlides
                autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
                spaceBetween={-95}
                slidesPerView={3}
                className="w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                aria-label="Short story slider"
            >
                {slides.map((item, idx) => {
                    const prevIdx = (activeIndex - 1 + slides.length) % slides.length;
                    const nextIdx = (activeIndex + 1) % slides.length;

                    let scale = "scale-80";
                    let opacity = "opacity-60";
                    let z = "z-0";
                    let translate = "";
                    let visibility = "hidden";

                    if (idx === activeIndex) {
                        scale = "scale-100";
                        opacity = "opacity-100";
                        z = "z-10";
                        translate = "";
                        visibility = "";
                    } else if (idx === nextIdx) {
                        scale = "scale-80";
                        opacity = "opacity-80";
                        z = "z-0";
                        translate = "md:translate-x-8";
                        visibility = "";
                    } else if (idx === prevIdx) {
                        scale = "scale-80";
                        opacity = "opacity-80";
                        z = "z-0";
                        translate = "md:-translate-x-8";
                        visibility = "";
                    }

                    // Only render visible slides, hide others
                    return (
                        <SwiperSlide key={idx}>
                            <div
                                className={`transition-all duration-500 flex flex-col items-start justify-start px-4 py-8 min-h-[220px] md:min-h-[260px] rounded-xl bg-white shadow-[0_6px_24px_0_rgba(34,85,60,0.18)] ${scale} ${opacity} ${z} ${translate} ${visibility}`}
                                tabIndex={0}
                                aria-label={item.title}
                                role="group"
                                style={visibility === "hidden" ? { display: "none" } : {}}
                            >
                                
                                <div className="w-full aspect-[16/6] mb-4 flex items-center justify-center overflow-hidden rounded-lg border-2 border-[#22553c] bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title + " illustration"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex w-full items-center justify-between mb-2">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#22553c] text-right">
                                        {item.title}
                                    </h3>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-[#fca311] text-white shadow transition ${idx === activeIndex ? "scale-105 ring-2 ring-[#22553c]" : "opacity-70"
                                            }`}
                                    >
                                        {item.title.split(" ")[0] === "The" ? "Now" : 2020 + idx}
                                    </span>
                                    
                                </div>
                                <div className="mb-4 w-full">
                                    <p className="text-base md:text-lg text-gray-700 text-left overflow-hidden" style={{ minHeight: '4.5em', maxHeight: '4.5em' }}>
                                        {truncateText(item.desc, 200)}
                                    </p>
                                </div>
                                <a
                                    href={item.link}
                                    className="text-[#22553c] font-medium underline underline-offset-2 hover:text-yellow-700 focus:text-yellow-800 transition text-left"
                                    tabIndex={0}
                                    aria-label={`Learn more about ${item.title}`}
                                >
                                    Learn more &rarr;
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default ShortStorySlider;
