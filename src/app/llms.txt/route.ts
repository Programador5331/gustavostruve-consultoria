import { getAllPosts } from "@/lib/blog";
import { site, about, kliniq } from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = `https://${site.domain}`;

  const postsList = posts
    .map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const txt = `# ${site.name} — ${site.brand}

> Consultoría estratégica en gestión de salud para clínicas e instituciones médicas en Ecuador y Latinoamérica. ${about.bio[0]}

Gustavo Struve es el consultor principal: MBA, Máster en Gerencia en Salud, más de 20 años liderando operaciones en el sector salud, y CEO de Gustavo Struve Consultoría Integral (GSCI) desde 2013.

## Líneas de servicio

- [Consultoría Personalizada](${siteUrl}/#consultoria): diagnóstico y optimización de gestión para clínicas e instituciones de salud medianas y pequeñas en Ecuador y Latinoamérica.
- [KliniQ 24/7](${siteUrl}/kliniq): software de gestión clínica en la nube (agenda, historia clínica electrónica, facturación electrónica SRI, telemedicina). ${kliniq.pitch}
- [Productos Digitales](${siteUrl}/#productos): ebooks y formación práctica en gestión de calidad y emprendimiento.

## Contacto

- Sitio web: ${siteUrl}
- Correo: ${site.email}
- Teléfono/WhatsApp: ${site.phone}
- Ubicación: ${site.location}
- LinkedIn: ${site.linkedin}

## Blog

Artículos sobre gestión de salud, IA aplicada a clínicas, regulación y calidad institucional, publicados dos veces por semana.

${postsList}
`;

  return new Response(txt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
