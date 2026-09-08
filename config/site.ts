export const siteConfig = {
  companyName: "Webgrow",
  tagline: "Website yang bekerja untuk bisnis Anda.",
  email: "hello@webgrow.id",
  whatsapp: "{{WHATSAPP_URL}}",
  instagram: "{{INSTAGRAM_URL}}",
  linkedin: "{{LINKEDIN_URL}}",
  location: "Indonesia",
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Proses", href: "#proses" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
] as const;
