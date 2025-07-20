import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const paragraphs: string[] = [
    `I started my journey as a self-taught developer, building small websites for local businesses and friends. The process was challenging but rewarding, and every mistake became a lesson that shaped my growth.`,
    `As I dove deeper, I became fascinated by UI/UX design and the endless creative possibilities of front-end technology. Collaboration with talented people has always pushed me to become a better version of myself.`,
    `Now, I focus on crafting clean, efficient, and beautiful web experiences—always learning, always sharing, and always excited about what comes next in this ever-evolving digital world.`
];

const ShortStorySlider: React.FC = () => (
    <section
        id="short-story"
        className="w-full py-16 bg-teal-500 flex flex-col items-center relative"
    >
        <div className="container-80 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Short Story of Me
            </h2>
            <div className="relative mx-auto max-w-3xl">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className}">${index + 1}</span>`,
                    }}
                    slidesPerView={1}
                >
                    {paragraphs.map((text, i) => (
                        <SwiperSlide key={i}>
                            <div className="mx-auto max-w-xl text-white text-lg md:text-xl bg-transparent px-4 py-6 min-h-[120px] flex items-center justify-center text-center transition-all duration-500">
                                {text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    </section>
);

export default ShortStorySlider;
