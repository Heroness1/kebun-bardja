const siteUrl = "https://kebun-bardja.vercel.app";

export default function sitemap() {
  const lastModified = new Date();
  const varietySlugs = ["hass", "miki", "aligator", "kendil", "wina", "pluwang"];

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/jelajahi`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/jenis-jenis-alpukat`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/potensi-ekonomi-alpukat`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...varietySlugs.map((slug) => ({
      url: `${siteUrl}/alpukat/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    }))
  ];
}
