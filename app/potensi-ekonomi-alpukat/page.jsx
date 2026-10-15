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

      
    </main>
  );
}
