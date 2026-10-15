"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FallingLeaves from "../components/FallingLeaves";
import { ArrowDownRight, ArrowUpRight, Menu, X, Sprout, Sun } from "lucide-react";

const navItems = [
  ["Cerita Kami", "/jelajahi#cerita"],
  ["Profil Kebun", "/jelajahi#kepercayaan"],
  ["Hasil Kebun", "/jelajahi#hasil-kebun"],
  ["Proses", "/jelajahi#proses"],
  ["Hubungi", "/jelajahi#hubungi"]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="landing-home">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>BUAH DARI KEBUN, CERITA DARI ALAM</span>
        <span className="announcement-right">Kebun Alpukat Rancamaya <ArrowUpRight size={12} /></span>
      </div>

      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="Kebun Alpukat Rancamaya, beranda" onClick={closeMenu}>
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
      <section className="hero hero--landing" id="beranda">
        <div className="hero-image" aria-hidden="true">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=90">
            <source src="https://videos.pexels.com/video-files/36846238/36846238-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-image-shade" />
        </div>
        <FallingLeaves />
        <div className="hero-content">
          <motion.div
            className="eyebrow light-eyebrow"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
          ><span className="eyebrow-line" /> SEBUAH KEBUN, BANYAK CERITA</motion.div>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
          >Kebun Alpukat Rancamaya.<br /><em>Dipetik dengan hati.</em></motion.h1>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.36, ease: [0.2, 0.7, 0.2, 1] }}
          >Kami percaya hal-hal baik tidak tumbuh dalam semalam. Mereka dirawat, diberi ruang, dan tumbuh bersama waktu.</motion.p>
          <motion.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.48, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <a className="button button-light" href="/jelajahi">Jelajahi Kebun Kami <ArrowDownRight size={17} /></a>
            <a className="text-link light-link" href="#hasil-kebun">Jelajahi hasil kebun <ArrowRight size={16} /></a>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span><span className="tiny-sun"><Sun size={15} /></span> DIRAWAT DENGAN ALAM</span>
          <span className="hero-coordinate">INDONESIA · TROPICAL GROWING</span>
          <a href="/jelajahi" aria-label="Jelajahi isi Kebun Alpukat Rancamaya"><ArrowDownRight size={20} /></a>
        </div>
        <div className="hero-stamp"><span>EST.</span><strong>KAR</strong><span>GROW<br />SLOW</span></div>
      </section>
    </main>
  );
}
