import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "../components/site/CtaBand";
import { domains, ventures } from "../components/site/data";
import { ResearchDiagram, ResearchTrace, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JomoLab® | Fu-Tech R&D Confederation" },
    { name: "description", content: "A global Future Technology R&D Confederation connecting research, enterprise, and industry for 2035 and beyond." },
    { property: "og:title", content: "JomoLab® | Fu-Tech R&D Confederation" },
    { property: "og:description", content: "Researching and building future technologies for sustainable progress." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-screen-2xl border-t border-foreground pt-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-label reveal-up">Global research infrastructure / 2035+</p>
            <h1 className="reveal-up max-w-5xl font-display text-[clamp(3.4rem,7.4vw,7.5rem)] font-light leading-[.98]">Fu-Tech <span className="font-semibold">R&amp;D Confederation</span></h1>
          </div>
          <div className="lg:col-span-4">
            <p className="border-l border-border pl-5 text-lg leading-8 text-muted-foreground">JomoLab unites entrepreneurs, scientists, researchers, innovators, and industry leaders to build technologies for 2035 and beyond.</p>
            <Link to="/domains" className="story-link mt-8 inline-flex items-center gap-3 pb-2 font-mono text-[10px] uppercase text-primary">Explore research <ArrowRight className="size-4" /></Link>
          </div>
        </div>
        <div className="mt-16 grid border border-border bg-border md:grid-cols-4 md:gap-px">
          {domains.map(([id, title], index) => <Link key={id} to="/domains" className="research-card group flex min-h-44 flex-col justify-between border-b border-border p-6 last:border-b-0 md:border-b-0">
            <div className="flex items-start justify-between"><span className="font-mono text-[9px] text-primary">DMN-{id}</span><div className="size-16"><ResearchDiagram index={index} /></div></div>
            <div className="flex items-end justify-between gap-4"><h2 className="max-w-[12rem] font-display text-lg font-medium">{title}</h2><ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="border-y border-foreground px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><p className="section-label">Mandate / 01</p><h2 className="section-title">Research with direction.</h2></Reveal>
        <Reveal delay={80} className="lg:col-span-7 lg:col-start-6"><p className="text-2xl leading-[1.5] text-muted-foreground md:text-3xl">We connect inquiry with enterprise so consequential ideas can move from observation to practical, sustainable outcomes.</p><Link to="/about" className="story-link mt-8 inline-flex items-center gap-2 pb-2 text-sm font-semibold text-primary">Read our mandate <ArrowRight className="size-4" /></Link></Reveal>
      </div>
    </section>

    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <Reveal className="grid gap-8 border-b border-foreground pb-9 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="section-label">Ecosystem / 02</p><h2 className="section-title">Research translated into action.</h2></div><p className="max-w-md leading-7 text-muted-foreground lg:col-span-4 lg:col-start-9">Five connected initiatives carry ideas into products, experiences, advocacy, and global exchange.</p></Reveal>
        <div className="grid bg-border md:grid-cols-2 md:gap-px lg:grid-cols-5">
          {ventures.map(([code, name, copy], index) => <Reveal key={name} delay={index * 45} className="research-card"><Link to="/ecosystem" className="flex h-full min-h-72 flex-col p-6"><span className="font-mono text-[9px] text-primary">INITIATIVE / {code}</span><h3 className="mt-12 font-display text-xl font-medium">{name}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p><ArrowRight className="mt-auto size-4 self-end text-primary" /></Link></Reveal>)}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden border-t border-border bg-wash px-5 py-20 md:px-8 md:py-24">
      <ResearchTrace className="bottom-4 right-8 hidden w-[42%] lg:block" />
      <Reveal className="relative mx-auto max-w-screen-2xl"><p className="section-label">Method / 03</p><p className="max-w-4xl font-display text-[clamp(2rem,4vw,4.5rem)] font-light leading-[1.15]">Observe the signals. Test the possibilities. Apply what improves human and planetary futures.</p></Reveal>
    </section>
    <CtaBand />
  </>;
}