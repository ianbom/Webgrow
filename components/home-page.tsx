import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Faq, FinalCta } from "@/components/sections/faq-cta";
import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import {
  Technologies,
  Testimonial,
} from "@/components/sections/technology-testimonial";
import { Metrics, Process, WhyUs } from "@/components/sections/value-process";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Positioning />
        <Services />
        <Projects />
        <WhyUs />
        <Metrics />
        <Process />
        <Technologies />
        <Testimonial />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
