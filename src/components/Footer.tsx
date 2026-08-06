import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.5 6.7a2.8 2.8 0 0 0-2-2C18.7 4.2 12 4.2 12 4.2s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.3 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.3zM9.8 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

const socials = (site: { linkedin: string; facebook: string; instagram: string; youtube: string }) => [
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <Link href="/#top" className="flex items-center gap-3">
            <Image src="/images/logo-mark.png" alt="" width={20} height={28} className="h-7 w-auto" />
            <span className="font-semibold text-sm">
              Gustavo Struve
              <span className="block text-[10px] font-medium tracking-[0.18em] text-text-tertiary uppercase">
                Consultoría Integral
              </span>
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials(site).map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-text-tertiary">
          <span>© {new Date().getFullYear()} Gustavo Struve Consultoría Integral. Todos los derechos reservados.</span>
          <span>{site.domain} · {site.location}</span>
        </div>
      </div>
    </footer>
  );
}
