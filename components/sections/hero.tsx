import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { OrbitalCurve } from "@/components/shared/orbital-curve";
import { WebsiteMockup } from "@/components/shared/website-mockup";

export function Hero() { return <section className="hero-section hero-reference"><OrbitalCurve className="hero-orbit" /><Container className="hero-grid"><div className="hero-copy"><p className="eyebrow">Software house untuk bisnis modern</p><h1>Kami merancang<br />dan membangun<br />website untuk<br />bisnis <em>bertumbuh.</em></h1><p className="hero-lede">Dari company profile dan landing page hingga aplikasi web dan e-commerce, kami membangun pengalaman digital yang cepat, scalable, dan berorientasi konversi.</p><div className="hero-actions"><Button href={siteConfig.whatsapp} arrow>Mulai Project</Button><Button href="#portofolio" variant="secondary">Lihat Portofolio</Button></div><div className="hero-trust"></div><div className="hero-scroll"><ArrowDown size={17} />Scroll untuk melihat</div></div><div className="hero-visual"><WebsiteMockup /><div className="hero-caption hero-side-label"><i />Ide<br />Website<br />Bisnis<br />Bertumbuh</div></div></Container></section>; }
