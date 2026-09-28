import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { OrbitRings, ParticleField, Reveal, SplitText } from "../components/site/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join the Confederation | JomoLab®" },
      { name: "description", content: "Entrepreneurs, researchers, investors, and innovators — join JomoLab and architect the next decade." },
      { property: "og:title", content: "Join the Confederation | JomoLab®" },
      { property: "og:description", content: "The future has a place for you. Contact team@jomolab.co." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const roles = ["Entrepreneurs", "Researchers", "Scientists", "Investors", "Leaders", "Innovators"];

function Contact() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-24 pt-32 md:px-8">
      <div className="aurora absolute inset-0" aria-hidden="true" />
      <ParticleField />
      <OrbitRings className="size-[min(96vw,820px)]" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="section-label reveal-up">Confederation channel open</p>
        <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.9]"><SplitText text="Architect the" /> <SplitText text="next decade." className="text-gradient" start={400} /></h1>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {roles.map((r, i) => (
            <span key={r} className="reveal-up border border-border bg-background/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur" style={{ animationDelay: `${800 + i * 90}ms` }}>{r}</span>
          ))}
        </div>
        <Reveal delay={300}>
          <a href="mailto:team@jomolab.co" className="btn-sweep group mt-14 inline-flex items-center gap-4 border border-primary px-8 py-5 font-display text-lg font-bold text-accent">
            team@jomolab.co <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
