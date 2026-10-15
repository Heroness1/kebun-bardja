import "./globals.css";
import CinematicIntro from "../components/CinematicIntro";

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
    url: "https://kebun-bardja.vercel.app/"
  },
  twitter: { card: "summary_large_image", title: "Kebun Alpukat Rancamaya | Varietas & Peluang Usaha", description: "Kenali varietas alpukat dan peluang usaha dari Kebun Alpukat Rancamaya." },
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
