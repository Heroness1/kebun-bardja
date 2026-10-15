import "./globals.css";
import CinematicIntro from "../components/CinematicIntro";

export const metadata = {
  title: "Kebun Bardja — Tumbuh dari Alam, Dipetik dengan Hati",
  description:
    "Mengenal Kebun Bardja, kebun buah yang menumbuhkan alpukat dan durian dengan perhatian pada alam, kualitas, dan proses yang berkelanjutan.",
  applicationName: "Kebun Bardja",
  keywords: ["Kebun Bardja", "kebun alpukat", "kebun durian", "perkebunan buah Indonesia"],
  openGraph: {
    title: "Kebun Bardja — Tumbuh dari Alam, Dipetik dengan Hati",
    description: "Cerita kebun, buah pilihan, dan proses yang tumbuh bersama alam.",
    type: "website",
    locale: "id_ID"
  },
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
      </body>
    </html>
  );
}
