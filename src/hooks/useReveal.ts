import { useEffect, useRef } from "react";

export default function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-2");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-2");
          el.classList.add("transition", "duration-700");
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
