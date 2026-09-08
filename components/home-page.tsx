import { logos } from "@/lib/content";
import { Cta, SiteHeader } from "./site-header";
import { Services, Projects, InsightCards } from "./service-sections";
import { Scaling, Comparison } from "./company-sections";
import { Pricing, Founder, Testimonials, Faq, Footer } from "./conversion-sections";
export function HomePage(){return <main id="top"><div className="hero-shell"><SiteHeader/><section className="hero"><div className="hero-copy"><p className="announcement"><b>Aceternity UI</b> New components every week</p><h1>The best design and development agency in the world.</h1></div><div className="hero-side"><p>We design and build websites that drive results and help your business grow. No Calls. No BS. Just Results.</p><Cta/></div><span className="hero-word">Aceternity</span></section></div><section className="trusted"><p>TRUSTED BY FAST-GROWING STARTUPS</p><div className="logo-track">{[...logos,...logos].map((logo,index)=><b key={`${logo}-${index}`}>{logo}</b>)}</div></section><Services/><Projects/><InsightCards/><Scaling/><Comparison/><Pricing/><Founder/><Testimonials/><Faq/><Footer/></main>}
