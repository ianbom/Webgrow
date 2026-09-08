import { ArrowUpRight } from "lucide-react";
import { faqs } from "@/data/content";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrbitalCurve } from "@/components/shared/orbital-curve";

export function Faq() { return <section id="faq" className="faq-section"><Container><div className="faq-grid"><SectionHeading eyebrow="FAQ" title={<>Pertanyaan yang<br /><em>sering ditanyakan.</em></>} /><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></Container></section>; }

export function FinalCta() { return <section id="kontak" className="final-cta"><OrbitalCurve className="cta-orbit" /><Container><div><p className="eyebrow">Mulai project Anda</p><h2>Punya ide?<br />Mari kita <em>bangun.</em></h2></div><div className="final-cta-copy"><p>Ceritakan kebutuhan Anda. Kami akan membantu menentukan solusi terbaik untuk mengubahnya menjadi produk digital yang siap digunakan.</p><Button href={siteConfig.whatsapp} arrow>Diskusikan Project</Button><a href={siteConfig.whatsapp}>Hubungi via WhatsApp <ArrowUpRight size={17} /></a></div></Container></section>; }
