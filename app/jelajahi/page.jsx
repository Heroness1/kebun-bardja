"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import TrustSection from "../../components/TrustSection";
import {
  StorySlide,
  HarvestSlide,
  VarietySlide,
  ManifestoSlide,
  ProcessSlide,
  ContactSlide,
} from "../../components/gallery/GallerySlides";
import GalleryFooter from "../../components/gallery/GalleryFooter";
import { ArrowUpRight, Menu, X, Sprout } from "lucide-react";

const navItems = [
  ["Cerita Kami", "#cerita"],
  ["Profil Kebun", "#kepercayaan"],
  ["Hasil Kebun", "#hasil-kebun"],
  ["Proses", "#proses"],
  ["Hubungi", "#hubungi"],
];

const galleryLabels = [
  "Cerita",
  "Profil",
  "Hasil kebun",
  "Varietas",
  "Manifesto",
  "Proses",
  "Hubungi",
  "Penutup",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFruit, setActiveFruit] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationLocked = useRef(false);
  const activeSlideRef = useRef(0);
  const navigationTimer = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("gallery-mode");

    const slides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
    const ratios = new Map();
    let observer;

    const syncActiveSlide = (entries) => {
      entries.forEach((entry) => {
        ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      let bestIndex = activeSlideRef.current;
      let bestRatio = -1;
      slides.forEach((slide, index) => {
        const ratio = ratios.get(slide) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });

      activeSlideRef.current = bestIndex;
      setActiveSlide(bestIndex);
    };

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(syncActiveSlide, {
        threshold: [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85],
      });
      slides.forEach((slide) => observer.observe(slide));
    }

    const goToSlide = (index) => {
      const target = slides[index];
      if (!target) return false;
      target.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
      return true;
    };

    const goAdjacent = (direction) => {
      if (navigationLocked.current) return true;

      const current = Math.max(0, Math.min(slides.length - 1, activeSlideRef.current));
      const next = Math.max(0, Math.min(slides.length - 1, current + direction));
      if (next === current) return false;

      navigationLocked.current = true;
      goToSlide(next);
      navigationTimer.current = window.setTimeout(() => {
        navigationLocked.current = false;
        navigationTimer.current = null;
      }, shouldReduceMotion ? 120 : 850);
      return true;
    };

    const isInteractiveTarget = (target) =>
      target instanceof Element &&
      Boolean(target.closest("a, button, input, textarea, select, summary, [contenteditable='true']"));

    const onWheel = (event) => {
      if (window.matchMedia("(max-width: 760px)").matches) return;
      if (isInteractiveTarget(event.target) || Math.abs(event.deltaY) < 18) return;

      if (navigationLocked.current) {
        event.preventDefault();
        return;
      }

      if (goAdjacent(event.deltaY > 0 ? 1 : -1)) event.preventDefault();
    };

    const onKeyDown = (event) => {
      if (window.matchMedia("(max-width: 760px)").matches) return;
      if (isInteractiveTarget(event.target) || event.altKey || event.ctrlKey || event.metaKey) return;

      let direction = 0;
      if (["ArrowDown", "PageDown"].includes(event.key)) direction = 1;
      if (["ArrowUp", "PageUp"].includes(event.key)) direction = -1;
      if (!direction) return;

      if (goAdjacent(direction)) event.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.classList.remove("gallery-mode");
      observer?.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
      navigationLocked.current = false;
    };
  }, [shouldReduceMotion]);

  const closeMenu = () => setMenuOpen(false);

  const goToGallerySlide = (index) => {
    const slides = document.querySelectorAll("[data-gallery-slide]");
    slides[index]?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

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

      <nav className="gallery-progress" aria-label="Navigasi bagian galeri">
        {galleryLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            data-label={label}
            aria-label={`Ke bagian ${label}`}
            aria-current={activeSlide === index ? "step" : undefined}
            onClick={() => goToGallerySlide(index)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </nav>
    </main>
  );
}
