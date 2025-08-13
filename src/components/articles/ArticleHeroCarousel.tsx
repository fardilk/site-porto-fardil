import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import type { Article } from "../../pages/articlesData";
import { getFallbackImage } from "./imageFallback";

type Props = {
  items: Article[];
};

export default function ArticleHeroCarousel({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
  <div className="w-full mb-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        centeredSlides
        slidesPerView={1}
        className="w-full"
      >
        {items.map((a) => (
          <SwiperSlide key={a.slug}>
            <a
              href={`/articles/${a.slug}`}
              className="block rounded-2xl overflow-hidden bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full aspect-[16/7] bg-slate-800">
                <img
                  src={a.coverImage || getFallbackImage(a)}
                  alt={a.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="text-xs uppercase tracking-wide text-blue-300 mb-2">Featured</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 line-clamp-2">{a.title}</h3>
                <p className="text-slate-300 text-sm md:text-base line-clamp-3">{a.excerpt}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
