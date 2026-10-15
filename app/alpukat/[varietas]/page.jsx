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
      
    </main>
  );
}
