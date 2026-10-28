import {
  aiPortfolio,
  approach,
  certifications,
  education,
  experience,
  hero,
  metrics,
  partners,
  site,
  skills,
  work,
  writing,
} from "@/lib/content";
import { Nav } from "@/components/nav";
import { ArrowUpRight, Container, ExternalLink, Section } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Metrics />
        <Work />
        <AppliedAI />
        <Approach />
        <Experience />
        <Skills />
        <Writing />
        <Education />
        <Contact />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* decorative orbit */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -top-24 h-[640px] w-[640px] text-line opacity-80 sm:-right-24"
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" />
        <circle cx="300" cy="300" r="210" fill="none" stroke="currentColor" />
        <circle cx="300" cy="300" r="130" fill="none" stroke="currentColor" strokeDasharray="2 6" />
        <circle cx="510" cy="300" r="6" className="fill-accent" />
        <circle cx="170" cy="300" r="4" fill="currentColor" />
      </svg>

      <Container className="relative">
        <p className="rise flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="live-dot h-2 w-2 rounded-full bg-accent" />
          {hero.eyebrow} · {site.location}
        </p>

        <h1 className="rise mt-8 max-w-5xl font-serif text-[clamp(2.9rem,8.5vw,7.25rem)] leading-[0.95] tracking-[-0.02em] [animation-delay:80ms]">
          {hero.headline[0]}
          <br />
          <em className="text-accent">{hero.headline[1]}</em> {hero.headline[2]}
        </h1>

        <div className="rise mt-12 grid gap-10 [animation-delay:160ms] md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-2 md:col-span-7">{hero.summary}</p>
          <div className="md:col-span-4 md:col-start-9">
            <div className="rounded-2xl border border-line bg-paper-2/60 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Now</p>
              <p className="mt-2 leading-snug">{hero.now}</p>
            </div>
          </div>
        </div>

        <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Email me
          </a>
          <a
            href="/Satyabrata_Mishra_Resume.pdf"
            target="_blank"
            className="rounded-full border border-ink px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Download résumé
          </a>
          <ExternalLink href={site.links.linkedin} className="px-3 py-2.5 text-sm text-ink-2 hover:text-accent">
            LinkedIn
          </ExternalLink>
          <ExternalLink href={site.links.medium} className="px-3 py-2.5 text-sm text-ink-2 hover:text-accent">
            Medium
          </ExternalLink>
        </div>
      </Container>
    </section>
  );
}

