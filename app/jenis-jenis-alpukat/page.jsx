import VarietyExperience from "../../components/VarietyExperience";
import "./varieties.css";

export const metadata = {
  title: "Jenis-Jenis Alpukat: Kenali 6 Varietas | Kebun Alpukat Rancamaya",
  description: "Jelajahi jenis alpukat Hass, Miki, Aligator, Kendil, Wina, dan Pluwang. Kenali karakter setiap varietas melalui panduan visual interaktif dan referensi budidaya.",
  keywords: ["jenis-jenis alpukat", "varietas alpukat", "ciri alpukat Hass", "alpukat Miki", "alpukat Aligator", "alpukat Kendil", "alpukat Wina", "alpukat Pluwang", "Kebun Alpukat Rancamaya"],
  alternates: { canonical: "/jenis-jenis-alpukat" },
  openGraph: {
    title: "Jenis-Jenis Alpukat — A Field Guide | Kebun Alpukat Rancamaya",
    description: "Enam varietas alpukat dalam panduan visual interaktif. Kenali karakter buah dan buka catatan tiap varietas.",
    type: "website",
    locale: "id_ID",
    siteName: "Kebun Alpukat Rancamaya",
    url: "https://kebun-bardja.vercel.app/jenis-jenis-alpukat",
    images: [{ url: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1200&q=85", width: 1200, height: 630, alt: "Ilustrasi buah alpukat untuk panduan varietas" }]
  },
  twitter: { card: "summary_large_image", title: "Jenis-Jenis Alpukat | Kebun Alpukat Rancamaya", description: "Kenali enam varietas alpukat dalam panduan visual interaktif.", images: ["https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1200&q=85"] },
  robots: { index: true, follow: true }
};

const varietyItems = ["hass", "miki", "aligator", "kendil", "wina", "pluwang"];

export default function JenisJenisAlpukatPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Jenis-Jenis Alpukat — Kebun Alpukat Rancamaya",
    description: "Panduan visual enam varietas alpukat dengan tautan ke catatan setiap varietas.",
    inLanguage: "id-ID",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: varietyItems.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: slug.charAt(0).toUpperCase() + slug.slice(1),
        url: `https://kebun-bardja.vercel.app/alpukat/${slug}`
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <VarietyExperience />
    </>
  );
}
