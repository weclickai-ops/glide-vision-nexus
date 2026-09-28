import { createFileRoute } from "@tanstack/react-router";
import { Marquee, PageHero, Reveal, Tilt } from "../components/site/motion";
import { domains, horizon } from "../components/site/data";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/domains")({
  head: () => ({
    meta: [
      { title: "Fu-Tech Domains | JomoLab® R&D" },
      { name: "description", content: "AI, extended reality, sustainable systems, and human futures — JomoLab's core research domains." },
      { property: "og:title", content: "Fu-Tech Domains | JomoLab® R&D" },
      { property: "og:description", content: "The research frontiers shaping the world of 2035." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Domains,
});

function Domains() {
  return (
    <>
      <PageHero label="[ 02 / R&D Core ]" title="Fu-Tech Domains" copy="Four core frontiers where JomoLab researches, builds, and launches technologies for the next decade." />
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-6 md:grid-cols-2">
          {domains.map(([id, title, copy], i) => (
            <Reveal key={id} delay={(i % 2) * 150}>
              <Tilt className="glass-card group relative h-full overflow-hidden p-10 md:p-14">
                <span className="absolute -right-4 -top-8 font-display text-[10rem] font-bold leading-none text-primary/10 transition-transform duration-700 group-hover:-translate-y-3">{id}</span>
                <span className="font-mono text-xs text-primary">DMN-{id}</span>
                <h2 className="relative mt-24 font-display text-4xl font-bold">{title}</h2>
                <p className="relative mt-5 max-w-md leading-relaxed text-muted-foreground">{copy}</p>
                <div className="mt-10 h-px w-12 bg-primary transition-all duration-700 group-hover:w-full group-hover:bg-accent" />
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal className="px-5 pb-10 text-center md:px-8"><p className="section-label">Wider horizon</p></Reveal>
      <Marquee items={horizon} />
      <CtaBand />
    </>
  );
}
