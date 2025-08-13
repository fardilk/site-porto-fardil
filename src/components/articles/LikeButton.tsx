import { useEffect, useState } from "react";

type Props = { initial?: number };

function HeartIcon({ filled }: { filled: boolean }) {
  // Inline heart icon to avoid external icon dependencies
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={filled ? "text-red-600" : "text-slate-400"}
      aria-hidden="true"
    >
      <path
        d="M12 21s-6.716-5.205-9.157-8.003C1.02 10.97 1 8.59 2.343 7.05A5 5 0 0 1 9 7.197 5 5 0 0 1 21.657 7.05c1.343 1.54 1.323 3.92-.5 5.947C18.716 15.795 12 21 12 21z"
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={filled ? 0 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LikeButton({ initial = 0 }: Props) {
  const [likes, setLikes] = useState(initial);
  const [liked, setLiked] = useState(false);

  // Optional: persist like state per page in localStorage
  useEffect(() => {
    try {
      const key = typeof window !== "undefined" ? `liked:${location.pathname}` : undefined;
      if (!key) return;
      const saved = localStorage.getItem(key);
      if (saved === "1") setLiked(true);
  } catch {
      // ignore storage errors
    }
  }, []);
  return (
  <button
      onClick={() => {
        if (!liked) {
          setLikes((n) => n + 1);
          setLiked(true);
          try { const key = `liked:${location.pathname}`; localStorage.setItem(key, "1"); } catch { /* ignore */ }
        } else {
          setLikes((n) => Math.max(0, n - 1));
          setLiked(false);
          try { const key = `liked:${location.pathname}`; localStorage.removeItem(key); } catch { /* ignore */ }
        }
      }}
    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 transition-colors`}
      aria-pressed={liked}
    aria-label={liked ? "Unlike" : "Like"}
    >
    <HeartIcon filled={liked} />
    <span className={liked ? "text-red-600" : undefined}>{likes}</span>
    </button>
  );
}
