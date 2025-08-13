import { useState } from "react";

type Props = { initial?: number };

export default function LikeButton({ initial = 0 }: Props) {
  const [likes, setLikes] = useState(initial);
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => {
        if (!liked) {
          setLikes((n) => n + 1);
          setLiked(true);
        } else {
          setLikes((n) => Math.max(0, n - 1));
          setLiked(false);
        }
      }}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border ${liked ? "bg-accent text-primary" : "bg-transparent text-primary"}`}
      aria-pressed={liked}
    >
      <span className="i-ph-heart-fill" aria-hidden />
      <span>{likes}</span>
    </button>
  );
}
