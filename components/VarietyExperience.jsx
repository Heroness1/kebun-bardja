"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Leaf,
  MoveUpRight,
  Sprout,
} from "lucide-react";

const varieties = [
  {
    slug: "hass",
    number: "01",
    name: "Hass",
    descriptor: "Lembut dan kaya rasa",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1500&q=85",
    short: "Oval, kulit bertekstur, dan daging bertekstur lembut.",
    detail: "Hass dikenal dengan kulit yang cenderung menggelap saat matang dan daging bertekstur lembut. Ciri aktual tetap dipengaruhi kematangan dan penanganan pascapanen.",
    note: "KARAKTER BUAH",
  },
  {
    slug: "miki",
    number: "02",
    name: "Miki",
    descriptor: "Lembut, gurih, tropis",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1500&q=85",
    short: "Kenali karakter daging dan rasa dari referensi budidaya.",
    detail: "Laporan panen BRMP Jambi menggambarkan Miki dengan daging tebal berwarna kuning cerah, tekstur lembut, dan rasa gurih sedikit manis. Hasil dapat berbeda antar lokasi.",
    note: "REFERENSI INDONESIA",
  },
  {
    slug: "aligator",
    number: "03",
    name: "Aligator",
    descriptor: "Bentuk yang khas",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0b2f53?auto=format&fit=crop&w=1500&q=85",
    short: "Bentuk memanjang menjadi ciri yang mudah dikenali.",
    detail: "Aligator sering dikenali dari bentuk buahnya yang memanjang. Ukuran dan mutu buah di lapangan dipengaruhi bahan tanam, lingkungan, serta teknik budidaya.",
    note: "BENTUK KHAS",
  },
  {
    slug: "kendil",
    number: "04",
    name: "Kendil",
    descriptor: "Bentuk yang menarik",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=1500&q=85",
    short: "Varietas yang tercatat dalam referensi budidaya Indonesia.",
    detail: "Kendil tercantum dalam sumber perbenihan dan buku lapang budidaya alpukat. Data ukuran dari referensi bukan jaminan ukuran yang akan diperoleh di setiap kebun.",
    note: "REFERENSI BUDIDAYA",
  },
  {
    slug: "wina",
    number: "05",
    name: "Wina",
    descriptor: "Dikenal dari dataran tinggi",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1500&q=85",
    short: "Wina Bandungan tercatat dalam sumber perbenihan pemerintah.",
    detail: "Referensi budidaya mencatat Wina berasal dari wilayah Bandungan, Semarang, dan dikenal dengan buah besar serta daging tebal. Karakter aktual dapat berbeda di lokasi tanam.",
    note: "ASAL VARIETAS",
  },
  {
    slug: "pluwang",
    number: "06",
    name: "Pluwang",
    descriptor: "Layak dikenali lebih jauh",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1500&q=85",
    short: "Kenali informasi varietas dan bukti asal bibit sebelum memilih.",
    detail: "Klaim populer mengenai ukuran Pluwang perlu diperiksa terhadap bukti asal bibit dan catatan panen. Kami tidak menetapkan angka baku tanpa sumber teknis yang memadai.",
    note: "PERIKSA REFERENSI",
  },
];

