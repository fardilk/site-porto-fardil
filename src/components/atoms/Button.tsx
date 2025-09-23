import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantCls: Record<Variant, string> = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300",
  ghost: "bg-transparent text-slate-800 hover:bg-slate-100 focus:ring-slate-300",
};

const sizeCls: Record<Size, string> = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3.5 py-2 text-sm",
  lg: "px-4.5 py-2.5 text-base",
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variantCls[variant]} ${sizeCls[size]} ${className}`} {...props} />
  );
}

export default Button;
