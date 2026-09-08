export function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) { return <section id={id} className={`section ${className}`}>{children}</section>; }
export function Heading({ children }: { children: React.ReactNode }) { return <h2 className="section-title">{children}</h2>; }
