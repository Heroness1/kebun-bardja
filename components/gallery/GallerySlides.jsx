"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sprout, Leaf, Sun, MessageCircle, TreeDeciduous } from "lucide-react";

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

export function StorySlide() {
  return (
    <section className="intro section-pad gallery-slide" id="cerita" data-gallery-slide>
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
  );
}

export function HarvestSlide({ activeFruit, setActiveFruit }) {
  return (
    <section className="fruit-section section-pad gallery-slide" id="hasil-kebun" data-gallery-slide>
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
  );
}

export function VarietySlide() {
  return (
    <section className="variety-catalog-slide section-pad gallery-slide" id="katalog-varietas" data-gallery-slide>
            <div className="section-heading reveal" data-reveal>
              <div><span className="section-index">03 / KATALOG VARIETAS</span><h2>Kenali pilihan<br /><em>alpukat lebih dekat.</em></h2></div>
              <p className="heading-aside">Buka halaman varietas untuk<br />membaca informasi lebih lengkap.</p>
            </div>
            <div className="variety-directory">
              <div className="variety-directory-heading"><span className="section-index">KATALOG VARIETAS</span><p>Jelajahi halaman tiap varietas alpukat.</p></div>
              <div className="variety-directory-grid">
                {[
                  ["01", "Alpukat Hass", "hass"],
                  ["02", "Alpukat Miki", "miki"],
                  ["03", "Alpukat Aligator", "aligator"],
                  ["04", "Alpukat Kendil", "kendil"],
                  ["05", "Alpukat Wina", "wina"],
                  ["06", "Alpukat Pluwang", "pluwang"]
                ].map(([number, name, slug]) => (
                  <a className="variety-directory-link" href={`/alpukat/${slug}`} key={slug}>
                    <span>{number}</span><strong>{name}</strong><ArrowUpRight size={17} />
                  </a>
                ))}
              </div>
              <p className="variety-directory-note">Daftar ini berisi contoh varietas untuk edukasi; varietas yang benar-benar ditanam di kebun perlu dikonfirmasi.</p>
            </div>
            <a className="variety-economy-home-link" href="/potensi-ekonomi-alpukat">
              <span><span className="section-index">BACAAN KHUSUS</span><strong>Potensi ekonomi alpukat Indonesia</strong><small>Data produksi BPS terbaru, peluang nilai tambah, dan cara membaca kelayakan usaha.</small></span>
              <ArrowUpRight size={20} />
            </a>
          </section>
  );
}

export function ManifestoSlide() {
  return (
    <section className="manifesto gallery-slide" data-gallery-slide>
            <div className="manifesto-image" role="img" aria-label="Suasana hijau alami di bawah kanopi pepohonan">
              <div className="manifesto-image-overlay" />
            </div>
            <div className="manifesto-content reveal" data-reveal>
              <span className="section-index light-index">03 / CARA KAMI BERTUMBUH</span>
              <span className="manifesto-quote">“</span>
              <h2>Alam tak pernah<br />terburu-buru.<br /><em>Ia tetap tumbuh.</em></h2>
              <p>Kami belajar untuk menghargai proses. Memperhatikan tanah, memahami cuaca, dan memberi waktu bagi setiap pohon untuk bertumbuh.</p>
              <a className="text-link light-link" href="#proses">Kenali kebun kami <ArrowRight size={16} /></a>
            </div>
            <div className="manifesto-index">GROW AT NATURE'S PACE · KAR</div>
          </section>
  );
}

const PROCESS_EASE = [0.22, 1, 0.36, 1];

const processSteps = [
  {
    number: "01",
    title: "Merawat",
    subtitle: "CARE COMES FIRST",
    description:
      "Perjalanan kebun dimulai dari perhatian pada pohon dan lingkungan tempatnya tumbuh.",
    icon: Sprout,
    idle: { rotate: [-5, 5, -5], duration: 4.5, origin: "50% 100%" },
  },
  {
    number: "02",
    title: "Menunggu",
    subtitle: "GROW AT ITS OWN PACE",
    description:
      "Setiap buah membutuhkan waktu. Kami menghargai proses alami dan perubahan musim.",
    icon: Sun,
    idle: { rotate: 360, duration: 28, origin: "50% 50%", linear: true },
  },
  {
    number: "03",
    title: "Menjaga",
    subtitle: "ROOTED IN NATURE",
    description:
      "Menjaga kebun berarti ikut merawat ruang hidup yang akan terus tumbuh dari musim ke musim.",
    icon: TreeDeciduous,
    idle: { rotate: [-3, 3, -3], duration: 5.5, origin: "50% 100%" },
  },
];

