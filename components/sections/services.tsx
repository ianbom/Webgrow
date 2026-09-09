import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return <section id="layanan" className="bg-page py-[clamp(96px,10vw,160px)] max-[640px]:py-[72px]"><Container><SectionHeading eyebrow="Layanan" title={<>Dari ide hingga website <em className="not-italic text-[#789700]">siap digunakan.</em></>} /><div className="mt-[74px] border-t border-line max-[640px]:mt-[50px]">{services.map((service) => <a className="group grid grid-cols-[60px_1fr_1.4fr_28px] items-start gap-[14px] border-b border-line py-7 transition-[padding,background] duration-200 hover:bg-lime-soft/30 max-[900px]:grid-cols-[60px_1fr_1.4fr_28px] max-[640px]:grid-cols-[42px_1fr_24px] max-[640px]:gap-2.5 max-[640px]:py-[22px]" href="#kontak" key={service.number}><span className="font-display text-[17px] text-muted max-[640px]:text-[14px]">{service.number}</span><h3 className="m-0 font-display text-[32px] font-semibold leading-none tracking-[-.03em] max-[640px]:text-[25px]">{service.title}</h3><p className="m-0 text-[16px] leading-[1.45] text-ink-soft max-[640px]:col-[2/4] max-[640px]:mt-1 max-[640px]:text-[15px]">{service.description}</p><ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 max-[640px]:col-[3] max-[640px]:row-[1]" aria-hidden="true" size={24} /></a>)}</div></Container></section>;
}
