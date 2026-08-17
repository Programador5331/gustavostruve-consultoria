import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Gustavo Struve Consultoría Integral",
  description:
    "Ideas y casos prácticos sobre gestión de salud, transformación digital y liderazgo en instituciones médicas.",
};

function formatDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-teal mb-4">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
            Ideas sobre gestión de salud, sin relleno.
          </h1>

          {posts.length === 0 ? (
            <p className="mt-14 text-text-secondary">
              Próximamente el primer artículo. Mientras tanto,{" "}
              <a
                href="https://meetings.hubspot.com/gstruve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                agenda una llamada
              </a>
              .
            </p>
          ) : (
            <div className="mt-16 divide-y divide-border border-t border-b border-border">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block py-8"
                >
                  <span className="text-xs text-text-tertiary">
                    {formatDate(post.date)} · {post.readingTime}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight group-hover:text-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-text-secondary leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