function Metrics() {
  return (
    <section aria-label="Impact at a glance" className="border-y border-line bg-paper-2">
      <Container>
        <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-paper-2 px-4 py-8 sm:px-5">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="font-serif text-5xl tracking-tight">
                  {m.value}
                  {m.unit && <span className="ml-1 text-2xl text-muted">{m.unit}</span>}
                </span>
                <p className="mt-2 text-[13px] leading-snug text-muted">{m.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title={
        <>
          Products shipped, programs built — <em className="text-muted">measured by adoption.</em>
        </>
      }
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {work.map((w) => (
          <article key={w.title} className="flex flex-col bg-paper p-7 transition-colors hover:bg-paper-2/70">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{w.kicker}</p>
            <h3 className="mt-3 text-xl font-medium leading-snug tracking-tight">{w.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              <span className="text-ink-2">The problem: </span>
              {w.problem}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              <span className="text-ink-2">What I did: </span>
              {w.did}
            </p>
            {w.href && (
              <ExternalLink href={w.href} className="mt-4 text-sm text-accent hover:underline">
                See it live
              </ExternalLink>
            )}
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {w.results.map((r) => (
                <li key={r} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-2">
                  {r}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function AppliedAI() {
  return (
    <Section
      id="ai"
      index="02"
      label="Applied AI"
      title={
        <>
          Bringing GenAI and agents <em className="text-accent">to where the data lives.</em>
        </>
      }
    >
      <p className="-mt-6 mb-10 max-w-2xl text-lg leading-relaxed text-ink-2">{aiPortfolio.intro}</p>
      <ol className="divide-y divide-line border-y border-line">
        {aiPortfolio.items.map((item, i) => (
          <li key={item.name} className="group grid grid-cols-12 items-baseline gap-4 py-6">
            <span className="col-span-2 font-mono text-xs text-muted sm:col-span-1">0{i + 1}</span>
            <div className="col-span-10 sm:col-span-5">
              <h3 className="font-serif text-3xl tracking-tight transition-colors group-hover:text-accent">
                {item.name}
              </h3>
            </div>
            <p className="col-span-10 col-start-3 text-[15px] leading-relaxed text-muted sm:col-span-4 sm:col-start-auto">
              {item.text}
            </p>
            <span className="col-span-10 col-start-3 font-mono text-[11px] uppercase tracking-widest text-ink-2 sm:col-span-2 sm:col-start-auto sm:text-right">
              {item.tag}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Approach() {
  return (
    <Section
      id="approach"
      index="03"
      label="How I work"
      title={
        <>
          A product isn&apos;t done at launch. <em className="text-muted">It&apos;s done when it&apos;s adopted.</em>
        </>
      }
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {approach.map((a) => (
          <div key={a.name} className="relative border-t-2 border-ink pt-5">
            <p className="font-mono text-xs text-accent">{a.step}</p>
            <h3 className="mt-2 text-xl font-medium">{a.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{a.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Partners &amp; alliances I&apos;ve worked with</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {partners.map((p) => (
            <li key={p} className="font-serif text-2xl text-ink-2">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" title="Eleven years, from the database up.">
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h3 className="mt-2 font-serif text-4xl tracking-tight">{job.company}</h3>
              <p className="mt-1 text-sm text-ink-2">{job.role}</p>
              <p className="text-sm text-muted">{job.location}</p>
            </div>
            <div className="sm:col-span-8">
              <p className="leading-relaxed text-ink-2">{job.summary}</p>
              <ul className="mt-5 space-y-3">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden className="mt-[0.6em] h-px w-4 shrink-0 bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" index="05" label="Toolkit">
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="text-sm font-medium">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li key={it} className="rounded-md bg-paper-2 px-2.5 py-1 text-[13px] text-ink-2">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Writing() {
  return (
    <Section id="writing" index="06" label="Writing" title="Notes from the field.">
      <div className="grid gap-5 sm:grid-cols-2">
        {writing.map((w) => (
          <div key={w.outlet} className="flex flex-col rounded-2xl border border-line p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl tracking-tight">{w.outlet}</h3>
              <ExternalLink href={w.href} className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-accent">
                All posts
              </ExternalLink>
            </div>
            <ul className="mt-6">
              {w.articles.map((a) => (
                <li key={a.href} className="border-t border-line">
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 py-3 text-[15px] leading-snug text-ink-2 transition-colors hover:text-accent"
                  >
                    <span>
                      {a.title}
                      {a.note && <span className="ml-2 font-mono text-[11px] text-muted">{a.note}</span>}
                    </span>
                    <ArrowUpRight className="mt-1 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" index="07" label="Education & certifications">
      <div className="grid gap-10 sm:grid-cols-2">
        <ul className="space-y-6">
          {education.map((e) => (
            <li key={e.title}>
              <p className="font-mono text-xs text-muted">{e.year}</p>
              <p className="mt-1 text-lg font-medium leading-snug">{e.title}</p>
              <p className="text-[15px] text-muted">{e.org}</p>
            </li>
          ))}
        </ul>
        <ul className="divide-y divide-line border-y border-line">
          {certifications.map((c) => (
            <li key={c} className="flex items-center gap-3 py-3 text-[15px] text-ink-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-ink text-paper">
      <Container className="py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
          <span className="text-accent">08</span> — Contact
        </p>
        <h2 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
          Building in data, cloud or AI? <em className="text-accent">Let&apos;s talk.</em>
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block break-all border-b border-paper/30 pb-1 text-xl transition-colors hover:border-accent hover:text-accent sm:text-2xl"
        >
          {site.email}
        </a>
        <p className="mt-8 max-w-xl text-paper/60">{hero.openTo}</p>
        <div className="mt-20 flex flex-col gap-6 border-t border-paper/15 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.location}
          </p>
          <div className="flex gap-6">
            <ExternalLink href={site.links.linkedin} className="hover:text-paper">LinkedIn</ExternalLink>
            <ExternalLink href={site.links.medium} className="hover:text-paper">Medium</ExternalLink>
            <ExternalLink href={site.links.oracleBlog} className="hover:text-paper">Oracle Blog</ExternalLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
