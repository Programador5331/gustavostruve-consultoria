import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/content";

export const dynamic = "force-static";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = `https://${site.domain}`;

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date + "T12:00:00").toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog — Gustavo Struve Consultoría Integral</title>
    <link>${siteUrl}/blog</link>
    <description>Ideas y casos prácticos sobre gestión de salud, transformación digital y liderazgo en instituciones médicas.</description>
    <language>es</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
