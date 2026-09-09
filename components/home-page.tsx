import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
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
        <ScrollReveal immediate variant="hero">
          <Hero />
        </ScrollReveal>
        <ScrollReveal variant="fade-up">
          <Positioning />
        </ScrollReveal>
        <ScrollReveal variant="slide-left">
          <Services />
        </ScrollReveal>
        <ScrollReveal variant="scale">
          <Projects />
        </ScrollReveal>
        <ScrollReveal variant="slide-right">
          <WhyUs />
        </ScrollReveal>
        <ScrollReveal variant="scale">
          <Metrics />
        </ScrollReveal>
        <ScrollReveal variant="clip">
          <Process />
        </ScrollReveal>
        <ScrollReveal variant="slide-left">
          <Technologies />
        </ScrollReveal>
        <ScrollReveal variant="blur">
          <Testimonial />
        </ScrollReveal>
        <ScrollReveal variant="slide-right">
          <Faq />
        </ScrollReveal>
        <ScrollReveal variant="scale">
          <FinalCta />
        </ScrollReveal>
      </main>
      <ScrollReveal variant="fade-up">
        <Footer />
      </ScrollReveal>
    </>
  );
}
