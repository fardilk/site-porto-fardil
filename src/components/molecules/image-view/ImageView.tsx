export default function ImageView({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <figure className="my-4">
      <img src={src} alt={alt || ""} className="w-full rounded-lg" loading="lazy" />
      {caption && <figcaption className="text-center text-sm text-slate-500 mt-1">{caption}</figcaption>}
    </figure>
  );
}
