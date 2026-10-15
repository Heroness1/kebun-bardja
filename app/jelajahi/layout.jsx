export const metadata = {
  title: "Jelajahi Kebun | Kebun Alpukat Rancamaya",
  description: "Kenali cerita Kebun Alpukat Rancamaya, hasil kebun, proses perawatan, profil kebun, dan informasi varietas alpukat.",
  alternates: { canonical: "/jelajahi" },
  openGraph: {
    title: "Jelajahi Kebun Alpukat Rancamaya",
    description: "Kenali cerita kebun, hasil kebun, dan proses yang tumbuh bersama alam.",
    url: "https://kebun-bardja.vercel.app/jelajahi",
    type: "website",
    locale: "id_ID",
    siteName: "Kebun Alpukat Rancamaya"
  },
  robots: { index: true, follow: true }
};

export default function ExploreLayout({ children }) {
  return children;
}