export default function VarietyExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show3D, setShow3D] = useState(false);
  const sceneRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fruitY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const active = varieties[activeIndex];

  return (
    <main className="avocado-experience">
      <div className="avocado-topline">
        <span><span className="avocado-live-dot" /> KEBUN ALPUKAT RANCAMAYA</span>
        <Link href="/">Kembali ke beranda <ArrowUpRight size={14} /></Link>
      </div>

      <header className="avocado-nav">
        <Link href="/" className="avocado-brand" aria-label="Kebun Alpukat Rancamaya">
          <span className="avocado-brand-mark"><Sprout size={22} strokeWidth={1.5} /></span>
          <span><strong>kebun alpukat rancamaya</strong><small>TUMBUH DENGAN PERAWATAN</small></span>
        </Link>
        <div className="avocado-nav-meta"><span>CATATAN KEBUN</span><i /> <span>EDISI 01 — VARIETAS</span></div>
        <a className="avocado-nav-cta" href="#explore">Jelajahi varietas <ArrowDownRight size={15} /></a>
      </header>

      <section className="avocado-scene" ref={sceneRef}>
        <motion.div className="avocado-scene-bg" style={reducedMotion ? undefined : { y: backgroundY }} />
        <div className="avocado-scene-grain" />
        <div className="avocado-scene-orbit avocado-orbit-one" />
        <div className="avocado-scene-orbit avocado-orbit-two" />
        <motion.div
          className="avocado-scene-fruit"
          style={reducedMotion ? undefined : { y: fruitY }}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.88, rotate: -7 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={active.image} alt={`Foto ilustrasi buah alpukat ${active.name}`} fetchPriority="high" />
          <span className="avocado-fruit-glow" />
        </motion.div>
        <div className="avocado-scene-content">
          <motion.p className="avocado-eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            <span /> PANDUAN JENIS-JENIS ALPUKAT
          </motion.p>
          <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            Beragam<br /><em>secara alami.</em>
          </motion.h1>
          <motion.p className="avocado-scene-copy" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
            Enam varietas. Karakter yang berbeda. Kenali buahnya, pahami ceritanya, lalu pilih informasi yang paling sesuai dengan tujuan Anda.
          </motion.p>
          <motion.a className="avocado-scene-link" href="#explore" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}>
            Jelajahi koleksi <ArrowDownRight size={17} />
          </motion.a>
        </div>
        <div className="avocado-scene-index"><span>01</span><i /> <span>06</span><small>VARIETAS</small></div>
        <div className="avocado-scene-caption"><span>CATATAN BOTANI</span><span>INDONESIA · BUDIDAYA TROPIS</span></div>
        <div className="avocado-scene-side-note">TUMBUH TERAWAT · RANCAMAYA</div>
      </section>

      <section className="avocado-intro" id="explore">
        <div className="avocado-intro-label"><span>01 / KOLEKSI VARIETAS</span><Compass size={19} /></div>
        <div className="avocado-intro-copy">
          <p className="avocado-kicker">MENGENAL LEBIH DEKAT ALPUKAT</p>
          <h2>Bukan sekadar buah.<br /><em>Setiap jenis punya ciri.</em></h2>
          <p>Setiap varietas memiliki bentuk, tekstur, dan cerita budidaya yang berbeda. Pilih satu untuk melihat catatan singkat, lalu buka panduan lengkapnya.</p>
        </div>
        <div className="avocado-intro-count"><strong>06</strong><span>VARIETAS<br />UNTUK DIKENALI</span></div>
      </section>

      <section className="avocado-feature" aria-live="polite">
        <div className="avocado-feature-visual">
          <div className="avocado-feature-backdrop" />
          {show3D ? (
            <div className="avocado-feature-model" aria-label="Model alpukat tiga dimensi yang dapat diputar">
              <iframe
                title="Model 3D alpukat interaktif"
                src="https://sketchfab.com/models/e6606309d5434f6a9c042d44250cbcd8/embed?autostart=1&ui_theme=dark"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <span className="avocado-model-credit">Model 3D: Gewoelbe3DScan · Sketchfab (CC BY)</span>
            </div>
          ) : (
            <motion.div
              key={active.slug}
              className="avocado-feature-image"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.94, rotateY: -8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={active.image} alt={`Foto ilustrasi ${active.name}`} loading="lazy" />
            </motion.div>
          )}
          <div className="avocado-feature-vertical">VARIETAS / {active.number}</div>
          <div className="avocado-feature-image-caption"><span>{show3D ? "MODEL 3D" : `GAMBAR ${active.number}`}</span><span>{show3D ? "PUTAR DENGAN JARI" : "REFERENSI VISUAL"}</span></div>
          <button
            type="button"
            className="avocado-3d-toggle"
            onClick={() => setShow3D((value) => !value)}
            aria-pressed={show3D}
          >
            {show3D ? "Kembali ke foto" : "Putar model 3D"} <span>{show3D ? "↩" : "↗"}</span>
          </button>
        </div>
        <div className="avocado-feature-copy">
          <div className="avocado-feature-top"><span>{active.note}</span><span>{active.number} / 06</span></div>
          <motion.div key={active.slug + "-copy"} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="avocado-feature-kicker">{active.descriptor}</p>
            <h2>Alpukat<br /><em>{active.name}.</em></h2>
            <p className="avocado-feature-summary">{active.short}</p>
            <p className="avocado-feature-detail">{active.detail}</p>
          </motion.div>
          <Link href={`/alpukat/${active.slug}`} className="avocado-detail-link">Buka catatan varietas <ArrowUpRight size={17} /></Link>
          <div className="avocado-feature-controls">
            <button type="button" aria-label="Varietas sebelumnya" onClick={() => setActiveIndex((index) => (index + varieties.length - 1) % varieties.length)}><span>←</span></button>
            <div className="avocado-variety-rail" aria-label="Pilih jenis alpukat">
              {varieties.map((item, index) => <button type="button" key={item.slug} aria-label={`Pilih alpukat ${item.name}`} aria-pressed={index === activeIndex} className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)}>{item.name}</button>)}
            </div>
            <button type="button" aria-label="Varietas berikutnya" onClick={() => setActiveIndex((index) => (index + 1) % varieties.length)}><span>→</span></button>
          </div>
        </div>
      </section>

      <p className="avocado-illustration-note">Foto merupakan ilustrasi referensi, bukan dokumentasi panen Rancamaya. Model 3D adalah contoh alpukat umum, bukan pemindaian khusus setiap varietas. Tidak semua varietas pada halaman ini diklaim tersedia di kebun.</p>

      <footer className="avocado-footer">
        <Link href="/" className="avocado-brand"><span className="avocado-brand-mark"><Sprout size={22} /></span><span><strong>kebun alpukat rancamaya</strong><small>TUMBUH DENGAN PERAWATAN</small></span></Link>
        <span>CATATAN KEBUN · JENIS ALPUKAT</span>
        <Link href="/potensi-ekonomi-alpukat">Kenali potensi alpukat <ArrowRight size={15} /></Link>
      </footer>
    </main>
  );
}
