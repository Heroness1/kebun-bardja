"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TrustSection from "../components/TrustSection";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sprout,
  Leaf, Sun, MapPin, Instagram, MessageCircle, CircleDot, TreeDeciduous
} from "lucide-react";

const fruits = [
  {
    number: "01",
    name: "Alpukat",
    english: "Avocado",
    note: "Lembut, bernutrisi, dan tumbuh dengan sabar.",
    tag: "PANEN PILIHAN",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1100&q=85",
    alt: "Alpukat segar berwarna hijau di atas permukaan alami"
  },
  {
    number: "02",
    name: "Durian",
    english: "Durian",
    note: "Aroma khas dan rasa yang punya ceritanya sendiri.",
    tag: "DARI KEBUN",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1100&q=85",
    alt: "Buah durian matang dengan kulit berduri"
  }
];

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
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

      <section className="hero" id="beranda">
        <div className="hero-image" aria-hidden="true">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=90">
            <source src="https://videos.pexels.com/video-files/36846238/36846238-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-image-shade" />
        </div>
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
          >Tumbuh dari alam.<br /><em>Dipetik dengan hati.</em></motion.h1>
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
            <a className="button button-light" href="#cerita">Kenali kebun kami <ArrowDownRight size={17} /></a>
            <a className="text-link light-link" href="#hasil-kebun">Jelajahi hasil kebun <ArrowRight size={16} /></a>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span><span className="tiny-sun"><Sun size={15} /></span> DIRAWAT DENGAN ALAM</span>
          <span className="hero-coordinate">INDONESIA · TROPICAL GROWING</span>
          <a href="#cerita" aria-label="Gulir ke cerita Kebun Alpukat Rancamaya"><ArrowDownRight size={20} /></a>
        </div>
        <div className="hero-stamp"><span>EST.</span><strong>KAR</strong><span>GROW<br />SLOW</span></div>
      </section>

      <section className="intro section-pad" id="cerita">
        <div className="intro-label reveal" data-reveal>
          <span className="section-index">01 / CERITA KAMI</span>
          <span className="vertical-note">AKAR YANG MENJAGA</span>
        </div>
        <div className="intro-main reveal" data-reveal>
          <p className="overline">LEBIH DARI SEKADAR KEBUN</p>
          <h2>Setiap buah punya<br />akar. <em>Begitu juga kami.</em></h2>
          <div className="intro-bottom">
            <p className="body-copy">Kebun Alpukat Rancamaya adalah perjalanan merawat tanaman, memahami musim, dan menjaga hubungan baik dengan alam. Dari alpukat hingga durian, kami ingin setiap hasil kebun membawa cerita tentang proses yang dijalani dengan sungguh-sungguh.</p>
            <div className="signature"><span className="signature-leaf"><Leaf size={23} /></span><span><strong>Kebun Alpukat Rancamaya</strong><small>Tumbuh, satu musim demi satu musim.</small></span></div>
          </div>
        </div>
        <div className="intro-art reveal" data-reveal>
          <div className="intro-photo"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85" alt="Cahaya matahari menembus pepohonan hutan yang rimbun" loading="lazy" /></div>
          <div className="photo-caption"><span>01 — ALAM ADALAH AWALNYA</span><Leaf size={17} /></div>
        </div>
      </section>

      <TrustSection />

      <section className="fruit-section section-pad" id="hasil-kebun">
        <div className="section-heading reveal" data-reveal>
          <div><span className="section-index">02 / HASIL KEBUN</span><h2>Yang tumbuh<br /><em>dengan baik.</em></h2></div>
          <p className="heading-aside">Mengenal hasil kebun kami.<br />Dirawat dengan perhatian,<br />menunggu waktu yang tepat.</p>
        </div>
        <div className="fruit-grid">
          {fruits.map((fruit, i) => (
            <article className={activeFruit === i ? "fruit-card fruit-active" : "fruit-card"} key={fruit.number} onMouseEnter={() => setActiveFruit(i)} data-reveal>
              <div className="fruit-photo">
                <img src={fruit.image} alt={fruit.alt} loading="lazy" />
                <span className="fruit-number">{fruit.number}</span>
                <span className="fruit-tag">{fruit.tag}</span>
                <a href="#hubungi" className="fruit-arrow" aria-label={`Tanyakan tentang ${fruit.name}`}><ArrowUpRight size={21} /></a>
              </div>
              <div className="fruit-info">
                <div><span className="fruit-english">{fruit.english}</span><h3>{fruit.name}</h3></div>
                <p>{fruit.note}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="fruit-footnote"><Sprout size={16} /><span>Musim, ketersediaan, dan varietas dapat berbeda. Hubungi kami untuk informasi terbaru.</span></div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image" role="img" aria-label="Suasana hijau alami di bawah kanopi pepohonan">
          <div className="manifesto-image-overlay" />
        </div>
        <div className="manifesto-content reveal" data-reveal>
          <span className="section-index light-index">03 / CARA KAMI BERTUMBUH</span>
          <span className="manifesto-quote">“</span>
          <h2>Alam tak pernah<br />terburu-buru.<br /><em>Ia tetap tumbuh.</em></h2>
          <p>Kami belajar untuk menghargai proses. Memperhatikan tanah, memahami cuaca, dan memberi waktu bagi setiap pohon untuk bertumbuh.</p>
          <a className="text-link light-link" href="#proses">Nilai yang kami jaga <ArrowRight size={16} /></a>
        </div>
        <div className="manifesto-index">GROW AT NATURE'S PACE · KAR</div>
      </section>

      <section className="process section-pad" id="proses">
        <div className="process-top reveal" data-reveal>
          <div><span className="section-index">04 / DARI WAKTU KE WAKTU</span><h2>Proses yang<br /><em>punya arti.</em></h2></div>
          <p className="body-copy">Buah yang baik berawal dari perhatian pada hal-hal kecil. Inilah prinsip yang ingin kami bawa dalam setiap langkah.</p>
        </div>
        <div className="process-list">
          <div className="process-row reveal" data-reveal><span className="process-num">01</span><div className="process-icon"><Sprout size={23} /></div><div className="process-copy"><h3>Merawat</h3><p>Memberi perhatian pada pohon dan lingkungan tempatnya tumbuh.</p></div><span className="process-side">CARE</span></div>
          <div className="process-row reveal" data-reveal><span className="process-num">02</span><div className="process-icon"><Sun size={23} /></div><div className="process-copy"><h3>Menunggu</h3><p>Menghormati musim dan waktu alami, bukan sekadar mengejar cepat.</p></div><span className="process-side">PATIENCE</span></div>
          <div className="process-row reveal" data-reveal><span className="process-num">03</span><div className="process-icon"><TreeDeciduous size={23} /></div><div className="process-copy"><h3>Menjaga</h3><p>Terus belajar agar kebun tetap menjadi ruang hidup yang berharga.</p></div><span className="process-side">RESPECT</span></div>
        </div>
      </section>

      <section className="contact-section" id="hubungi">
        <div className="contact-text reveal" data-reveal>
          <span className="section-index light-index">05 / MARI TERHUBUNG</span>
          <h2>Punya cerita<br />atau rencana <em>bersama?</em></h2>
          <p>Untuk informasi hasil kebun, peluang kerja sama, atau sekadar ingin mengenal Kebun Alpukat Rancamaya lebih dekat, kami terbuka untuk berbincang.</p>
          <a className="button button-light contact-button" href="https://wa.me/?text=Halo%20Kebun%20Alpukat%20Rancamaya%2C%20saya%20ingin%20bertanya%20tentang%20kebun%20dan%20hasil%20buahnya." target="_blank" rel="noreferrer"><MessageCircle size={17} /> Hubungi melalui WhatsApp <ArrowUpRight size={16} /></a>
          <small className="contact-disclaimer">Tautan WhatsApp akan membuka percakapan. Nomor resmi dapat ditambahkan saat informasi kontak tersedia.</small>
        </div>
        <div className="contact-art">
          <div className="contact-ring ring-one" /><div className="contact-ring ring-two" /><div className="contact-leaf"><Sprout size={105} strokeWidth={0.8} /></div>
          <div className="contact-note"><span>KEBUN ALPUKAT RANCAMAYA</span><strong>Grow well.<br />Live rooted.</strong><Leaf size={19} /></div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#beranda"><span className="brand-mark"><Sprout size={23} strokeWidth={1.6} /></span><span className="brand-copy"><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></a>
        <p>Dirawat dengan hati. Tumbuh bersama alam.</p>
        <div className="footer-meta"><span>© {new Date().getFullYear()} KEBUN ALPUKAT RANCAMAYA</span><a href="#beranda">KEMBALI KE ATAS <ArrowUpRight size={13} /></a></div>
      </footer>
    </main>
  );
}