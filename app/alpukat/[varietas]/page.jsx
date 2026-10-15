"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, Sprout } from "lucide-react";

const varieties = [
  { slug: "hass", name: "Alpukat Hass", short: "Hass", number: "01", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Hass sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Profil, karakter buah, dan informasi ketersediaan varietas ini dapat dilengkapi setelah data kebun dikonfirmasi." },
  { slug: "miki", name: "Alpukat Miki", short: "Miki", number: "02", image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Miki sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Detail karakter buah, masa panen, dan ketersediaan akan disesuaikan dengan informasi kebun yang terverifikasi." },
  { slug: "aligator", name: "Alpukat Aligator", short: "Aligator", number: "03", image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0b2f53?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Aligator sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Informasi ukuran, karakter buah, dan status penanaman perlu dikonfirmasi sebelum dipakai sebagai klaim komersial." },
  { slug: "kendil", name: "Alpukat Kendil", short: "Kendil", number: "04", image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Kendil sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Profil ini masih berupa dummy dan dapat diperbarui dengan foto serta spesifikasi asli dari kebun." },
  { slug: "wina", name: "Alpukat Wina", short: "Wina", number: "05", image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Wina sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Deskripsi varietas dan informasi ketersediaan akan dilengkapi setelah diverifikasi oleh pengelola kebun." },
  { slug: "pluwang", name: "Alpukat Pluwang", short: "Pluwang", number: "06", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1500&q=85", intro: "Halaman pengenalan varietas Pluwang sebagai contoh katalog varietas alpukat Kebun Alpukat Rancamaya.", note: "Halaman ini disiapkan sebagai struktur awal; foto, detail tanaman, dan ketersediaan perlu diganti dengan data aktual." }
];

export function generateStaticParams() {
  return varieties.map(({ slug }) => ({ varietas: slug }));
}

export async function generateMetadata({ params }) {
  const { varietas } = await params;
  const item = varieties.find((entry) => entry.slug === varietas);
  if (!item) return { title: "Varietas Alpukat | Kebun Alpukat Rancamaya" };
  return {
    title: `${item.name} | Kebun Alpukat Rancamaya`,
    description: `Kenali ${item.name} melalui halaman katalog Kebun Alpukat Rancamaya. Informasi varietas dan ketersediaan masih dalam tahap konfirmasi.`,
    alternates: { canonical: `/alpukat/${item.slug}` },
    openGraph: { title: `${item.name} | Kebun Alpukat Rancamaya`, description: `Profil ${item.name} di katalog Kebun Alpukat Rancamaya.`, type: "website", locale: "id_ID" }
  };
}

export default async function VarietyPage({ params }) {
  const { varietas } = await params;
  const item = varieties.find((entry) => entry.slug === varietas);
  if (!item) return <main className="variety-page"><div className="variety-shell"><p>Varietas tidak ditemukan.</p><Link href="/#hasil-kebun">Kembali ke hasil kebun</Link></div></main>;
  const otherVarieties = varieties.filter((entry) => entry.slug !== item.slug);

  return (
    <main className="variety-page">
      <div className="variety-topline"><span className="variety-dot" /> KATALOG VARIETAS · KEBUN ALPUKAT RANCAMAYA <Link href="/#hasil-kebun">Kembali ke kebun <ArrowUpRight size={14} /></Link></div>
      <header className="variety-header">
        <Link className="variety-brand" href="/"><span className="variety-brand-mark"><Sprout size={22} /></span><span><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></Link>
        <span className="variety-header-label">VARIETAS {item.number} / 06</span>
      </header>
      <section className="variety-hero">
        <div className="variety-hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(15,43,29,.82),rgba(15,43,29,.28)),url("${item.image}")` }} />
        <div className="variety-hero-content">
          <span className="variety-eyebrow"><Leaf size={14} /> PROFIL VARIETAS ALPUKAT</span>
          <h1>{item.name}<br /><em>Tumbuh bersama alam.</em></h1>
          <p>{item.intro}</p>
          <a className="variety-button" href="#profil">Jelajahi profil <ArrowRight size={16} /></a>
        </div>
        <span className="variety-hero-index">{item.number} — KATALOG KEBUN</span>
      </section>
      <section className="variety-profile" id="profil">
        <div className="variety-profile-label"><span>01 / TENTANG VARIETAS</span><Leaf size={20} /></div>
        <div className="variety-profile-main">
          <p className="variety-kicker">MENGENAL LEBIH DEKAT</p>
          <h2>Setiap varietas punya<br /><em>cerita pertumbuhannya.</em></h2>
          <p className="variety-body">{item.note}</p>
          <div className="variety-notice"><Sprout size={19} /><p><strong>Catatan katalog dummy</strong><br />Nama varietas pada halaman ini merupakan contoh untuk pengembangan website. Penanaman, foto, karakter, musim panen, dan ketersediaan belum dikonfirmasi oleh pengelola Kebun Alpukat Rancamaya.</p></div>
        </div>
      </section>
      <section className="variety-contact">
        <span className="variety-kicker">MARI TERHUBUNG</span>
        <h2>Ingin tahu lebih lanjut<br /><em>tentang hasil kebun?</em></h2>
        <p>Hubungi pengelola untuk menanyakan informasi terbaru. Detail kontak resmi bisa ditambahkan setelah dikonfirmasi.</p>
        <a className="variety-button" href={`https://wa.me/?text=${encodeURIComponent(`Halo Kebun Alpukat Rancamaya, saya ingin bertanya tentang varietas ${item.short}.`)}`}>Tanyakan varietas ini <ArrowUpRight size={16} /></a>
      </section>
      <section className="variety-more">
        <div className="variety-more-heading"><span className="variety-kicker">KATALOG ALPUKAT</span><h2>Jelajahi varietas <em>lainnya.</em></h2></div>
        <div className="variety-more-grid">{otherVarieties.map((other) => <Link href={`/alpukat/${other.slug}`} className="variety-more-card" key={other.slug}><span>{other.number}</span><strong>{other.name}</strong><ArrowUpRight size={17} /></Link>)}</div>
      </section>
      <footer className="variety-footer"><Link className="variety-brand" href="/"><span className="variety-brand-mark"><Sprout size={22} /></span><span><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></Link><span>DIRAWAT DENGAN HATI. TUMBUH BERSAMA ALAM.</span><Link href="/#hasil-kebun">KEMBALI KE HASIL KEBUN ↑</Link></footer>
      <style jsx global>{`
        .variety-page{background:#edf2e8;color:#203326;min-height:100vh;font-family:var(--sans)}
        .variety-topline{height:34px;padding:0 5.2%;display:flex;align-items:center;gap:9px;background:#183b2b;color:#dce7d5;font-size:8px;letter-spacing:.13em}
        .variety-dot{width:5px;height:5px;border-radius:50%;background:#b7ce9f}
        .variety-topline>a{margin-left:auto;display:flex;align-items:center;gap:5px;letter-spacing:.04em}
        .variety-header{height:82px;padding:0 7%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #20332618}
        .variety-brand{display:flex;align-items:center;gap:10px}
        .variety-brand-mark{width:38px;height:38px;border:1px solid #b6c9ae;border-radius:50%;display:grid;place-items:center;color:#244b35}
        .variety-brand>span:last-child{display:flex;flex-direction:column;gap:4px}
        .variety-brand strong{font:500 20px/1 var(--serif);letter-spacing:-.4px}
        .variety-brand small{font-size:8px;letter-spacing:.2em;color:#74806f}
        .variety-header-label,.variety-kicker{font-size:8px;letter-spacing:.18em;color:#6f8068}
        .variety-hero{min-height:540px;height:min(68vw,680px);max-height:700px;position:relative;isolation:isolate;display:flex;align-items:center;color:#fff;overflow:hidden}
        .variety-hero-image{position:absolute;inset:0;z-index:-1;background-size:cover;background-position:center 50%;transform:scale(1.01)}
        .variety-hero-content{margin-left:10%;width:min(690px,78%);padding:70px 0}
        .variety-eyebrow{display:flex;align-items:center;gap:10px;font-size:9px;letter-spacing:.18em;color:#d7e4d0}
        .variety-hero h1{font:400 clamp(46px,7vw,82px)/1.08 var(--serif);letter-spacing:-1.8px;margin:28px 0 20px}
        .variety-hero h1 em,.variety-profile h2 em,.variety-contact h2 em,.variety-more h2 em{font-weight:400;color:#c4d6b8}
        .variety-hero-content>p{max-width:440px;font-size:13px;line-height:1.9;color:#e1e9dd}
        .variety-button{display:inline-flex;align-items:center;gap:14px;margin-top:20px;padding:15px 18px;background:#f5f7f0;color:#244b35;font-size:11px;font-weight:600;transition:transform .2s,background .2s}
        .variety-button:hover{transform:translateY(-2px);background:#dce7d5}
        .variety-hero-index{position:absolute;right:5.2%;bottom:26px;font-size:8px;letter-spacing:.16em;color:#e0e8db}
        .variety-profile{display:grid;grid-template-columns:28% 1fr;gap:35px;padding:105px 12% 115px}
        .variety-profile-label{display:flex;align-items:flex-start;gap:12px;font-size:8px;letter-spacing:.17em;color:#72806c}
        .variety-profile-main{max-width:670px}
        .variety-profile h2,.variety-more h2{font:400 clamp(36px,4.6vw,58px)/1.17 var(--serif);letter-spacing:-1px;margin:19px 0 24px}
        .variety-profile h2 em,.variety-more h2 em{color:#70886a}
        .variety-body{font-size:13px;line-height:1.95;color:#687364;max-width:570px}
        .variety-notice{display:flex;align-items:flex-start;gap:14px;padding:20px;margin-top:30px;background:#e1eadb;border:1px solid #d0ddc9;color:#426047}
        .variety-notice svg{flex-shrink:0;margin-top:2px}
        .variety-notice p{font-size:11px;line-height:1.8;margin:0;color:#52654f}
        .variety-notice strong{color:#244b35}
        .variety-contact{padding:83px 12%;background:#183b2b;color:white}
        .variety-contact .variety-kicker{color:#c2d4b7}
        .variety-contact h2{font:400 clamp(38px,4.8vw,60px)/1.13 var(--serif);margin:22px 0}
        .variety-contact h2 em{color:#c2d4b7}
        .variety-contact>p{max-width:480px;font-size:12px;line-height:1.9;color:#d5e0d1}
        .variety-more{padding:85px 10% 95px}
        .variety-more-heading{margin-bottom:32px}
        .variety-more h2{margin:13px 0}
        .variety-more-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid #cbd7c5;border-left:1px solid #cbd7c5}
        .variety-more-card{min-height:95px;padding:20px;display:grid;grid-template-columns:25px 1fr 18px;align-items:center;gap:10px;border-right:1px solid #cbd7c5;border-bottom:1px solid #cbd7c5;transition:background .2s}
        .variety-more-card:hover{background:#e1eadb}
        .variety-more-card>span{font-size:9px;color:#7c8b75}
        .variety-more-card strong{font:400 18px var(--serif)}
        .variety-more-card svg{color:#71866a}
        .variety-footer{padding:27px 6%;display:flex;align-items:center;justify-content:space-between;gap:20px;border-top:1px solid #d3ddcd}
        .variety-footer>span,.variety-footer>a:last-child{font-size:8px;letter-spacing:.1em;color:#788472}
        @media(max-width:760px){.variety-topline{padding:0 5%;font-size:7px}.variety-topline>a{font-size:7px}.variety-header{height:72px;padding:0 5%}.variety-brand strong{font-size:17px}.variety-brand-mark{width:34px;height:34px}.variety-header-label{font-size:7px}.variety-hero{height:650px;min-height:560px;max-height:760px}.variety-hero-image{background-position:58% center}.variety-hero-content{margin-left:7%;width:86%;padding:50px 0}.variety-hero h1{font-size:clamp(43px,10vw,64px)}.variety-hero-content>p{font-size:12px}.variety-profile{grid-template-columns:1fr;gap:22px;padding:75px 7% 80px}.variety-profile h2,.variety-more h2{font-size:clamp(37px,9vw,49px)}.variety-contact{padding:70px 7%}.variety-more{padding:70px 6%}.variety-more-grid{grid-template-columns:1fr}.variety-more-card{min-height:76px}.variety-footer{align-items:flex-start;flex-direction:column;padding:25px 6%}.variety-footer>span{line-height:1.7}}
        @media(prefers-reduced-motion:reduce){.variety-button,.variety-more-card{transition:none}}
      `}</style>
    </main>
  );
}
