import { ArrowUpRight } from "lucide-react";

export function Button({ href, children, variant = "primary", arrow = false, className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "lime"; arrow?: boolean; className?: string }) {
  return <a className={`button button-${variant} ${className}`} href={href}>{children}{arrow && <ArrowUpRight aria-hidden="true" size={18} />}</a>;
}
