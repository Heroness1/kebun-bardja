"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import TrustSection from "../../components/TrustSection";
import { StorySlide, HarvestSlide, VarietySlide, ManifestoSlide, ProcessSlide, ContactSlide, GalleryFooter } from "../../components/gallery/GallerySlides";
import {
  ArrowUpRight, ChevronLeft, Menu, X, Sprout
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
  const [activeSlide, setActiveSlide] = useState(0);
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
    const slides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          const index = slides.indexOf(entry.target);
          if (index >= 0) setActiveSlide(index);
        }
      });
    }, { threshold: [0.45, 0.65] });
    slides.forEach((slide) => observer.observe(slide));
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
      setActiveSlide(next);
      window.setTimeout(() => { navigationLocked.current = false; }, 750);
    };
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 12) return;
      event.preventDefault();
      goAdjacent(event.deltaY > 0 ? 1 : -1);
    };
    const onTouchStart = (event) => { gestureStartY.current = event.touches[0]?.clientY ?? null; };
    const onTouchMove = (event) => { if (gestureStartY.current !== null) event.preventDefault(); };
    const onTouchEnd = (event) => {
      if (gestureStartY.current === null) return;
      const endY = event.changedTouches[0]?.clientY ?? gestureStartY.current;
      const delta = gestureStartY.current - endY;
      gestureStartY.current = null;
      if (Math.abs(delta) > 45) goAdjacent(delta > 0 ? 1 : -1);
    };
    const onKeyDown = (event) => {
      if (["ArrowDown", "PageDown"].includes(event.key)) { event.preventDefault(); goAdjacent(1); }
      if (["ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); goAdjacent(-1); }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      observer.disconnect();
      root.classList.remove("gallery-mode");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [shouldReduceMotion]);

  const goToSlide = (direction) => {
    const slides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
    const next = Math.max(0, Math.min(slides.length - 1, activeSlide + direction));
    slides[next]?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    setActiveSlide(next);
  };

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

      <nav className="gallery-controls" aria-label="Navigasi galeri kebun">
        <span className="gallery-counter">{String(activeSlide + 1).padStart(2, "0")} <i>/</i> 08</span>
        <div className="gallery-dots" aria-label="Pilih halaman galeri">
          {Array.from({ length: 8 }, (_, index) => index).map((index) => (
            <button key={index} className={activeSlide === index ? "gallery-dot gallery-dot-active" : "gallery-dot"} onClick={() => {
              const slides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
              slides[index]?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
              setActiveSlide(index);
            }} aria-label={`Buka halaman ${index + 1}`} aria-current={activeSlide === index ? "step" : undefined} />
          ))}
        </div>
        <button className="gallery-arrow" onClick={() => goToSlide(-1)} disabled={activeSlide === 0} aria-label="Halaman sebelumnya"><ChevronLeft size={18} /></button>
      </nav>
    </main>
  );
}