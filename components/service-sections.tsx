import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Cta } from "./site-header";
import { Heading, Section } from "./section-primitives";

function ServiceVisual({ type }: { type: "browser" | "progress" | "map" | "search" | "chip" }) {
  if (type === "browser") return <div className="browser-visual"><div className="browser-bar"><b /><b /><b /><span /></div><div className="browser-page"><span className="small-line" /><span className="mid-line" /><div className="browser-block" /></div></div>;
  if (type === "progress") return <div className="progress-visual"><div className="donut" /><div className="notice"><small>notification</small><strong>Revision Completed</strong><span>✦</span></div></div>;
  if (type === "map") return <div className="map-visual"><div className="world">••••••••••••••••••••••••••••••••••••••••••</div>{["a", "b", "c", "d"].map((item) => <i key={item} className={`pin ${item}`} />)}</div>;
  if (type === "search") return <div className="search-visual"><div className="searchbar">G　 Best GTM tools for business operations</div><div className="result"><b>⚡ Acme.io</b><small>www.acme.io › outbound › sales</small><p>All in one outbound platform</p></div></div>;
  return <div className="chip-visual"><div className="chip" /><i /><i /><i /><i /></div>;
}

export function Services() {
  return <Section id="services"><Heading>Replace your Engineering Team</Heading><div className="services-grid">
    <article className="service-card service-primary"><ServiceVisual type="browser" /><div><h3>Design and Development</h3><p>Designed to perfection, Aceternity helps you take your dream idea to reality through our expert design and development services.</p><Cta href="#pricing">View pricing</Cta></div></article>
    <article className="service-card"><h3>Regular updates and<br />progress tracking</h3><ServiceVisual type="progress" /></article>
    <article className="service-card service-map"><h3>Hosting, Deployment &amp; Maintenance</h3><ServiceVisual type="map" /></article>
    <article className="service-card service-search"><h3>Get found on Google</h3><ServiceVisual type="search" /></article>
    <article className="service-card"><h3>Components, Dashboards and<br />Everything else</h3><ServiceVisual type="chip" /></article>
  </div></Section>;
}

export function Projects() { return <Section id="work" className="projects"><h2>Projects</h2><div className="projects-grid">{projects.map(([title, text, variant], index) => <a href="#contact" className={`project ${variant}`} key={title}><div className="project-art"><span className="project-no">0{index + 1}</span><div className="art-card" /></div><div className="project-copy"><small>Project {index + 1}</small><h3>{title}</h3><p>{text}</p><span>View Project <ArrowRight size={16} /></span></div></a>)}</div></Section>; }

export function InsightCards() { return <Section id="insights" className="insights"><Heading>See Insights straight from our users</Heading><div className="insight-layout"><article className="insight-quote"><div className="quote-logo">Cal.com</div><p>“Working with Manu and his team was a masterclass in design engineering. They didn’t just create a website, they built a high-performance, thoughtfully engineered product.”</p><b>Jack Hudson <em>VP of Engineering, Cal.com</em></b></article><article className="insight-stat"><span>★★★★★</span><strong>4.9/5</strong><p>Built for teams who need their site to be their best salesperson.</p><Cta>Chat with us</Cta></article></div></Section>; }
