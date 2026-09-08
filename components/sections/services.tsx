import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() { return <section id="layanan" className="services"><Container><SectionHeading eyebrow="Layanan" title={<>Dari ide hingga website <em>siap digunakan.</em></>} /><div className="service-list">{services.map((service) => <a className="service-row" href="#kontak" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight className="service-arrow" aria-hidden="true" size={24} /></a>)}</div></Container></section>; }