const EASE = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Merawat",
    subtitle: "CARE COMES FIRST",
    description:
      "Setiap perjalanan dimulai dari perhatian. Mengenali kondisi pohon, menjaga lingkungan tumbuh, dan merawat kebun dengan konsisten.",
    icon: Sprout,
    idle: {
      animate: { rotate: [-5, 5, -5] },
      transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      origin: "50% 100%",
    },
  },
  {
    number: "02",
    title: "Menunggu",
    subtitle: "GROW AT YOUR OWN PACE",
    description:
      "Alam punya waktunya sendiri. Kami belajar menghargai musim dan memberi kesempatan bagi buah untuk berkembang secara alami.",
    icon: Sun,
    idle: {
      animate: { rotate: 360 },
      transition: { duration: 28, repeat: Infinity, ease: "linear" },
      origin: "50% 50%",
    },
  },
  {
    number: "03",
    title: "Menjaga",
    subtitle: "ROOTED IN NATURE",
    description:
      "Merawat kebun bukan hanya tentang hasil hari ini, tetapi juga tentang menjaga ruang tumbuh untuk musim-musim berikutnya.",
    icon: TreeDeciduous,
    idle: {
      animate: { rotate: [-3, 3, -3] },
      transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
      origin: "50% 100%",
    },
  },
];

