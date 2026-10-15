import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, Sprout } from "lucide-react";

const varieties = [
  {
    slug: "hass", name: "Alpukat Hass", short: "Hass", number: "01",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1500&q=85",
    intro: "Varietas alpukat yang dikenal luas di pasar internasional karena tekstur dagingnya yang lembut dan kaya.",
    note: "Hass umumnya berbentuk oval, memiliki kulit bertekstur agak kasar yang berubah dari hijau menjadi ungu gelap hingga kehitaman saat matang. Dagingnya berwarna hijau pucat hingga kekuningan dengan tekstur creamy dan rasa khas. Karakter tersebut membuat Hass banyak digunakan untuk sajian segar, salad, dan olahan seperti guacamole. Ciri dan mutu buah tetap dipengaruhi kematangan, kondisi tumbuh, serta penanganan pascapanen.",
    sourceName: "California Avocado Commission — panduan varietas Hass",
    sourceUrl: "https://californiaavocado.com/wp-content/uploads/2020/12/2020-CAC-Foodservice-Culinary-Education-Module-Lesson-2.pdf"
  },
  {
    slug: "miki", name: "Alpukat Miki", short: "Miki", number: "02",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1500&q=85",
    intro: "Varietas lokal yang menarik untuk dibahas dalam pengembangan alpukat tropis Indonesia.",
    note: "Dalam laporan panen BRMP Jambi pada April 2026, Miki digambarkan sebagai varietas berumur genjah. Buah yang dipanen di lokasi tersebut berbobot sekitar 400–600 gram, berdaging tebal berwarna kuning cerah, bertekstur lembut dan pulen, dengan cita rasa gurih sedikit manis. Laporan itu juga mencatat hasil per pohon berbeda menurut umur dan perawatan. Angka tersebut adalah hasil pengamatan di lokasi tersebut, bukan jaminan produktivitas untuk semua kebun.",
    sourceName: "BRMP Jambi, 17 April 2026 — panen alpukat Miki",
    sourceUrl: "https://jambi.brmp.pertanian.go.id/berita/sukses-panen-alpukat-miki-bukti-keseriusan-ip2mp-brmp-jambi-kembangkan-hortikultura"
  },
  {
    slug: "aligator", name: "Alpukat Aligator", short: "Aligator", number: "03",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0b2f53?auto=format&fit=crop&w=1500&q=85",
    intro: "Nama varietas yang sering dikaitkan dengan buah berukuran besar dan bentuk memanjang.",
    note: "Publikasi Jogja Benih milik Pemerintah Daerah DI Yogyakarta menyebut ciri Aligator berupa buah memanjang, kulit hijau, dan ukuran yang dapat sangat besar. Bobot aktual buah di lapangan bisa berbeda menurut bahan tanam, umur pohon, kondisi lingkungan, dan teknik budidaya. Untuk menilai potensi komersialnya, ukuran perlu diimbangi dengan mutu daging, tingkat kematangan, kerusakan saat pengiriman, dan permintaan pembeli.",
    sourceName: "Jogja Benih — jenis alpukat unggul",
    sourceUrl: "https://jogjabenih.jogjaprov.go.id/read/cc229c031526992d8ed99a3cc64fb0b86b0a0a33f4abf231057967662f9d5ea53300"
  },
  {
    slug: "kendil", name: "Alpukat Kendil", short: "Kendil", number: "04",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=1500&q=85",
    intro: "Varietas alpukat lokal yang tercatat dalam sumber perbenihan resmi Kementerian Pertanian.",
    note: "Kendil tercantum dalam daftar varietas alpukat yang dikelola sebagai sumber benih oleh BRMP Buah Tropika. Buku Lapang Budidaya Alpukat dari Direktorat Buah dan Florikultura juga mencatat Kendil dengan asal Boja, Kendal, dan rentang bobot buah sekitar 900–1.150 gram. Rentang tersebut merupakan data referensi budidaya, bukan ukuran yang pasti diperoleh pada setiap panen.",
    sourceName: "BRMP — daftar sumber benih; Buku Lapang Budidaya Alpukat (2021)",
    sourceUrl: "https://repository.pertanian.go.id/items/3e63baa4-aee6-4230-8383-c92c80212de1"
  },
  {
    slug: "wina", name: "Alpukat Wina", short: "Wina", number: "05",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1500&q=85",
    intro: "Varietas lokal yang juga dikenal dengan nama Wina Bandungan dalam sumber perbenihan pemerintah.",
    note: "Wina Bandungan tercantum dalam daftar sumber benih alpukat BRMP Buah Tropika. Buku Lapang Budidaya Alpukat mencatat varietas Wina dikembangkan di wilayah Bandungan, Kabupaten Semarang, dan melaporkan buah berukuran besar dengan daging tebal. Karakter yang muncul di kebun dapat berbeda, sehingga pemilihan varietas sebaiknya disertai informasi asal bibit dan pengamatan hasil di lokasi tanam.",
    sourceName: "BRMP — daftar sumber benih; Buku Lapang Budidaya Alpukat (2021)",
    sourceUrl: "https://repository.pertanian.go.id/items/3e63baa4-aee6-4230-8383-c92c80212de1"
  },
  {
    slug: "pluwang", name: "Alpukat Pluwang", short: "Pluwang", number: "06",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1500&q=85",
    intro: "Varietas yang sering dipromosikan karena ukuran buahnya, tetapi klaim hasil perlu ditimbang dengan data kebun.",
    note: "Informasi populer tentang Pluwang sering menonjolkan ukuran buah dan daging yang tebal. Namun, sumber teknis pemerintah yang kami temukan belum cukup untuk menetapkan angka baku bobot, produktivitas, atau harga jual varietas ini. Karena itu, halaman ini tidak menjanjikan hasil tertentu. Untuk keputusan usaha, minta identitas bibit, catatan panen dari penjual, serta bukti performa pada kondisi agroklimat yang serupa.",
    sourceName: "Jogja Benih — artikel pengenalan varietas (referensi umum; bukan standar teknis)",
    sourceUrl: "https://jogjabenih.jogjaprov.go.id/read/cc229c031526992d8ed99a3cc64fb0b86b0a0a33f4abf231057967662f9d5ea53300"
  }
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
    description: `${item.name}: informasi karakter varietas, pemanfaatan, dan referensi sumber. Ketersediaan di Kebun Alpukat Rancamaya perlu dikonfirmasi.`,
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
          <p className="variety-source">Referensi: <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceName} <ArrowUpRight size={13} /></a></p>
          <div className="variety-notice"><Sprout size={19} /><p><strong>Catatan editorial</strong><br />Konten ini menjelaskan karakter varietas berdasarkan referensi yang ditautkan, bukan bukti bahwa varietas tersebut ditanam atau tersedia di Kebun Alpukat Rancamaya. Foto ilustrasi, ketersediaan, dan hasil panen kebun perlu dikonfirmasi secara terpisah.</p></div>
        </div>
      </section>
      <section className="variety-economic-link"><div><span className="variety-kicker">DARI KEBUN KE PASAR</span><h2>Pelajari potensi ekonomi <em>alpukat Indonesia.</em></h2><p>Lihat data produksi nasional terbaru, peluang nilai tambah, dan hal-hal yang perlu dihitung sebelum memulai usaha.</p></div><Link className="variety-button" href="/potensi-ekonomi-alpukat">Baca analisis ekonomi <ArrowRight size={16} /></Link></section>
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
        .variety-body{font-size:13px;line-height:1.95;color:#687364;max-width:570px}.variety-source{font-size:11px;line-height:1.8;color:#71806b;margin-top:20px}.variety-source a{display:inline-flex;align-items:center;gap:4px;text-decoration:underline;text-underline-offset:3px;color:#31583c}.variety-economic-link{display:flex;justify-content:space-between;align-items:center;gap:30px;padding:65px 12%;background:#e1eadb}.variety-economic-link h2{font:400 clamp(30px,4vw,44px)/1.15 var(--serif);margin:13px 0}.variety-economic-link h2 em{color:#70886a;font-weight:400}.variety-economic-link p{font-size:12px;line-height:1.8;max-width:530px;color:#687364}.variety-economic-link .variety-button{flex-shrink:0;background:#183b2b;color:white}
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
        @media(max-width:760px){.variety-topline{padding:0 5%;font-size:7px}.variety-topline>a{font-size:7px}.variety-header{height:72px;padding:0 5%}.variety-brand strong{font-size:17px}.variety-brand-mark{width:34px;height:34px}.variety-header-label{font-size:7px}.variety-hero{height:650px;min-height:560px;max-height:760px}.variety-hero-image{background-position:58% center}.variety-hero-content{margin-left:7%;width:86%;padding:50px 0}.variety-hero h1{font-size:clamp(43px,10vw,64px)}.variety-hero-content>p{font-size:12px}.variety-profile{grid-template-columns:1fr;gap:22px;padding:75px 7% 80px}.variety-profile h2,.variety-more h2{font-size:clamp(37px,9vw,49px)}.variety-contact{padding:70px 7%}.variety-economic-link{padding:55px 7%;align-items:flex-start;flex-direction:column;gap:8px}.variety-more{padding:70px 6%}.variety-more-grid{grid-template-columns:1fr}.variety-more-card{min-height:76px}.variety-footer{align-items:flex-start;flex-direction:column;padding:25px 6%}.variety-footer>span{line-height:1.7}}
        @media(prefers-reduced-motion:reduce){.variety-button,.variety-more-card{transition:none}}
      `}</style>
    </main>
  );
}
