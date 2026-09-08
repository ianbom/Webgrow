import { ArrowUpRight } from "lucide-react";
import { technologyGroups } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Positioning() {
  const technologies = technologyGroups.flatMap((group) => group.items);

  return <section className="positioning"><Container><div className="positioning-grid"><SectionHeading eyebrow="Partner digital untuk bisnis" title={<>Kami tidak hanya membuat website. Kami membangun <em>pengalaman digital</em> yang membantu bisnis berkembang.</>} /><div className="positioning-aside"><p>Mulai dari company profile hingga platform web yang kompleks, setiap produk kami dirancang dengan fokus pada performa, pengalaman pengguna, dan tujuan bisnis.</p><a href="#layanan">Kenali cara kami bekerja <ArrowUpRight size={17} /></a></div></div><div className="tech-marquee" aria-label="Teknologi yang digunakan"><div className="tech-marquee-track">{[...technologies, ...technologies].map((item, index) => <span key={`${item}-${index}`} aria-hidden={index >= technologies.length}>{item}<i>•</i></span>)}</div></div></Container></section>;
}
