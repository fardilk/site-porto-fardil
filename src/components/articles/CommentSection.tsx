import { useEffect, useState } from "react";

type Comment = {
  id: string;
  name: string;
  text: string;
  createdAt: number;
};

type Props = {
  storageKey?: string;
};

export default function CommentSection({ storageKey = "comments" }: Props) {
  const [items, setItems] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // load existing from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      // ignore storage errors in local-only demo
      console.warn("comment load error", e);
    }
  }, [storageKey]);

  // save when items change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (e) {
      console.warn("comment save error", e);
    }
  }, [items, storageKey]);

  function add() {
    if (!name.trim() || !text.trim()) return;
    const next: Comment = { id: crypto.randomUUID(), name: name.trim(), text: text.trim(), createdAt: Date.now() };
    setItems((arr) => [next, ...arr]);
    setName("");
    setText("");
  }

  return (
    <div className="space-y-4">
  <h3 className="text-lg font-semibold text-slate-900">Comments</h3>
      <div className="flex flex-col gap-2">
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 rounded-md bg-white text-slate-900 outline-none shadow-[0_0_0_1px_rgba(15,23,42,0.15)] focus:shadow-[0_0_0_2px_rgba(37,99,235,0.45)]"
        />
        <textarea
          placeholder="Write a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-2 rounded-md bg-white text-slate-900 outline-none shadow-[0_0_0_1px_rgba(15,23,42,0.15)] focus:shadow-[0_0_0_2px_rgba(37,99,235,0.45)] min-h-[100px]"
        />
        <button onClick={add} className="self-start px-4 py-2 rounded-md bg-accent text-primary">Post</button>
      </div>
      <ul className="space-y-3">
        {items.map((c) => (
          <li key={c.id} className="rounded-md p-3 bg-white shadow-sm">
            <div className="text-sm text-slate-500">{new Date(c.createdAt).toLocaleString()} • <span className="font-medium text-slate-900">{c.name}</span></div>
            <p className="text-slate-800 mt-1 whitespace-pre-line">{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
