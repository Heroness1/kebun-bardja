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

export function ProcessSlide() {
  const reduce = useReducedMotion();
  const rise = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.75, ease: PROCESS_EASE },
    },
  };
  const group = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      className="proc-slide gallery-slide"
      id="proses"
      data-gallery-slide
      aria-labelledby="proses-title"
    >
      <div className="proc-photo-panel">
        <img
          className="proc-photo"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=88"
          alt="Hamparan kebun hijau di bawah cahaya matahari"
          loading="lazy"
        />
        <div className="proc-photo-shade" />
        <motion.div
          className="proc-photo-frame"
          aria-hidden="true"
          animate={reduce ? undefined : { rotate: [0, 1.2, 0, -1.2, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="proc-photo-stamp" variants={rise}>
          <Sprout size={20} strokeWidth={1.25} />
          <span>DITUMBUHKAN DENGAN SABAR</span>
        </motion.div>
        <div className="proc-photo-caption">
          <span>KEBUN ALPUKAT RANCAMAYA</span>
          <span>MALANGBONG · JAWA BARAT</span>
        </div>
      </div>

      <div className="proc-content">
        <motion.div
          className="proc-heading"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.span className="proc-index" variants={rise}>
            CERITA DI BALIK PERTUMBUHAN
          </motion.span>
          <motion.h2 id="proses-title" variants={rise}>
            Proses yang
            <br />
            <em>punya arti.</em>
          </motion.h2>
          <motion.p variants={rise}>
            Buah yang kita nikmati hanyalah satu bagian dari cerita. Ada
            perhatian, waktu, dan kepedulian yang menyertai perjalanan sebuah
            kebun.
          </motion.p>
        </motion.div>

        <motion.div
          className="proc-steps"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.span
            className="proc-line"
            aria-hidden="true"
            initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: reduce ? 0 : 1.3, ease: PROCESS_EASE }}
          />
          {processSteps.map(({ number, title, subtitle, description, icon: Icon, idle }) => (
            <motion.article
              className="proc-step"
              key={number}
              variants={rise}
              whileHover={reduce ? undefined : { y: -3 }}
            >
              <motion.span className="proc-icon" variants={rise}>
                <motion.span
                  className="proc-icon-inner"
                  style={{ transformOrigin: idle.origin }}
                  animate={reduce ? undefined : { rotate: idle.rotate }}
                  transition={{
                    duration: idle.duration,
                    repeat: Infinity,
                    ease: idle.linear ? "linear" : "easeInOut",
                  }}
                >
                  <Icon size={21} strokeWidth={1.45} />
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
              <span className="proc-step-mark" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="proc-footer" variants={rise}>
          <span className="proc-footer-line" />
          <span>DIRAWAT DENGAN HATI · TUMBUH BERSAMA ALAM</span>
          <Sprout size={16} strokeWidth={1.35} />
        </motion.div>
      </div>

      <style jsx global>{`
        .proc-slide.gallery-slide#proses {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(28px, 5vw, 76px);
          align-items: stretch;
          height: 100svh;
          min-height: 620px;
          padding: clamp(38px, 6vh, 68px) 8.2%;
          overflow: hidden;
          background: #f1f2e9;
          color: #203b2b;
        }
        .proc-photo-panel {
          position: relative;
          align-self: stretch;
          min-height: 0;
          overflow: hidden;
          isolation: isolate;
          background: #718568;
        }
        .proc-photo {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.025);
          animation: proc-photo-drift 24s ease-in-out infinite alternate;
        }
        .proc-photo-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(180deg, #11281c18 25%, #11281ca8 100%);
        }
        .proc-photo-frame {
          position: absolute;
          inset: 16px;
          border: 1px solid #f5f5e78c;
          pointer-events: none;
        }
        .proc-photo-frame::before,
        .proc-photo-frame::after {
          content: "";
          position: absolute;
          width: 35px;
          height: 35px;
          border-color: #e0e9cb;
          border-style: solid;
        }
        .proc-photo-frame::before {
          top: -1px;
          left: -1px;
          border-width: 2px 0 0 2px;
        }
        .proc-photo-frame::after {
          right: -1px;
          bottom: -1px;
          border-width: 0 2px 2px 0;
        }
        .proc-photo-stamp {
          position: absolute;
          top: 34px;
          left: 34px;
          display: flex;
          align-items: center;
          gap: 9px;
          max-width: calc(100% - 68px);
          padding: 10px 12px;
          background: #f5f5e9e8;
          color: #274a32;
          font: 600 8px/1.4 var(--sans);
          letter-spacing: .12em;
        }
        .proc-photo-caption {
          position: absolute;
          right: 30px;
          bottom: 29px;
          left: 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px 16px;
          color: #f4f4e8;
          font: 500 8px/1.5 var(--sans);
          letter-spacing: .14em;
        }
        .proc-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 6px 0;
        }
        .proc-index {
          display: block;
          color: #6a8061;
          font: 600 9px/1.6 var(--sans);
          letter-spacing: .18em;
        }
        .proc-heading h2 {
          margin: clamp(12px, 2vh, 20px) 0 15px;
          color: #203b2b;
          font: 400 clamp(36px, 4vw, 55px)/1.08 var(--serif);
          letter-spacing: -.055em;
        }
        .proc-heading h2 em {
          color: #69845d;
          font-weight: 400;
        }
        .proc-heading > p {
          max-width: 430px;
          margin: 0;
          color: #596b57;
          font: 400 12px/1.85 var(--sans);
        }
        .proc-steps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(12px, 1.8vw, 24px);
          margin-top: clamp(26px, 4vh, 42px);
        }
        .proc-line {
          position: absolute;
          top: 23px;
          left: 23px;
          right: 0;
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, #91aa7b9c, #91aa7b00);
          pointer-events: none;
        }
        .proc-step { position: relative; min-width: 0; }
        .proc-icon {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          margin-bottom: 16px;
          border: 1px solid #a5b99a;
          border-radius: 50%;
          background: #e4eadc;
          color: #426443;
        }
        .proc-icon-inner { display: grid; place-items: center; }
        .proc-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 5px 8px;
          margin-bottom: 7px;
        }
        .proc-meta b {
          color: #718866;
          font: 400 13px var(--serif);
        }
        .proc-meta i {
          color: #7d8976;
          font: normal 7px/1.5 var(--sans);
          letter-spacing: .1em;
        }
        .proc-copy h3 {
          margin: 0 0 8px;
          color: #203b2b;
          font: 400 clamp(20px, 2vw, 26px)/1.2 var(--serif);
        }
        .proc-copy p {
          margin: 0;
          color: #5c6a58;
          font: 400 10.5px/1.75 var(--sans);
        }
        .proc-step-mark {
          display: inline-block;
          margin-top: 12px;
          color: #839779;
          font-size: 15px;
          transition: transform .25s ease;
        }
        .proc-step:hover .proc-step-mark { transform: translate(3px, -3px); }
        .proc-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: clamp(22px, 3.5vh, 34px);
          color: #6a7b62;
          font: 600 8px/1.6 var(--sans);
          letter-spacing: .11em;
        }
        .proc-footer-line { width: 28px; height: 1px; background: #9aaf8b; }
        @keyframes proc-photo-drift {
          from { transform: scale(1.025) translate3d(-.3%, 0, 0); }
          to { transform: scale(1.08) translate3d(.3%, -0.5%, 0); }
        }
        @media (max-width: 900px) and (min-width: 761px) {
          .proc-slide.gallery-slide#proses {
            gap: 28px;
            padding-right: 6%;
            padding-left: 6%;
          }
          .proc-heading h2 { font-size: clamp(34px, 4.1vw, 43px); }
          .proc-steps { gap: 12px; }
          .proc-copy p { font-size: 10px; }
          .proc-meta i { font-size: 6px; }
        }
        @media (max-width: 760px) {
          .proc-slide.gallery-slide#proses {
            display: flex;
            height: auto;
            min-height: 100svh;
            padding: 34px 6% 82px;
            gap: 26px;
            overflow: visible;
          }
          .proc-photo-panel {
            flex: none;
            width: 100%;
            height: clamp(220px, 34svh, 310px);
          }
          .proc-photo-frame { inset: 11px; }
          .proc-photo-stamp {
            top: 22px;
            left: 22px;
            gap: 7px;
            padding: 8px 9px;
            font-size: 7px;
          }
          .proc-photo-caption {
            right: 20px;
            bottom: 20px;
            left: 20px;
            font-size: 7px;
          }
          .proc-content { padding: 0; }
          .proc-heading h2 {
            margin: 10px 0 12px;
            font-size: clamp(35px, 9.4vw, 46px);
          }
          .proc-heading > p { font-size: 12px; }
          .proc-steps {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 23px;
          }
          .proc-line {
            top: 22px;
            left: 22px;
            right: auto;
            bottom: 15px;
            width: 1px;
            height: auto;
            transform-origin: top center;
            background: linear-gradient(180deg, #91aa7b9c, #91aa7b00);
          }
          .proc-step {
            display: grid;
            grid-template-columns: 44px minmax(0, 1fr) 14px;
            align-items: start;
            gap: 13px;
          }
          .proc-icon {
            width: 44px;
            height: 44px;
            margin: 0;
          }
          .proc-meta { margin-bottom: 4px; }
          .proc-copy h3 { margin-bottom: 4px; font-size: 21px; }
          .proc-copy p { font-size: 11px; line-height: 1.65; }
          .proc-step-mark { margin-top: 2px; }
          .proc-footer { margin-top: 22px; font-size: 7px; }
        }
        @media (max-width: 760px) and (max-height: 650px) {
          .proc-photo-panel { height: 205px; }
          .proc-slide.gallery-slide#proses { padding-top: 28px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .proc-photo { animation: none; transform: none; }
          .proc-step-mark { transition: none; }
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

