import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Counter, Marquee, OrbitRings, ParticleField, Reveal, SplitText, Tilt } from "../components/site/motion";
import { domains, horizon, ventures } from "../components/site/data";
import { CtaBand } from "../components/site/CtaBand";
import { AITerminal, HeroAstronaut } from "../components/site/space";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JomoLab® | Future Technology R&D Confederation" },
      { name: "description", content: "JomoLab unites entrepreneurs, scientists, researchers, and industry leaders to build future technologies for 2035 and beyond." },
      { property: "og:title", content: "JomoLab® | Future Technology R&D Confederation" },
      { property: "og:description", content: "Pioneering tomorrow's innovations for a sustainable Earth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden border-b border-border px-5 pb-24 pt-28">
        <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <ParticleField />
        <OrbitRings className="size-[min(96vw,860px)]" />
        <HeroAstronaut className="right-[-4%] top-[14%] w-[min(38vw,460px)] opacity-90" />
        <HeroAstronaut className="left-[-3%] bottom-[8%] w-[min(16vw,180px)] opacity-50 blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="reveal-up mb-7 inline-flex items-center gap-2 border border-primary/30 bg-background/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-accent backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" /> AI-Powered · Future Technology R&amp;D
          </p>
          <h1 className="font-display text-[clamp(3.25rem,8vw,7.8rem)] font-bold leading-[0.88]">
            <SplitText text="The future is built by" /> <SplitText text="visionaries." className="text-gradient" start={700} />
          </h1>
          <p className="reveal-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl" style={{ animationDelay: "1100ms" }}>
            JomoLab uses AI in everything we do — to build products and solve real problems — uniting entrepreneurs, scientists, and leaders to create technologies for 2035 and beyond.
          </p>
          <div className="reveal-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: "1300ms" }}>
            <Link to="/about" className="btn-sweep border border-primary px-6 py-3 font-display text-sm font-bold text-accent">Explore the vision</Link>
            <Link to="/contact" className="px-6 py-3 font-display text-sm font-bold text-muted-foreground transition-colors hover:text-accent">Join the mission →</Link>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-primary/70" aria-hidden="true">
          <ArrowDown className="size-4 animate-bounce" /><span>Initiate scan</span>
        </div>
      </section>

      <Marquee items={horizon} />

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-px bg-border sm:grid-cols-3">
          {[[2035, "", "Innovation horizon"], [5, "+", "Ventures in the ecosystem"], [12, "+", "Future-tech frontiers"]].map(([n, s, l], i) => (
            <Reveal key={l as string} delay={i * 120} className="bg-background p-10">
              <p className="font-display text-6xl font-bold text-gradient md:text-7xl"><Counter to={n as number} suffix={s as string} /></p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border px-5 py-24 md:px-8 md:py-32">
        <div className="aurora absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-screen-2xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">[ AI at the core ]</p>
            <h2 className="section-title">AI in <span className="text-gradient">everything</span> we build.</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">Every JomoLab product starts with AI — from spotting problems and running research to designing, testing, and launching solutions faster than ever.</p>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-px bg-border">
              {["Detect problems", "Build products", "Solve at scale"].map((t, i) => (
                <div key={t} className="bg-background p-5"><span className="font-mono text-[10px] text-primary">AI-0{i + 1}</span><p className="mt-3 font-display text-sm font-bold">{t}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}><AITerminal /></Reveal>
        </div>
      </section>

      <section className="border-y border-border px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div><p className="section-label">[ R&amp;D Core ]</p><h2 className="section-title">Fu-Tech Domains</h2></div>
            <Link to="/domains" className="story-link text-sm text-accent">All domains →</Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map(([id, title, copy], i) => (
              <Reveal key={id} delay={i * 110}>
                <Tilt className="glass-card h-full p-8">
                  <span className="font-mono text-xs text-primary">DMN-{id}</span>
                  <h3 className="mt-14 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div><p className="section-label">[ Ecosystem ]</p><h2 className="section-title">Ideas into impact.</h2></div>
            <Link to="/ecosystem" className="story-link text-sm text-accent">Explore ventures →</Link>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {ventures.map(([code, name], i) => (
              <Reveal key={name} delay={i * 80}>
                <Link to="/ecosystem" className="venture-row group flex items-center justify-between gap-6 py-7">
                  <span className="flex items-center gap-6"><span className="font-mono text-xs text-primary/60">{code}</span><span className="font-display text-2xl font-bold transition-transform duration-500 group-hover:translate-x-4 md:text-4xl">{name}</span></span>
                  <ArrowUpRight className="size-6 text-primary transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
