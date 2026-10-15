"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle, Sprout, CalendarDays, Info } from "lucide-react";

const principles = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Informasi mengikuti musim",
    body: "Waktu panen dan ketersediaan buah bisa berubah. Tanyakan kondisi terbaru sebelum merencanakan pembelian."
  },
  {
    icon: Info,
    number: "02",
    title: "Detail dijelaskan di awal",
    body: "Kami mendorong percakapan terbuka tentang varietas, ukuran, jumlah, dan kondisi buah yang tersedia."
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Bertanya sebelum memilih",
    body: "Belum yakin buah mana yang sesuai? Hubungi Kebun Alpukat Rancamaya untuk mendiskusikan kebutuhan Anda."
  }
];

export default function TrustSection() {
  return (
    <section className="trust-section gallery-slide" id="kepercayaan" data-gallery-slide aria-labelledby="trust-title">
      <div className="trust-inner">
        <div className="trust-heading">
          <span className="section-index">PANDUAN MEMILIH · KEBUN ALPUKAT RANCAMAYA</span>
          <h2 id="trust-title">Kepercayaan tumbuh<br /><em>dari keterbukaan.</em></h2>
          <p>Buah adalah hasil dari proses yang tidak selalu sama setiap musim. Karena itu, informasi yang jelas dan komunikasi langsung menjadi bagian penting sebelum Anda memilih.</p>
          <a className="trust-contact" href="https://wa.me/?text=Halo%20Kebun%20Alpukat%20Rancamaya%2C%20saya%20ingin%20bertanya%20tentang%20ketersediaan%20buah." target="_blank" rel="noreferrer">
            Tanyakan ketersediaan <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="profile-facts" aria-label="Ringkasan profil Kebun Alpukat Rancamaya">
          <div><span>FOKUS HASIL KEBUN</span><strong>Alpukat &amp; durian</strong></div>
          <div><span>INFORMASI PANEN</span><strong>Dikonfirmasi per musim</strong></div>
          <div><span>PRINSIP KAMI</span><strong>Terbuka dan apa adanya</strong></div>
        </div>
        <div className="trust-principles">
          {principles.map(({ icon: Icon, number, title, body }) => (
            <article className="trust-principle" key={number}>
              <div className="trust-principle-top">
                <span className="trust-icon"><Icon size={20} strokeWidth={1.5} /></span>
                <span className="trust-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="trust-note">
          <span className="trust-note-icon"><Sprout size={17} /></span>
          <p><strong>Catatan untuk calon pembeli</strong> — varietas, waktu panen, jumlah, dan metode pengiriman perlu dikonfirmasi sesuai kondisi aktual kebun. Kami tidak ingin menjanjikan sesuatu sebelum informasinya pasti.</p>
        </div>
      </div>
      <style jsx>{`
        .trust-section{background:#edf2e8;padding:88px 10.1% 84px;color:#202c22}
        .trust-inner{max-width:1240px;margin:0 auto}
        .trust-heading{display:grid;grid-template-columns:1fr 1fr;column-gap:55px;align-items:end}
        .section-index{grid-column:1/-1;font-family:var(--sans);font-size:9px;letter-spacing:.2em;color:#6f7e68;margin-bottom:23px}
        h2{font-family:var(--serif);font-size:clamp(38px,4.1vw,58px);line-height:1.14;font-weight:400;letter-spacing:-1.7px;margin:0}
        h2 em{font-weight:400;color:#71866a}
        .trust-heading>p{font-family:var(--sans);font-size:13px;line-height:1.95;color:#697063;margin:0 0 4px;max-width:440px}
        .trust-contact{grid-column:1/-1;display:inline-flex;align-items:center;gap:12px;width:max-content;margin-top:25px;padding-bottom:8px;border-bottom:1px solid #9aab91;font-family:var(--sans);font-size:11px;font-weight:600;color:#173d2d}
        .trust-contact svg{transition:transform .2s}.trust-contact:hover svg{transform:translate(2px,-2px)}
        .profile-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:38px;padding:20px 0;border-top:1px solid #d7dbd0;border-bottom:1px solid #d7dbd0}
        .profile-facts>div{display:flex;flex-direction:column;gap:8px}
        .profile-facts span{font-family:var(--sans);font-size:8px;letter-spacing:.16em;color:#818a78}
        .profile-facts strong{font-family:var(--serif);font-size:18px;font-weight:400;color:#263d2b}
        .trust-principles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:46px}
        .trust-principle{border-top:1px solid #cfd5c8;padding:22px 10px 0 0}
        .trust-principle-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}
        .trust-icon{width:43px;height:43px;display:grid;place-items:center;border:1px solid #ccd5c5;border-radius:50%;color:#587653}
        .trust-number{font-family:var(--serif);font-size:15px;color:#899482}
        .trust-principle h3{font-family:var(--serif);font-size:22px;font-weight:400;margin:0 0 11px}
        .trust-principle p{font-family:var(--sans);font-size:11px;line-height:1.9;color:#737b6d;margin:0;max-width:290px}
        .trust-note{display:flex;gap:13px;align-items:flex-start;background:#e2ebdc;margin-top:45px;padding:20px 22px}
        .trust-note-icon{flex-shrink:0;color:#587653;padding-top:2px}
        .trust-note p{font-family:var(--sans);font-size:10px;line-height:1.9;color:#697063;margin:0}
        .trust-note strong{color:#263d2b;font-weight:600}
        @media(max-width:760px){.trust-section{padding:64px 6% 66px}.trust-heading{grid-template-columns:1fr;gap:18px}.section-index{margin-bottom:0}.trust-heading>p{font-size:12px;max-width:500px}.trust-contact{margin-top:2px}.profile-facts{grid-template-columns:1fr;gap:15px;margin-top:30px;padding:18px 0}.profile-facts>div{gap:5px}.profile-facts strong{font-size:17px}.trust-principles{grid-template-columns:1fr;gap:24px;margin-top:35px}.trust-principle{padding-top:18px}.trust-principle-top{margin-bottom:17px}.trust-principle h3{font-size:21px}.trust-principle p{font-size:11px;max-width:440px}.trust-note{margin-top:33px;padding:17px 15px}}
        @media(prefers-reduced-motion:reduce){.trust-contact svg{transition:none}}
      `}</style>
    </section>
  );
}
