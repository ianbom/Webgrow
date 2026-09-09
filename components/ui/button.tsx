import { ArrowUpRight } from "lucide-react";

export function Button({ href, children, variant = "primary", arrow = false, className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "lime"; arrow?: boolean; className?: string }) {
  const variants = {
    primary: "border-ink bg-ink text-white",
    secondary: "border-ink bg-transparent text-ink",
    lime: "border-lime bg-lime text-ink",
  };

  return <a className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border px-[26px] text-[15px] font-bold transition-[transform,background,color] duration-200 ease-premium hover:-translate-y-0.5 hover:border-lime-strong hover:bg-lime-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-lime-strong ${variants[variant]} ${className}`} href={href}>{children}{arrow && <ArrowUpRight aria-hidden="true" size={18} />}</a>;
}
