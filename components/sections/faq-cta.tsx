import { ArrowUpRight } from "lucide-react";
import { faqs } from "@/data/content";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="faq-section">
      <Container>
        <div className="faq-grid">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Pertanyaan yang
                <br />
                <em>sering ditanyakan.</em>
              </>
            }
          />
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section
      id="kontak"
      data-navbar-tone="dark"
      className="final-cta footer-cta"
    >
      <div aria-hidden="true" className="footer-orbits">
        <i />
        <b />
      </div>
      <div aria-hidden="true" className="footer-waves">
        {Array.from({ length: 5 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
      <div aria-hidden="true" className="footer-stars">
        {Array.from({ length: 8 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
      <Container>
        <p className="footer-kicker">
          <span /> Mulai Project
        </p>
        <h2>
          Mari membangun sesuatu
          <br />
          yang <em>menggerakkan bisnis Anda.</em>
        </h2>
        <div className="footer-cta-actions">
          <Button
            className="footer-cta-button"
            href={siteConfig.whatsapp}
            arrow
          >
            Mulai Project
          </Button>
          <i />
          <p>
            Lebih suka email?{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
            <ArrowUpRight aria-hidden="true" size={17} />
          </p>
        </div>
        <p aria-hidden="true" className="footer-side-note footer-side-left">
          Web
          <br />
          Systems
          <br />
          Digital <i />
        </p>
        <p aria-hidden="true" className="footer-side-note footer-side-right">
          Ideas
          <br />
          Systems
          <br />
          Real Impact <i />
        </p>
        <p aria-hidden="true" className="footer-side-note footer-side-bottom">
          Build
          <br />
          Scale
          <br />
          Grow <i />
        </p>
      </Container>
    </section>
  );
}
