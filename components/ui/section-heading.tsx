export function SectionHeading({ eyebrow, title, description, className = "" }: { eyebrow: string; title: React.ReactNode; description?: string; className?: string }) {
  return <header className={className}><p className="m-0 text-[12px] font-bold uppercase tracking-[.12em] text-ink-soft">{eyebrow}</p><h2 className="mt-[18px] max-w-[800px] font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[.98] tracking-[-.045em]">{title}</h2>{description && <p className="mt-[26px] max-w-[500px] text-ink-soft">{description}</p>}</header>;
}
