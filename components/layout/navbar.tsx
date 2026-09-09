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

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      const darkSections = [...document.querySelectorAll<HTMLElement>("[data-navbar-tone='dark']")];
      setDark(darkSections.some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 92 && bounds.bottom > 0;
      }));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const headerTone = dark ? "bg-[rgba(22,23,21,.91)] text-page" : scrolled ? "bg-[rgba(242,245,236,.9)]" : "bg-transparent";
  const mobileTone = dark ? "border-[rgba(242,245,236,.18)] bg-[rgba(22,23,21,.97)] text-page" : "border-line bg-[rgba(242,245,236,.96)]";

  return <header className={`fixed inset-x-0 top-0 z-20 w-full border-b border-transparent transition-[background,border-color] duration-200 ${headerTone}`}>
    <Container className="flex h-[92px] items-center justify-between max-[640px]:h-[72px]">
      <a className="font-display text-[31px] font-bold tracking-[-.065em]" href="#top" onClick={() => setOpen(false)}>{siteConfig.companyName}<i className="text-lime-strong not-italic">.</i></a>
      <nav className="absolute left-1/2 flex -translate-x-1/2 gap-[39px] max-[900px]:hidden" aria-label="Navigasi utama">
        {navigation.map((item, index) => <a className={`relative text-[14px] font-medium text-ink-soft transition-colors hover:text-ink ${index === 0 ? "after:absolute after:-bottom-[13px] after:left-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full after:bg-lime-strong" : ""} ${dark ? "text-page hover:text-white" : ""}`} key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <Button className={`min-h-[47px] px-6 text-[14px] max-[900px]:hidden ${dark ? "border-lime bg-lime text-ink" : ""}`} href={siteConfig.whatsapp} arrow>Mulai Project</Button>
      <button className={`hidden size-11 place-items-center border-0 bg-transparent text-ink max-[900px]:grid ${dark ? "text-page" : ""}`} aria-label={open ? "Tutup menu" : "Buka menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
    </Container>
    {open && <div id="mobile-navigation" className={`absolute inset-x-0 top-[92px] border-b backdrop-blur-2xl max-[640px]:top-[72px] ${mobileTone}`}><Container><nav className="grid gap-1 py-5 pb-7" aria-label="Navigasi mobile">{navigation.map((item) => <a className="py-3 font-display text-[28px] tracking-[-.03em]" key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<Button className="mt-3 w-max" href={siteConfig.whatsapp} arrow>Mulai Project</Button></nav></Container></div>}
  </header>;
}
