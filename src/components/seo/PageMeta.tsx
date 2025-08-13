import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  image?: string; // absolute or relative
  url?: string; // absolute
  type?: string; // e.g., 'article' or 'website'
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function PageMeta({ title, description, image, url, type = "article" }: Props) {
  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const resolvedImage = image
      ? image.startsWith("http")
        ? image
        : origin
          ? new URL(image, origin).toString()
          : image
      : undefined;
    const resolvedUrl = url ?? (typeof window !== "undefined" ? window.location.href : undefined);

    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }
    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
    if (resolvedImage) {
      upsertMeta("property", "og:image", resolvedImage);
      upsertMeta("name", "twitter:image", resolvedImage);
      upsertMeta("name", "twitter:card", "summary_large_image");
    }
    if (resolvedUrl) {
      upsertMeta("property", "og:url", resolvedUrl);
    }
    upsertMeta("property", "og:type", type);
    return () => {};
  }, [title, description, image, url, type]);

  return null;
}
