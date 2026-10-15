"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import TrustSection from "../../components/TrustSection";
import { StorySlide, HarvestSlide, VarietySlide, ManifestoSlide, ProcessSlide, ContactSlide } from "../../components/gallery/GallerySlides";
import GalleryFooter from "../../components/gallery/GalleryFooter";
import {
  ArrowUpRight, Menu, X, Sprout
} from "lucide-react";

const navItems = [
  ["Cerita Kami", "#cerita"],
  ["Profil Kebun", "#kepercayaan"],
  ["Hasil Kebun", "#hasil-kebun"],
  ["Proses", "#proses"],
  ["Hubungi", "#hubungi"]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFruit, setActiveFruit] = useState(0);
  const gestureStartY = useRef(null);
  const navigationLocked = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("gallery-mode");
    const goAdjacent = (direction) => {
      if (navigationLocked.current) return;
      const currentSlides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
      const current = Math.max(0, currentSlides.findIndex((slide) => {
        const rect = slide.getBoundingClientRect();
        return rect.top >= -window.innerHeight * 0.45 && rect.top < window.innerHeight * 0.55;
      }));
      const next = Math.max(0, Math.min(currentSlides.length - 1, current + direction));
      if (next === current) return;
      navigationLocked.current = true;
      currentSlides[next]?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => { navigationLocked.current = false; }, 750);
    };
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 12) return;
      event.preventDefault();
      goAdjacent(event.deltaY > 0 ? 1 : -1);
    };
    // Keep native touch scrolling on phones so taller slides remain fully readable.
    const onTouchStart = (event) => { gestureStartY.current = event.touches[0]?.clientY ?? null; };
    const onTouchEnd = () => { gestureStartY.current = null; };
    const onKeyDown = (event) => {
      if (["ArrowDown", "PageDown"].includes(event.key)) { event.preventDefault(); goAdjacent(1); }
      if (["ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); goAdjacent(-1); }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      root.classList.remove("gallery-mode");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [shouldReduceMotion]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="jelajahi-top">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>BUAH DARI KEBUN, CERITA DARI ALAM</span>
        <span className="announcement-right">Kebun Alpukat Rancamaya <ArrowUpRight size={12} /></span>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="Kebun Alpukat Rancamaya, beranda" onClick={closeMenu}>
          <span className="brand-mark"><Sprout size={23} strokeWidth={1.6} /></span>
          <span className="brand-copy"><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span>
        </a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Navigasi utama">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#hubungi" onClick={closeMenu}>Mari terhubung <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <StorySlide />
      <TrustSection />
      <HarvestSlide activeFruit={activeFruit} setActiveFruit={setActiveFruit} />
      <VarietySlide />
      <ManifestoSlide />
      <ProcessSlide />
      <ContactSlide />
      <GalleryFooter />
    </main>
  );
}