import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, Sprout } from "lucide-react";

const varieties = [
  {
    slug: "hass", name: "Alpukat Hass", short: "Hass", number: "01",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Hass: Ciri, Rasa & Potensi Pasar | Kebun Rancamaya",
    seoDescription: "Kenali alpukat Hass, dari kulit yang berubah gelap saat matang hingga daging creamy yang populer untuk konsumsi segar dan olahan.",
    intro: "Tekstur creamy, tampilan khas, dan reputasi global menjadikan alpukat Hass menarik untuk dikenali oleh pencinta buah maupun pelaku usaha pangan.",
    selling: "Kenali ciri Hass sebelum memilih varietas untuk konsumsi, menu kuliner, atau rencana budidaya.",
    note: "Hass umumnya berbentuk oval, memiliki kulit bertekstur agak kasar yang berubah dari hijau menjadi ungu gelap hingga kehitaman saat matang. Dagingnya berwarna hijau pucat hingga kekuningan dengan tekstur creamy dan rasa khas. Karakter tersebut membuat Hass banyak digunakan untuk sajian segar, salad, dan olahan seperti guacamole. Ciri dan mutu buah tetap dipengaruhi kematangan, kondisi tumbuh, serta penanganan pascapanen.",
    sourceName: "California Avocado Commission — panduan varietas Hass",
    sourceUrl: "https://californiaavocado.com/wp-content/uploads/2020/12/2020-CAC-Foodservice-Culinary-Education-Module-Lesson-2.pdf"
  },
  {
    slug: "miki", name: "Alpukat Miki", short: "Miki", number: "02",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Miki: Ciri Buah, Rasa & Potensi | Kebun Rancamaya",
    seoDescription: "Pelajari ciri alpukat Miki, tekstur daging, karakter rasa, serta potensi pemanfaatannya dari referensi pertanian Indonesia.",
    intro: "Alpukat Miki punya karakter yang menarik untuk pasar buah tropis: daging tebal, warna kuning cerah, dan cita rasa gurih sedikit manis dalam laporan panen pemerintah.",
    selling: "Cari tahu apa yang membuat Miki menarik, lalu sesuaikan pilihan dengan tujuan konsumsi atau rencana kebun Anda.",
    note: "Dalam laporan panen BRMP Jambi pada April 2026, Miki digambarkan sebagai varietas berumur genjah. Buah yang dipanen di lokasi tersebut berbobot sekitar 400–600 gram, berdaging tebal berwarna kuning cerah, bertekstur lembut dan pulen, dengan cita rasa gurih sedikit manis. Laporan itu juga mencatat hasil per pohon berbeda menurut umur dan perawatan. Angka tersebut adalah hasil pengamatan di lokasi tersebut, bukan jaminan produktivitas untuk semua kebun.",
    sourceName: "BRMP Jambi, 17 April 2026 — panen alpukat Miki",
    sourceUrl: "https://jambi.brmp.pertanian.go.id/berita/sukses-panen-alpukat-miki-bukti-keseriusan-ip2mp-brmp-jambi-kembangkan-hortikultura"
  },
  {
    slug: "aligator", name: "Alpukat Aligator", short: "Aligator", number: "03",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0b2f53?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Aligator: Ciri Buah Besar & Potensi | Kebun Rancamaya",
    seoDescription: "Kenali alpukat Aligator yang dikenal dengan bentuk memanjang dan ukuran besar, termasuk hal penting sebelum memilih untuk budidaya.",
    intro: "Bentuk memanjang dan ukuran buah yang mencolok membuat alpukat Aligator mudah menarik perhatian. Kenali cirinya sebelum menentukan pilihan.",
    selling: "Untuk rencana budidaya, cocokkan karakter Aligator dengan kondisi lahan, perawatan, dan kebutuhan pasar yang dituju.",
    note: "Publikasi Jogja Benih milik Pemerintah Daerah DI Yogyakarta menyebut ciri Aligator berupa buah memanjang, kulit hijau, dan ukuran yang dapat sangat besar. Bobot aktual buah di lapangan bisa berbeda menurut bahan tanam, umur pohon, kondisi lingkungan, dan teknik budidaya. Untuk menilai potensi komersialnya, ukuran perlu diimbangi dengan mutu daging, tingkat kematangan, kerusakan saat pengiriman, dan permintaan pembeli.",
    sourceName: "Jogja Benih — jenis alpukat unggul",
    sourceUrl: "https://jogjabenih.jogjaprov.go.id/read/cc229c031526992d8ed99a3cc64fb0b86b0a0a33f4abf231057967662f9d5ea53300"
  },
  {
    slug: "kendil", name: "Alpukat Kendil", short: "Kendil", number: "04",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Kendil: Ciri, Ukuran & Potensi Budidaya | Kebun Rancamaya",
    seoDescription: "Mengenal alpukat Kendil dari referensi pertanian, termasuk catatan bobot buah dan pertimbangan penting untuk rencana budidaya.",
    intro: "Alpukat Kendil dikenal lewat catatan buah berukuran besar dalam referensi budidaya. Informasi varietas yang tepat membantu perencanaan kebun lebih terarah.",
    selling: "Pelajari referensi Kendil dan gunakan data kebun setempat untuk menilai kecocokannya dengan target panen Anda.",
    note: "Kendil tercantum dalam daftar varietas alpukat yang dikelola sebagai sumber benih oleh BRMP Buah Tropika. Buku Lapang Budidaya Alpukat dari Direktorat Buah dan Florikultura juga mencatat Kendil dengan asal Boja, Kendal, dan rentang bobot buah sekitar 900–1.150 gram. Rentang tersebut merupakan data referensi budidaya, bukan ukuran yang pasti diperoleh pada setiap panen.",
    sourceName: "BRMP — daftar sumber benih; Buku Lapang Budidaya Alpukat (2021)",
    sourceUrl: "https://repository.pertanian.go.id/items/3e63baa4-aee6-4230-8383-c92c80212de1"
  },
  {
    slug: "wina", name: "Alpukat Wina", short: "Wina", number: "05",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Wina: Ciri Buah & Potensi Budidaya | Kebun Rancamaya",
    seoDescription: "Kenali alpukat Wina atau Wina Bandungan, ciri yang tercatat dalam referensi pertanian, dan pertimbangan sebelum menanam.",
    intro: "Wina Bandungan termasuk varietas yang tercatat dalam sumber perbenihan pemerintah dan dikenal dengan buah besar serta daging tebal.",
    selling: "Pertimbangkan Wina dengan melihat asal bibit, kondisi lokasi, serta tujuan panen agar rencana kebun lebih matang.",
    note: "Wina Bandungan tercantum dalam daftar sumber benih alpukat BRMP Buah Tropika. Buku Lapang Budidaya Alpukat mencatat varietas Wina dikembangkan di wilayah Bandungan, Kabupaten Semarang, dan melaporkan buah berukuran besar dengan daging tebal. Karakter yang muncul di kebun dapat berbeda, sehingga pemilihan varietas sebaiknya disertai informasi asal bibit dan pengamatan hasil di lokasi tanam.",
    sourceName: "BRMP — daftar sumber benih; Buku Lapang Budidaya Alpukat (2021)",
    sourceUrl: "https://repository.pertanian.go.id/items/3e63baa4-aee6-4230-8383-c92c80212de1"
  },
  {
    slug: "pluwang", name: "Alpukat Pluwang", short: "Pluwang", number: "06",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1500&q=85",
    seoTitle: "Alpukat Pluwang: Ciri Buah & Tips Memilih Bibit | Kebun Rancamaya",
    seoDescription: "Cari tahu hal yang perlu diperhatikan tentang alpukat Pluwang, klaim ukuran buah, bukti asal bibit, dan kecocokan untuk budidaya.",
    intro: "Pluwang sering menarik minat karena promosi ukuran buahnya. Bekali pilihan Anda dengan informasi bibit dan bukti performa yang relevan.",
    selling: "Sebelum memilih Pluwang, minta bukti asal varietas dan catatan panen yang sesuai dengan kondisi tumbuh Anda.",
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
    title: item.seoTitle,
    description: item.seoDescription,
    keywords: [item.name, `${item.short} unggul`, `ciri ${item.short}`, `budidaya ${item.short}`, "varietas alpukat Indonesia", "Kebun Alpukat Rancamaya"],
    alternates: { canonical: `/alpukat/${item.slug}` },
    openGraph: { title: item.seoTitle, description: item.seoDescription, type: "article", locale: "id_ID", siteName: "Kebun Alpukat Rancamaya", url: `https://kebun-bardja.vercel.app/alpukat/${item.slug}` },
    twitter: { card: "summary_large_image", title: item.seoTitle, description: item.seoDescription },
    robots: { index: true, follow: true }
  };
}

