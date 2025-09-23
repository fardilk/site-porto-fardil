import React from "react";

type Variant = "normal" | "muted" | "lead";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  normal: "text-slate-800 leading-7",
  muted: "text-slate-600 leading-7",
  lead: "text-slate-900 text-lg leading-8",
};

export default function Paragraph({ variant = "normal", className = "", ...props }: ParagraphProps) {
  return <p className={`${variants[variant]} ${className}`} {...props} />;
}
