import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Boxes, Leaf, Sprout, TrendingUp } from "lucide-react";

const sources = [
  { name: "Badan Pusat Statistik — Produksi buah-buahan dan sayuran tahunan, 2025", url: "https://www.bps.go.id/id/statistics-table/3/WXpSVU5uUTBOSEl5WVhGQmVESTVSVnBSVlhWeVVUMDkjMw%3D%3D/produksi-buah-buahan-dan-sayuran-tahunan-menurut-jenis-tanaman--2023.html" },
  { name: "BPS — Statistik Hortikultura 2024", url: "https://www.bps.go.id/id/publication/2025/06/10/aab67e4d36ea6d7bed30d79f/statistik-" },
  { name: "Kementerian Pertanian — Buku Lapang Budidaya Alpukat (2021)", url: "https://repository.pertanian.go.id/items/3e63baa4-aee6-4230-8383-c92c80212de1" },
  { name: "Kementerian Pertanian — Penerapan SNI dan Potensi Usaha Alpukat (2023)", url: "https://repository.pertanian.go.id/items/1bd694c1-0f0a-48d7-bd10-7f9e115e32e3" }
];

export const metadata = {
  title: "Potensi Ekonomi Alpukat Indonesia | Kebun Alpukat Rancamaya",
  description: "Pelajari data produksi alpukat Indonesia terbaru, peluang nilai tambah, rantai pasok, dan faktor yang menentukan kelayakan usaha alpukat.",
  alternates: { canonical: "/potensi-ekonomi-alpukat" },
  openGraph: {
    title: "Potensi Ekonomi Alpukat Indonesia",
    description: "Data produksi nasional dan peluang agribisnis alpukat berdasarkan sumber pemerintah.",
    type: "article",
    locale: "id_ID"
  }
};

