import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const lottieAnimations = [
    "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json", // Beginning
    "https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json", // Freelance
    "https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json", // Learning
    "https://assets2.lottiefiles.com/packages/lf20_5ngs2ksb.json", // Leadership
    "https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json", // Today
    "https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json", // Future
];

const slides = [
    {
        title: "The Beginning",
        desc: "Started with HTML/CSS, built websites for friends and local businesses. Learned everything the hard way — through trial and error.",
        lottie: lottieAnimations[0],
        link: "#beginning",
    },
    {
        title: "First Freelance Gig",
        desc: "My first paid project taught me the basics of dealing with clients, deadlines, and real-world expectations.",
        lottie: lottieAnimations[1],
        link: "#freelance",
    },
    {
        title: "Learning & Growth",
        desc: "Learned Git, React, and started collaborating in teams. My skills and confidence grew fast.",
        lottie: lottieAnimations[2],
        link: "#growth",
    },
    {
        title: "Project Leadership",
        desc: "Took ownership of small projects from scoping to delivery. Discovered my passion for product thinking and leadership.",
        lottie: lottieAnimations[3],
        link: "#leadership",
    },
    {
        title: "Today & Beyond",
        desc: "Now combining design, frontend, backend, and project strategy to deliver impactful digital products.",
        lottie: lottieAnimations[4],
        link: "#today",
    },
    {
        title: "The Future",
        desc: "Excited for new challenges, continuous learning, and building products that make a difference.",
        lottie: lottieAnimations[5],
        link: "#future",
    },
];

const AUTOPLAY_DELAY = 5000;

const ShortStorySlider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Progress bar width calculation
    const progressWidth = `${((activeIndex + 1) / slides.length) * 100}%`;

    return (
        <section className="w-full py-16 bg-teal-600 flex flex-col items-center">
            <div className="container-80 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    Short Story of Me
                </h2>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-teal-800 rounded mb-6 overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-500"
                        style={{ width: progressWidth }}
                    />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="w-full"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {slides.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col items-center justify-center px-6 py-10 min-h-[220px] transition-all duration-500">
                                {/* Lottie Animation */}
                                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                                    <iframe
                                        src={`https://lottiefiles.com/iframe/${item.lottie.split("/").pop()?.replace(".json", "")}`}
                                        title={item.title}
                                        className="w-full h-full bg-transparent"
                                        style={{ border: "none" }}
                                        allowFullScreen
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white text-center">
                                    {item.title}
                                </h3>
                                <p className="text-base md:text-lg text-white/90 text-center mb-4">
                                    {item.desc}
                                </p>
                                <a
                                    href={item.link}
                                    className="text-white font-medium underline underline-offset-2 hover:text-teal-200 transition"
                                >
                                    Read more &rarr;
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ShortStorySlider;
