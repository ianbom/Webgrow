import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return <footer className="footer"><Container><div className="footer-grid"><div><a className="brand footer-brand" href="#top"><span>◒</span>{siteConfig.companyName}</a><p>Software house untuk website dan aplikasi web yang dirancang untuk membantu bisnis berkembang.</p></div><div><p className="footer-label">Navigasi</p>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div><p className="footer-label">Kontak</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.whatsapp}>WhatsApp</a><a href={siteConfig.instagram}>Instagram</a><a href={siteConfig.linkedin}>LinkedIn</a></div></div><div className="footer-bottom"><span>© 2026 {siteConfig.companyName}.</span><span>Dibangun dengan niat.</span></div></Container></footer>;
}
