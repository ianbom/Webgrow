export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] ${className}`}>{children}</div>;
}
