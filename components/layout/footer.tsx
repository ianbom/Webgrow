import { ArrowUpRight } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

const exploreLinks = [
  ...navigation.slice(0, 4),
  { label: "Teknologi", href: "#teknologi" },
  { label: "Tentang Kami", href: "#tentang" },
];
const serviceLinks = [
  "Web Development",
  "UI/UX Design",
  "E-Commerce",
  "Custom Software",
  "AI Solutions",
  "Digital Products",
];

export function Footer() {
  return (
    <footer data-navbar-tone="dark" className="footer footer-reference">
      <Container>
        <div className="footer-divider" />
        <div className="footer-grid">
          <div className="footer-intro">
            <a className="footer-wordmark" href="#top">
              {siteConfig.companyName}
              <i>.</i>
            </a>
            <p>
              Software house untuk website, produk digital, dan sistem bisnis
              yang dirancang untuk membantu bisnis berkembang.
            </p>
            <span className="footer-location">Surabaya / Indonesia</span>
          </div>
          <nav aria-label="Navigasi footer">
            <p className="footer-label">Jelajahi</p>
            {exploreLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Layanan footer">
            <p className="footer-label">Layanan</p>
            {serviceLinks.map((item) => (
              <a key={item} href="#layanan">
                {item}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <p className="footer-label">Kontak</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.whatsapp}>
              Mulai Project <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={siteConfig.whatsapp}>
              WhatsApp <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <span className="footer-contact-rule" />
            <a href={siteConfig.instagram}>Instagram</a>
            <a href={siteConfig.linkedin}>LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {siteConfig.companyName}. All rights reserved.</span>
          <div>
            <a href="#top">Privacy</a>
            <i />
            <a href="#top">Terms</a>
          </div>
          <small>Design · Engineering · Growth</small>
        </div>
        <div aria-hidden="true" className="footer-giant-word">
          {siteConfig.companyName}
          <i>.</i>
        </div>
      </Container>
    </footer>
  );
}
