import "./globals.css";
import CinematicIntro from "../components/CinematicIntro";
import NatureAudio from "../components/NatureAudio";

export const metadata = {
  metadataBase: new URL("https://kebun-bardja.vercel.app"),
  title: "Kebun Alpukat Rancamaya | Varietas & Peluang Usaha",
  description:
    "Jelajahi Kebun Alpukat Rancamaya, kenali varietas alpukat populer, pelajari peluang usaha alpukat Indonesia, dan mulai rencanakan langkah kebun Anda.",
  applicationName: "Kebun Alpukat Rancamaya",
  keywords: ["Kebun Alpukat Rancamaya", "alpukat Rancamaya", "varietas alpukat", "peluang usaha alpukat", "budidaya alpukat Indonesia", "kebun alpukat"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kebun Alpukat Rancamaya — Tumbuh dari Alam, Dipetik dengan Hati",
    description: "Kenali varietas alpukat dan peluang usaha dari Kebun Alpukat Rancamaya.",
    type: "website",
    locale: "id_ID",
    siteName: "Kebun Alpukat Rancamaya",
    url: "https://kebun-bardja.vercel.app/",
    images: [{ url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85", width: 1200, height: 630, alt: "Suasana hijau alami untuk Kebun Alpukat Rancamaya" }]
  },
  twitter: { card: "summary_large_image", title: "Kebun Alpukat Rancamaya | Varietas & Peluang Usaha", description: "Kenali varietas alpukat dan peluang usaha dari Kebun Alpukat Rancamaya.", images: ["https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"] },
  robots: { index: true, follow: true },
  icons: { icon: "/leaf.svg" }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173d2d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <CinematicIntro />
        {children}
        <NatureAudio />
      </body>
    </html>
  );
}
