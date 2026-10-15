import { ArrowRight, ArrowUpRight, Sprout, Leaf, Sun, MessageCircle, TreeDeciduous } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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

export function ProcessSlide() {
  return (
    <section className="process section-pad gallery-slide" id="proses" data-gallery-slide>
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

