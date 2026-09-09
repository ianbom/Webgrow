"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);

      const navbarHeight = 92;
      const sections = navigation
        .filter((item) => item.href !== "#top")
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter((section): section is HTMLElement => Boolean(section));
      const currentSection = sections
        .filter(
          (section) => section.getBoundingClientRect().top <= navbarHeight + 24,
        )
        .sort((first, second) => first.offsetTop - second.offsetTop)
        .at(-1);

      setActiveHref(currentSection ? `#${currentSection.id}` : "#top");

      const isOverDarkSection = Array.from(
        document.querySelectorAll<HTMLElement>("[data-navbar-tone='dark']"),
      ).some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= navbarHeight && bounds.bottom > 0;
      });

      setDark(isOverDarkSection);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`navbar hero-navbar ${scrolled ? "navbar-scrolled" : ""} ${dark ? "navbar-dark" : ""}`}
    >
      <Container className="navbar-inner">
        <a
          className="brand webgrow-brand"
          href="#top"
          onClick={() => setOpen(false)}
        >
          {siteConfig.companyName}
          <i>.</i>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a
              className={activeHref === item.href ? "nav-active" : ""}
              aria-current={activeHref === item.href ? "location" : undefined}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="desktop-cta" href={siteConfig.whatsapp} arrow>
          Mulai Project
        </Button>
        <button
          className="menu-trigger"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <div id="mobile-navigation" className="mobile-sheet">
          <Container>
            <nav aria-label="Navigasi mobile">
              {navigation.map((item) => (
                <a
                  className={activeHref === item.href ? "nav-active" : ""}
                  aria-current={
                    activeHref === item.href ? "location" : undefined
                  }
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href={siteConfig.whatsapp} arrow>
                Mulai Project
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
