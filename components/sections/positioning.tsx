import { ArrowUpRight } from "lucide-react";
import { technologyGroups } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechMarquee } from "@/components/shared/tech-marquee";

export function Positioning() {
  const technologies = technologyGroups.flatMap((group) => group.items);
  return <section className="bg-page py-[clamp(96px,10vw,160px)] max-[640px]:py-[72px]"><Container><div className="grid grid-cols-[1.2fr_.8fr] items-end gap-[9%] max-[900px]:grid-cols-1 max-[900px]:gap-8"><SectionHeading eyebrow="Partner digital untuk bisnis" title={<>Kami tidak hanya membuat website. Kami membangun <em className="not-italic text-[#789700]">pengalaman digital</em> yang membantu bisnis berkembang.</>} /><div className="max-w-[500px] text-ink-soft"><p>Mulai dari company profile hingga platform web yang kompleks, setiap produk kami dirancang dengan fokus pada performa, pengalaman pengguna, dan tujuan bisnis.</p><a className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-2 text-[14px] font-bold" href="#layanan">Kenali cara kami bekerja <ArrowUpRight size={17} /></a></div></div><TechMarquee items={technologies} /></Container></section>;
}
