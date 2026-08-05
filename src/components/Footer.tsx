import Image from "next/image";
import { nav, site } from "@/lib/content";

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-mark.svg" alt="" width={28} height={28} className="h-7 w-7" />
            <span className="font-semibold text-sm">
              Gustavo Struve
              <span className="block text-[10px] font-medium tracking-[0.18em] text-text-tertiary uppercase">
                Consultoría Integral
              </span>
            </span>
          </div>

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

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-text-tertiary">
          <span>© {new Date().getFullYear()} Gustavo Struve Consultoría Integral. Todos los derechos reservados.</span>
          <span>{site.domain} · {site.location}</span>
        </div>
      </div>
    </footer>
  );
}
