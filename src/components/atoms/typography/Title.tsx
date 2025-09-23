import React from "react";

type Level = 1 | 2 | 3 | 4;

const classes: Record<Level, string> = {
  1: "text-3xl font-semibold text-slate-900",
  2: "text-2xl font-semibold text-slate-900",
  3: "text-xl font-semibold text-slate-900",
  4: "text-lg font-semibold text-slate-900",
};

const tagMap: Record<Level, keyof HTMLElementTagNameMap> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

export default function Title({ level = 2, className = "", children }: { level?: Level; className?: string; children: React.ReactNode }) {
  const tag = tagMap[level];
  return React.createElement(tag, { className: `${classes[level]} ${className}` }, children);
}