export default function PotensiEkonomiAlpukatPage() {
  return (
    <main className="economy-page">
      <div className="economy-topline"><span /> EDUKASI HORTIKULTURA <Link href="/#hasil-kebun"><ArrowLeft size={13} /> Kembali ke kebun</Link></div>
      <header className="economy-header">
        <Link href="/" className="economy-brand"><span><Sprout size={22} /></span><strong>kebun alpukat rancamaya</strong></Link>
        <span>CATATAN PASAR · 2026</span>
      </header>
      <section className="economy-hero">
        <div className="economy-hero-art" aria-hidden="true" />
        <div className="economy-hero-content">
          <span className="economy-eyebrow"><BarChart3 size={15} /> DATA PRODUKSI & PELUANG USAHA</span>
          <h1>Alpukat Indonesia:<br /><em>buah dengan peluang.</em></h1>
          <p>Di balik buah yang dinikmati sehari-hari, terdapat rantai usaha dari pembibitan, budidaya, panen, distribusi, hingga produk olahan. Peluangnya perlu dibaca bersama data dan perhitungan usaha yang realistis.</p>
          <a href="#data-produksi" className="economy-button">Lihat data nasional <ArrowRight size={16} /></a>
        </div>
        <span className="economy-hero-foot">KEBUN · PASCAPANEN · PASAR</span>
      </section>

      <section className="economy-intro">
        <div className="economy-section-label">01 / GAMBARAN NASIONAL <Leaf size={18} /></div>
        <div>
          <p className="economy-kicker">APA YANG DITUNJUKKAN DATA?</p>
          <h2>Produksi meningkat.<br /><em>Mutu dan pasar tetap menentukan.</em></h2>
          <p className="economy-copy">Badan Pusat Statistik mencatat produksi alpukat Indonesia sekitar 9,20 juta kuintal pada 2024 dan 10,70 juta kuintal pada 2025. Dengan konversi 1 kuintal = 100 kilogram, angka itu setara dengan sekitar 919,5 ribu ton dan 1,07 juta ton. Kenaikan tahunannya sekitar 16,3% berdasarkan angka pada tabel BPS.</p>
          <p className="economy-copy">Angka produksi menggambarkan skala komoditas, bukan otomatis nilai omzet atau keuntungan petani. Untuk menghitung nilai ekonomi secara akurat, data volume perlu dipadukan dengan harga di tingkat petani, susut panen, biaya input, tenaga kerja, pengemasan, transportasi, dan bagian hasil yang memenuhi standar pembeli.</p>
        </div>
      </section>

      <section className="economy-stats" id="data-produksi">
        <div className="economy-stat"><span>PRODUKSI 2024</span><strong>±919,5 <small>ribu ton</small></strong><p>9.195.085,58 kuintal menurut BPS.</p></div>
        <div className="economy-stat economy-stat-highlight"><span>PRODUKSI 2025</span><strong>±1,07 <small>juta ton</small></strong><p>10.696.760,28 kuintal menurut tabel BPS yang diperbarui 25 Mei 2026.</p></div>
        <div className="economy-stat"><span>PERUBAHAN TAHUNAN</span><strong>+16,3<small>%</small></strong><p>Perhitungan dari angka produksi 2024 dan 2025; bukan pertumbuhan harga atau laba.</p></div>
      </section>
      <p className="economy-data-note">Sumber angka: BPS, tabel Produksi Tanaman Buah-buahan dan Sayuran Tahunan Menurut Jenis Tanaman, 2024 dan 2025. Nilai tonase dan persentase merupakan konversi/perhitungan dari angka kuintal yang diterbitkan BPS.</p>

      <section className="economy-opportunities">
        <div className="economy-opportunities-heading"><span className="economy-kicker">02 / DI MANA NILAI EKONOMINYA?</span><h2>Peluang tumbuh di<br /><em>sepanjang rantai usaha.</em></h2></div>
        <div className="economy-opportunity-grid">
          <article><span className="economy-card-num">01</span><div className="economy-card-icon"><Sprout size={23} /></div><h3>Pembibitan dan tanaman produktif</h3><p>Permintaan bibit berkualitas membuka peluang bagi pembibitan yang mampu menjelaskan identitas varietas, asal bahan tanam, kesehatan bibit, dan panduan perawatan. Kepercayaan dan ketepatan varietas lebih penting daripada klaim cepat berbuah yang tidak didukung bukti.</p></article>
          <article><span className="economy-card-num">02</span><div className="economy-card-icon"><Leaf size={23} /></div><h3>Buah segar dengan mutu terpilah</h3><p>Sortasi berdasarkan ukuran, kematangan, kondisi kulit, dan kerusakan dapat membantu penjual melayani segmen berbeda. Pasar rumah tangga, toko buah, pedagang grosir, hotel, restoran, dan kafe bisa memiliki standar dan pola pembelian yang berbeda.</p></article>
          <article><span className="economy-card-num">03</span><div className="economy-card-icon"><Boxes size={23} /></div><h3>Produk olahan dan nilai tambah</h3><p>Alpukat dapat menjadi bahan minuman, puree, saus, dessert, dan produk makanan lain. Pengolahan berpotensi menyerap buah dengan tampilan kurang seragam, tetapi tetap memerlukan standar keamanan pangan, pengendalian oksidasi, umur simpan, kemasan, dan izin yang sesuai.</p></article>
          <article><span className="economy-card-num">04</span><div className="economy-card-icon"><TrendingUp size={23} /></div><h3>Pengumpulan dan rantai pasok</h3><p>Pengumpulan hasil dari beberapa kebun, penanganan pascapanen, kemasan, dan pengiriman yang tepat dapat membantu menjaga mutu hingga pembeli. Susut buah dan ketidaksesuaian kematangan merupakan biaya yang perlu dicatat, bukan dianggap sepele.</p></article>
        </div>
      </section>

      <section className="economy-business">
        <div>
          <span className="economy-kicker">03 / MEMBACA KELAYAKAN USAHA</span>
          <h2>Omzet bukan<br /><em>keuntungan bersih.</em></h2>
        </div>
        <div className="economy-business-copy">
          <p>Untuk menilai apakah kebun alpukat menguntungkan, mulai dari catatan per pohon atau per blok: jumlah pohon produktif, kilogram hasil panen yang layak jual, harga jual aktual per kelas mutu, frekuensi panen, dan seluruh biaya operasional.</p>
          <div className="economy-formula"><span>RUMUS DASAR</span><strong>Margin kotor = pendapatan penjualan − biaya langsung</strong><p>Pendapatan penjualan dihitung dari kilogram yang benar-benar terjual dikalikan harga realisasi, bukan dari seluruh buah yang tumbuh.</p></div>
          <p>Perhitungan jangka panjang juga perlu memasukkan waktu sebelum pohon produktif, penggantian tanaman, pemangkasan, pemupukan, pengendalian hama, air, tenaga kerja, risiko cuaca, fluktuasi harga, dan kebutuhan modal kerja.</p>
        </div>
      </section>

      <section className="economy-market">
        <div className="economy-market-title"><span className="economy-kicker">04 / STRATEGI YANG LEBIH REALISTIS</span><h2>Mulai dari pasar,<br /><em>lalu rencanakan panen.</em></h2></div>
        <div className="economy-market-list">
          <div><span>01</span><p><strong>Validasi pembeli.</strong> Tanyakan varietas yang dicari, ukuran, tingkat kematangan, volume rutin, toleransi cacat, cara pembayaran, dan jadwal pengiriman.</p></div>
          <div><span>02</span><p><strong>Catat hasil aktual.</strong> Pisahkan hasil panen total, buah layak jual, buah rusak, dan buah yang masuk jalur olahan.</p></div>
          <div><span>03</span><p><strong>Jangan mengandalkan satu harga.</strong> Buat skenario harga rendah, normal, dan tinggi berdasarkan penawaran nyata dari calon pembeli atau pasar lokal.</p></div>
          <div><span>04</span><p><strong>Bangun konsistensi.</strong> Foto produk asli, informasi varietas yang benar, penanganan yang baik, dan catatan panen dapat meningkatkan kepercayaan pembeli.</p></div>
        </div>
      </section>

      <section className="economy-sources">
        <span className="economy-kicker">05 / SUMBER DAN RUJUKAN</span>
        <h2>Data yang bisa <em>ditelusuri.</em></h2>
        <p>Data produksi mengacu pada publikasi resmi. Uraian peluang usaha merupakan penjelasan umum, bukan jaminan keuntungan atau rekomendasi investasi.</p>
        <div className="economy-source-list">{sources.map((source, i) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>0{i + 1}</span><strong>{source.name}</strong><ArrowUpRight size={16} /></a>)}</div>
      </section>

      <section className="economy-cta"><span className="economy-kicker">KEBUN ALPUKAT RANCAMAYA</span><h2>Kenali varietasnya.<br /><em>Pahami peluangnya.</em></h2><p>Jelajahi halaman varietas untuk membaca karakter buah dan sumber referensinya.</p><Link href="/alpukat/hass" className="economy-button">Jelajahi katalog alpukat <ArrowRight size={16} /></Link></section>
      <footer className="economy-footer"><Link href="/" className="economy-brand"><span><Sprout size={22} /></span><strong>kebun alpukat rancamaya</strong></Link><span>DATA PRODUKSI: BPS · DIOLAH UNTUK EDUKASI</span><Link href="/#hasil-kebun">KEMBALI KE KEBUN ↑</Link></footer>

      <style jsx global>{`
        .economy-page{background:#edf2e8;color:#203326;min-height:100vh;font-family:var(--sans)}
        .economy-topline{height:34px;background:#183b2b;color:#dce7d5;padding:0 5.2%;display:flex;align-items:center;gap:9px;font-size:8px;letter-spacing:.15em}
        .economy-topline>span{width:5px;height:5px;border-radius:50%;background:#b7ce9f}
        .economy-topline>a{margin-left:auto;display:flex;align-items:center;gap:6px;letter-spacing:.05em}
        .economy-header{height:82px;padding:0 7%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #20332618}
        .economy-brand{display:flex;align-items:center;gap:10px}
        .economy-brand>span{width:38px;height:38px;border:1px solid #b6c9ae;border-radius:50%;display:grid;place-items:center;color:#244b35}
        .economy-brand strong{font:500 20px var(--serif)}
        .economy-header>span,.economy-footer>span,.economy-footer>a:last-child{font-size:8px;letter-spacing:.13em;color:#788472}
        .economy-hero{min-height:580px;height:min(72vw,700px);max-height:740px;position:relative;isolation:isolate;display:flex;align-items:center;color:white;overflow:hidden}
        .economy-hero-art{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(15,43,29,.9),rgba(15,43,29,.45)),url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=90") center/cover}
        .economy-hero-content{margin-left:10%;width:min(760px,80%);padding:70px 0}
        .economy-eyebrow{display:flex;align-items:center;gap:10px;font-size:9px;letter-spacing:.17em;color:#d7e4d0}
        .economy-hero h1{font:400 clamp(47px,7vw,83px)/1.07 var(--serif);letter-spacing:-1.7px;margin:28px 0 20px}
        .economy-hero h1 em,.economy-intro h2 em,.economy-opportunities h2 em,.economy-business h2 em,.economy-market h2 em,.economy-sources h2 em,.economy-cta h2 em{font-weight:400;color:#c4d6b8}
        .economy-hero-content>p{max-width:570px;font-size:13px;line-height:1.9;color:#e1e9dd}
        .economy-button{display:inline-flex;align-items:center;gap:14px;margin-top:20px;padding:15px 18px;background:#f5f7f0;color:#244b35;font-size:11px;font-weight:600}
        .economy-hero-foot{position:absolute;bottom:25px;right:5%;font-size:8px;letter-spacing:.16em;color:#dce7d5}
        .economy-intro{display:grid;grid-template-columns:28% 1fr;gap:35px;padding:100px 12% 75px}
        .economy-section-label{display:flex;align-items:flex-start;gap:10px;font-size:8px;letter-spacing:.15em;color:#72806c}
        .economy-kicker{font-size:8px;letter-spacing:.18em;color:#6f8068}
        .economy-intro h2,.economy-opportunities h2,.economy-business h2,.economy-market h2,.economy-sources h2,.economy-cta h2{font:400 clamp(36px,4.6vw,58px)/1.15 var(--serif);letter-spacing:-1px;margin:18px 0 24px}
        .economy-intro h2 em,.economy-opportunities h2 em,.economy-business h2 em,.economy-market h2 em,.economy-sources h2 em{color:#70886a}
        .economy-copy{font-size:13px;line-height:1.95;color:#657161;max-width:750px}
        .economy-stats{display:grid;grid-template-columns:repeat(3,1fr);margin:0 8% 20px;border:1px solid #cad7c4}
        .economy-stat{padding:29px 25px;border-right:1px solid #cad7c4}
        .economy-stat:last-child{border-right:0}
        .economy-stat-highlight{background:#dfe9d9}
        .economy-stat>span{font-size:8px;letter-spacing:.15em;color:#71816a}
        .economy-stat strong{display:block;font:400 clamp(31px,4vw,48px)/1.2 var(--serif);margin:15px 0}
        .economy-stat strong small{font:400 15px var(--sans)}
        .economy-stat p,.economy-data-note{font-size:10px;line-height:1.8;color:#71806b}
        .economy-data-note{margin:0 8% 100px}
        .economy-opportunities{padding:85px 10% 100px;background:#e1eadb}
        .economy-opportunities-heading{margin-bottom:36px}
        .economy-opportunities h2{margin:14px 0}
        .economy-opportunity-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid #c4d2bd;border-left:1px solid #c4d2bd}
        .economy-opportunity-grid article{position:relative;padding:29px 30px 32px;border-right:1px solid #c4d2bd;border-bottom:1px solid #c4d2bd;min-height:270px}
        .economy-card-num{position:absolute;right:22px;top:22px;font-size:9px;color:#7b8c73}
        .economy-card-icon{color:#587b54;margin-bottom:24px}
        .economy-opportunity-grid h3{font:400 25px/1.25 var(--serif);margin:0 0 13px}
        .economy-opportunity-grid p{font-size:11px;line-height:1.9;color:#657161;margin:0}
        .economy-business{display:grid;grid-template-columns:1fr 1fr;gap:65px;padding:100px 12%}
        .economy-business h2{margin-top:17px}
        .economy-business-copy>p{font-size:12px;line-height:1.95;color:#657161}
        .economy-formula{background:#183b2b;color:white;padding:24px;margin:25px 0}
        .economy-formula>span{font-size:8px;letter-spacing:.16em;color:#c2d4b7}
        .economy-formula strong{display:block;font:400 23px/1.35 var(--serif);margin:14px 0}
        .economy-formula p{font-size:10px;line-height:1.8;color:#d5e0d1;margin:0}
        .economy-market{padding:85px 12%;background:#f5f6f0;display:grid;grid-template-columns:1fr 1fr;gap:65px}
        .economy-market-list>div{display:grid;grid-template-columns:30px 1fr;gap:14px;padding:18px 0;border-bottom:1px solid #d8e0d2}
        .economy-market-list>div:first-child{border-top:1px solid #d8e0d2}
        .economy-market-list>div>span{font-size:9px;color:#72866b;padding-top:3px}
        .economy-market-list p{font-size:11px;line-height:1.9;color:#657161;margin:0}
        .economy-market-list strong{color:#203326}
        .economy-sources{padding:95px 12%}
        .economy-sources h2{margin:15px 0}
        .economy-sources>p{max-width:580px;font-size:11px;line-height:1.9;color:#687565}
        .economy-source-list{margin-top:28px;border-top:1px solid #cad7c4}
        .economy-source-list>a{display:grid;grid-template-columns:30px 1fr 18px;gap:15px;align-items:center;padding:20px 0;border-bottom:1px solid #cad7c4}
        .economy-source-list>a>span{font-size:9px;color:#7b8b75}
        .economy-source-list>a>strong{font:400 18px/1.4 var(--serif)}
        .economy-source-list>a>svg{color:#71866a}
        .economy-cta{padding:80px 12%;background:#183b2b;color:white}
        .economy-cta .economy-kicker{color:#c2d4b7}
        .economy-cta h2{margin:18px 0}
        .economy-cta>p{font-size:12px;line-height:1.9;color:#d5e0d1;max-width:490px}
        .economy-cta h2 em{color:#c2d4b7}
        .economy-footer{padding:27px 6%;display:flex;align-items:center;justify-content:space-between;gap:20px;border-top:1px solid #d3ddcd}
        @media(max-width:760px){.economy-topline{padding:0 5%;font-size:7px}.economy-header{height:72px;padding:0 5%}.economy-brand strong{font-size:16px}.economy-header>span{font-size:7px}.economy-hero{height:660px;min-height:580px}.economy-hero-content{margin-left:7%;width:86%;padding:50px 0}.economy-hero h1{font-size:clamp(43px,10vw,63px)}.economy-intro{grid-template-columns:1fr;gap:22px;padding:75px 7% 50px}.economy-stats{grid-template-columns:1fr;margin:0 6% 15px}.economy-stat{border-right:0;border-bottom:1px solid #cad7c4;padding:23px}.economy-stat:last-child{border-bottom:0}.economy-data-note{margin:0 6% 70px}.economy-opportunities{padding:70px 6%}.economy-opportunity-grid{grid-template-columns:1fr}.economy-opportunity-grid article{min-height:0;padding:25px 22px}.economy-business,.economy-market{grid-template-columns:1fr;gap:25px;padding:75px 7%}.economy-sources{padding:75px 7%}.economy-cta{padding:70px 7%}.economy-footer{align-items:flex-start;flex-direction:column;padding:25px 6%}.economy-footer>span{line-height:1.7}}
      `}</style>
    </main>
  );
}