export default async function VarietyPage({ params }) {
  const { varietas } = await params;
  const item = varieties.find((entry) => entry.slug === varietas);
  if (!item) return <main className="variety-page"><div className="variety-shell"><p>Varietas tidak ditemukan.</p><Link href="/#hasil-kebun">Kembali ke hasil kebun</Link></div></main>;
  const otherVarieties = varieties.filter((entry) => entry.slug !== item.slug);

  return (
    <main className="variety-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: item.seoTitle, description: item.seoDescription, inLanguage: "id-ID", author: { "@type": "Organization", name: "Kebun Alpukat Rancamaya" }, publisher: { "@type": "Organization", name: "Kebun Alpukat Rancamaya" }, mainEntityOfPage: `https://kebun-bardja.vercel.app/alpukat/${item.slug}` }) }} />

      <div className="variety-topline"><span className="variety-dot" /> KATALOG VARIETAS · KEBUN ALPUKAT RANCAMAYA <Link href="/#hasil-kebun">Kembali ke kebun <ArrowUpRight size={14} /></Link></div>
      <header className="variety-header">
        <Link className="variety-brand" href="/"><span className="variety-brand-mark"><Sprout size={22} /></span><span><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></Link>
        <span className="variety-header-label">VARIETAS {item.number} / 06</span>
      </header>
      <section className="variety-hero">
        <div className="variety-hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(15,43,29,.82),rgba(15,43,29,.28)),url("${item.image}")` }} />
        <div className="variety-hero-content">
          <span className="variety-eyebrow"><Leaf size={14} /> PANDUAN VARIETAS · KEBUN ALPUKAT RANCAMAYA</span>
          <h1>{item.name}<br /><em>Kenali potensi terbaiknya.</em></h1>
          <p>{item.intro}</p>
          <a className="variety-button" href="#profil">Kenali keunggulannya <ArrowRight size={16} /></a>
        </div>
        <span className="variety-hero-index">{item.number} — KATALOG KEBUN</span>
      </section>
      <section className="variety-profile" id="profil">
        <div className="variety-profile-label"><span>01 / TENTANG VARIETAS</span><Leaf size={20} /></div>
        <div className="variety-profile-main">
          <p className="variety-kicker">MENGENAL LEBIH DEKAT</p>
          <h2>Setiap varietas punya<br /><em>cerita pertumbuhannya.</em></h2>
          <p className="variety-body">{item.note}</p>
          <p className="variety-body variety-selling-copy">{item.selling}</p>
          <p className="variety-source">Referensi: <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceName} <ArrowUpRight size={13} /></a></p>
          <div className="variety-notice"><Sprout size={19} /><p><strong>Catatan editorial</strong><br />Konten ini menjelaskan karakter varietas berdasarkan referensi yang ditautkan, bukan bukti bahwa varietas tersebut ditanam atau tersedia di Kebun Alpukat Rancamaya. Foto ilustrasi, ketersediaan, dan hasil panen kebun perlu dikonfirmasi secara terpisah.</p></div>
        </div>
      </section>
      <section className="variety-economic-link"><div><span className="variety-kicker">DARI KEBUN KE PASAR</span><h2>Pelajari potensi ekonomi <em>alpukat Indonesia.</em></h2><p>Lihat data produksi nasional terbaru, peluang nilai tambah, dan hal-hal yang perlu dihitung sebelum memulai usaha.</p></div><Link className="variety-button" href="/potensi-ekonomi-alpukat">Baca analisis ekonomi <ArrowRight size={16} /></Link></section>
      <section className="variety-contact">
        <span className="variety-kicker">MARI TERHUBUNG</span>
        <h2>Ingin tahu lebih lanjut<br /><em>tentang hasil kebun?</em></h2>
        <p>Ingin menilai varietas yang sesuai untuk kebun atau kebutuhan Anda? Mulai percakapan untuk membahas tujuan, kondisi tanam, dan informasi yang perlu dikonfirmasi.</p>
        <a className="variety-button" href={`https://wa.me/?text=${encodeURIComponent(`Halo Kebun Alpukat Rancamaya, saya tertarik mengenal alpukat ${item.short}. Saya ingin bertanya tentang karakter varietas dan peluang kerja sama.`)}`}>Diskusikan pilihan Anda <ArrowUpRight size={16} /></a>
      </section>
      <section className="variety-more">
        <div className="variety-more-heading"><span className="variety-kicker">KATALOG ALPUKAT</span><h2>Jelajahi varietas <em>lainnya.</em></h2></div>
        <div className="variety-more-grid">{otherVarieties.map((other) => <Link href={`/alpukat/${other.slug}`} className="variety-more-card" key={other.slug}><span>{other.number}</span><strong>{other.name}</strong><ArrowUpRight size={17} /></Link>)}</div>
      </section>
      <footer className="variety-footer"><Link className="variety-brand" href="/"><span className="variety-brand-mark"><Sprout size={22} /></span><span><strong>kebun alpukat rancamaya</strong><small>GROWN WITH CARE</small></span></Link><span>DIRAWAT DENGAN HATI. TUMBUH BERSAMA ALAM.</span><Link href="/#hasil-kebun">KEMBALI KE HASIL KEBUN ↑</Link></footer>
      
    </main>
  );
}
