import { site, about, faq, kliniq } from "@/lib/content";
import type { BlogPostMeta } from "@/lib/blog";

const baseUrl = `https://${site.domain}`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${baseUrl}/#gustavo-struve`,
    name: about.name,
    jobTitle: about.title,
    description: about.bio.join(" "),
    url: baseUrl,
    image: `${baseUrl}/images/gustavo-struve.png`,
    sameAs: [site.linkedin, site.facebook, site.instagram, site.youtube],
    worksFor: { "@id": `${baseUrl}/#organization` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#organization`,
    name: `${site.name} ${site.brand}`,
    alternateName: "GSCI",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    image: `${baseUrl}/icon.png`,
    description:
      "Consultoría estratégica en gestión de salud para clínicas e instituciones médicas en Ecuador y Latinoamérica, con software de gestión clínica (KliniQ 24/7) y formación digital.",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quito",
      addressCountry: "EC",
    },
    areaServed: ["Ecuador", "Latinoamérica"],
    founder: personSchema(),
    sameAs: [site.linkedin, site.facebook, site.instagram, site.youtube],
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleSchema(post: BlogPostMeta) {
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${baseUrl}${post.coverImage}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: personSchema(),
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: `${site.name} ${site.brand}`,
      logo: { "@type": "ImageObject", url: `${baseUrl}/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "es-EC",
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "KliniQ 24/7",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Healthcare Practice Management Software",
    operatingSystem: "Web",
    url: `${baseUrl}/kliniq`,
    description: kliniq.pitch,
    offers: kliniq.plans
      .filter((p) => p.desc.includes("$"))
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        priceCurrency: "USD",
        price: p.desc.match(/\$(\d+)/)?.[1],
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.desc.match(/\$(\d+)/)?.[1],
          priceCurrency: "USD",
          unitCode: "MON",
        },
      })),
    provider: { "@id": `${baseUrl}/#organization` },
  };
}
