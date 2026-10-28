import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span className="text-accent">{index}</span> — {label}
            </p>
          </div>
          <div className="md:col-span-9">
            {title && (
              <h2 className="mb-12 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`h-3.5 w-3.5 ${className}`}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
      <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