export function ProcessSlide() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.8,
        ease: EASE,
        delayChildren: reduce ? 0 : 0.25,
      },
    },
  };

  const line = {
    hidden: {
      opacity: reduce ? 1 : 0,
      scaleX: reduce ? 1 : 0,
      scaleY: reduce ? 1 : 0,
    },
    show: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: { duration: reduce ? 0 : 1.6, ease: EASE },
    },
  };

  const pop = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.6 },
    show: {
      opacity: 1,
      scale: 1,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <section
      className="proc-slide gallery-slide"
      id="proses"
      data-gallery-slide
      aria-labelledby="proses-title"
    >
      <motion.div
        className="proc-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
      >
        <div className="proc-head">
          <motion.span className="proc-index" variants={rise}>
            PROSES
            <span className="proc-brand"> · KEBUN ALPUKAT RANCAMAYA</span>
          </motion.span>

          <motion.h2 className="proc-title" id="proses-title" variants={rise}>
            Tumbuh mengikuti
            <br />
            <em>waktunya sendiri.</em>
          </motion.h2>
        </div>

        <div className="proc-steps">
          <motion.span className="proc-line" variants={line} aria-hidden="true" />

          {steps.map(({ number, title, subtitle, description, icon: Icon, idle }) => (
            <motion.article
              className="proc-step"
              key={number}
              variants={rise}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <motion.span className="proc-icon" variants={pop}>
                <motion.span
                  className="proc-icon-inner"
                  style={{ transformOrigin: idle.origin }}
                  animate={reduce ? undefined : idle.animate}
                  transition={idle.transition}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </motion.span>
              </motion.span>

              <div className="proc-copy">
                <span className="proc-meta">
                  <b>{number}</b>
                  <i>{subtitle}</i>
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        .proc-slide.gallery-slide {
          --proc-ink: #eef3e9;
          --proc-muted: rgba(238, 243, 233, 0.68);
          --proc-accent: #a9c79b;
          --proc-icon-bg: #1d4a38;

          height: 100vh;
          height: 100svh;
          min-height: 0;
          box-sizing: border-box;
          justify-content: center;
          justify-content: safe center;
          padding: clamp(56px, 9svh, 88px) 10.1% clamp(32px, 6svh, 60px);
          color: var(--proc-ink);
          background:
            radial-gradient(
              70% 60% at 85% 0%,
              rgba(120, 150, 108, 0.3),
              transparent 70%
            ),
            #173d2d;
        }

        .proc-inner {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .proc-index {
          display: block;
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.2em;
          color: var(--proc-accent);
        }

        .proc-title {
          font-family: var(--serif);
          font-size: clamp(30px, min(4.2vw, 6.8svh), 56px);
          line-height: 1.14;
          font-weight: 400;
          letter-spacing: -1.7px;
          margin: clamp(12px, 2.4svh, 23px) 0 0;
          color: var(--proc-ink);
        }

        .proc-title em {
          font-weight: 400;
          color: var(--proc-accent);
        }

        .proc-steps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(24px, 4vw, 56px);
          margin-top: clamp(28px, 6svh, 64px);
        }

        .proc-line {
          position: absolute;
          top: 28px;
          left: 28px;
          right: 0;
          height: 1px;
          transform-origin: 0 0;
          background: linear-gradient(
            to right,
            rgba(169, 199, 155, 0.55),
            rgba(169, 199, 155, 0)
          );
        }

        .proc-step {
          position: relative;
        }

        .proc-icon {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--proc-icon-bg);
          border: 1px solid rgba(169, 199, 155, 0.4);
          color: #cfe3c4;
          margin-bottom: clamp(14px, 2.6svh, 24px);
        }

        .proc-icon-inner {
          display: grid;
          place-items: center;
        }

        .proc-meta {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 8px;
        }

        .proc-meta b {
          font-family: var(--serif);
          font-weight: 400;
          font-size: 15px;
          color: var(--proc-accent);
        }

        .proc-meta i {
          font-style: normal;
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.16em;
          color: rgba(238, 243, 233, 0.55);
        }

        .proc-step h3 {
          font-family: var(--serif);
          font-size: clamp(24px, 2.2vw, 30px);
          font-weight: 400;
          margin: 0 0 10px;
          color: var(--proc-ink);
        }

        .proc-step p {
          font-family: var(--sans);
          font-size: 12.5px;
          line-height: 1.85;
          color: var(--proc-muted);
          margin: 0;
          max-width: 340px;
        }

        @media (max-width: 760px) {
          .proc-slide.gallery-slide {
            padding: clamp(40px, 7svh, 72px) 6% clamp(28px, 5svh, 48px);
          }

          .proc-brand {
            display: none;
          }

          .proc-title {
            font-size: clamp(26px, min(8vw, 4.8svh), 34px);
            letter-spacing: -1px;
          }

          .proc-steps {
            grid-template-columns: 1fr;
            gap: clamp(16px, 3svh, 24px);
            margin-top: clamp(18px, 3.5svh, 28px);
          }

          .proc-line {
            top: 22px;
            left: 22px;
            right: auto;
            bottom: 0;
            width: 1px;
            height: auto;
            background: linear-gradient(
              to bottom,
              rgba(169, 199, 155, 0.55),
              rgba(169, 199, 155, 0)
            );
          }

          .proc-step {
            display: grid;
            grid-template-columns: 44px 1fr;
            column-gap: 16px;
            align-items: start;
          }

          .proc-icon {
            width: 44px;
            height: 44px;
            margin: 0;
          }

          .proc-icon svg {
            width: 20px;
            height: 20px;
          }

          .proc-meta {
            margin-bottom: 4px;
          }

          .proc-step h3 {
            font-size: 20px;
            margin-bottom: 4px;
          }

          .proc-step p {
            font-size: 11.5px;
            line-height: 1.6;
            max-width: none;
          }
        }

        @media (max-width: 760px) and (max-height: 620px) {
          .proc-meta i {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
export function ContactSlide() {
  return (
    <section className="contact-section gallery-slide" id="hubungi" data-gallery-slide>
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
  );
}

export function GalleryFooter() {
  return (
    <footer className="footer gallery-slide" data-gallery-slide>
            <a className="brand footer-brand" href="#jelajahi-top"><span className="brand-mark"><Sprout size={23} strokeWidth={1.6} /></span><span className="brand-copy"><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></a>
            <p>Dirawat dengan hati. Tumbuh bersama alam.</p>
            <div className="footer-meta"><span>© {new Date().getFullYear()} KEBUN ALPUKAT RANCAMAYA</span><a href="#jelajahi-top">KEMBALI KE ATAS <ArrowUpRight size={13} /></a></div>
          </footer>
  );
}

