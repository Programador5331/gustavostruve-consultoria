import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Gustavo Struve Consultoría Integral`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 pb-28">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Blog
          </Link>

          <p className="mt-8 text-xs text-text-tertiary">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            {post.title}
          </h1>

          <div
            className="prose-blog mt-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 pt-8 border-t border-border">
            <a
              href="https://meetings.hubspot.com/gstruve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-[#04140f] hover:bg-white transition-colors"
            >
              Agendar una llamada de 20 minutos
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
