import { createFileRoute } from "@tanstack/react-router";
import orbitalResearch from "../assets/orbital-research.jpg";
import { PageHero, Reveal, Tilt } from "../components/site/motion";
import { vision } from "../components/site/data";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JomoLab® | From FOMO to JOMO" },
      { name: "description", content: "JomoLab's philosophy and 2035 vision: technology that brings clarity, purpose, and sustainable progress." },
      { property: "og:title", content: "About JomoLab® | From FOMO to JOMO" },
      { property: "og:description", content: "Technology should simplify life, empower people, and create sustainable progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero label="[ 01 / Philosophy ]" title="From FOMO to JOMO" copy="The modern world is driven by fear, distraction, and information overload. JOMO represents clarity, purpose, and meaningful innovation." />
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="section-title">Technology that makes life <span className="text-gradient">better.</span></h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">We believe technology should simplify life, empower people, and create sustainable progress—not more digital chaos.</p>
          </Reveal>
          <Reveal delay={150}>
            <Tilt className="relative">
              <div className="scan-img relative overflow-hidden border border-border">
                <img src={orbitalResearch} alt="Orbital visualization representing purposeful future research" loading="lazy" width={1600} height={1200} className="kenburns aspect-[4/3] w-full object-cover" />
              </div>
              <span className="absolute -left-3 -top-3 size-10 border-l border-t border-accent" />
              <span className="absolute -bottom-3 -right-3 size-10 border-b border-r border-accent" />
            </Tilt>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-border px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><p className="section-label">[ Vision / 2035 ]</p><h2 className="section-title">Building the future together.</h2></Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {vision.map((item, i) => (
              <Reveal key={item} delay={i * 120}>
                <Tilt className="glass-card h-full p-8"><span className="font-mono text-xs text-primary">0{i + 1}</span><p className="mt-10 font-display text-xl font-medium">{item}</p></Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
