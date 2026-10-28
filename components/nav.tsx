import { site } from "@/lib/content";
import { Container } from "./ui";

const links = [
  { href: "#work", label: "Work" },
  { href: "#ai", label: "Applied AI" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-serif text-lg italic leading-none text-paper">
            S
          </span>
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-2 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="hidden rounded-full border border-ink px-4 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper md:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile menu — no JS needed */}
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Close</span>
          </summary>
          <nav
            className="absolute right-0 mt-3 flex w-48 flex-col rounded-xl border border-line bg-paper p-2 shadow-lg"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm hover:bg-paper-2">
                {l.label}
              </a>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
