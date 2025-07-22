import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    img: "https://source.unsplash.com/random/800x600?design",
    title: "UI/UX Design",
    desc: "Crafting intuitive and engaging interfaces tailored to your brand.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?frontend",
    title: "Frontend Development",
    desc: "Building responsive, performant websites with the latest tech.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?seo",
    title: "SEO Optimization",
    desc: "Improving visibility and driving traffic through proven strategies.",
  },
];

const SliderSection: React.FC = () => (
  <section className="w-full py-16 bg-neutral text-white">
    <div className="container-80">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Services
      </motion.h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default SliderSection;
