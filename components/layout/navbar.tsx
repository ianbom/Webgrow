"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={`navbar hero-navbar ${scrolled ? "navbar-scrolled" : ""}`}><Container className="navbar-inner"><a className="brand webgrow-brand" href="#top" onClick={() => setOpen(false)}>{siteConfig.companyName}<i>.</i></a><nav className="desktop-nav" aria-label="Navigasi utama">{navigation.map((item, index) => <a className={index === 0 ? "nav-active" : ""} key={item.href} href={item.href}>{item.label}</a>)}</nav><Button className="desktop-cta" href={siteConfig.whatsapp} arrow>Mulai Project</Button><button className="menu-trigger" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button></Container>{open && <div className="mobile-sheet"><Container><nav aria-label="Navigasi mobile">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<Button href={siteConfig.whatsapp} arrow>Mulai Project</Button></nav></Container></div>}</header>;
}
