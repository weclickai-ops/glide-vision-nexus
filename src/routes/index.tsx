import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import biosphere from "../assets/sustainable-biosphere.jpg";
import { CtaBand } from "../components/site/CtaBand";
import { domains, ventures } from "../components/site/data";
import { ResearchTrace, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JomoLab® | Future Technology R&D Confederation" },
    { name: "description", content: "JomoLab brings researchers, entrepreneurs, and industry leaders together to create sustainable technologies for 2035 and beyond." },
    { property: "og:title", content: "JomoLab® | Future Technology R&D Confederation" },
    { property: "og:description", content: "Pioneering tomorrow's innovations for a sustainable Earth." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="relative min-h-[92svh] overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
      <div className="editorial-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <ResearchTrace className="bottom-[9%] left-[3%] hidden w-[30%] opacity-60 lg:block" />
      <div className="relative mx-auto grid max-w-screen-2xl items-center gap-10 lg:grid-cols-12">
        <div className="z-10 lg:col-span-5">
          <p className="section-label reveal-up">R&amp;D 01 · Global confederation</p>
          <h1 className="reveal-up font-display text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.84] text-primary">Jomo<br />Lab<span className="text-accent">.</span></h1>
          <p className="mt-9 font-display text-xl font-medium md:text-2xl">Fu-tech R&amp;D Confederation</p>
          <div className="my-7 h-px w-24 bg-foreground" />
          <p className="max-w-md text-lg leading-8 text-muted-foreground">Pioneering tomorrow’s innovations for a sustainable Earth.</p>
          <Link to="/domains" className="story-link mt-9 inline-flex items-center gap-3 pb-2 text-sm font-semibold uppercase text-primary">Explore research <ArrowRight className="size-4" /></Link>
        </div>
        <div className="relative lg:col-span-7">
          <div className="image-frame relative mx-auto aspect-square max-w-[680px] overflow-hidden rounded-full border border-border p-4">
            <img src={biosphere} alt="Sustainable future city within a transparent research biosphere" width={1600} height={1200} className="h-full w-full rounded-full object-cover" />
          </div>
          <div className="absolute bottom-[8%] left-0 hidden border border-border bg-background/95 p-4 font-mono text-[9px] uppercase leading-5 text-muted-foreground md:block">Research horizon<br /><span className="text-primary">2035 and beyond</span></div>
        </div>
      </div>
      <ArrowDownRight className="absolute bottom-7 left-5 size-5 text-primary md:left-8" aria-hidden="true" />
    </section>

    <section className="border-y border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><p className="section-label">01 / Purpose</p><h2 className="section-title">Research with direction.</h2></Reveal>
        <Reveal delay={100} className="lg:col-span-7 lg:col-start-6"><p className="text-xl leading-9 text-muted-foreground md:text-3xl md:leading-[1.5]">We unite science, entrepreneurship, and industry to move important ideas from inquiry to real-world impact.</p><Link to="/about" className="story-link mt-8 inline-block pb-2 text-sm font-semibold text-primary">Our philosophy</Link></Reveal>
      </div>
    </section>

    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <Reveal className="grid gap-6 border-b border-border pb-10 lg:grid-cols-12"><p className="section-label lg:col-span-4">02 / Research domains</p><h2 className="section-title lg:col-span-7">Four frontiers for meaningful progress.</h2></Reveal>
        <div className="divide-y divide-border">
          {domains.map(([id, title, copy], index) => <Reveal key={id} delay={index * 60}><Link to="/domains" className="editorial-row grid gap-4 py-8 md:grid-cols-12 md:items-center"><span className="font-mono text-xs text-primary md:col-span-1">{id}</span><h3 className="font-display text-2xl font-medium md:col-span-4 md:text-3xl">{title}</h3><p className="leading-7 text-muted-foreground md:col-span-5">{copy}</p><ArrowRight className="size-5 text-primary md:col-span-2 md:justify-self-end" /></Link></Reveal>)}
        </div>
      </div>
    </section>

    <section className="bg-wash px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><p className="section-label">03 / 2035</p><h2 className="section-title">An ecosystem built for the long term.</h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">Our ventures connect research, immersive experiences, sustainability, convening, and digital capability.</p></Reveal>
        <div className="divide-y divide-border border-y border-border lg:col-span-6 lg:col-start-7">{ventures.map(([code, name], index) => <Reveal key={name} delay={index * 50}><Link to="/ecosystem" className="editorial-row flex items-center justify-between py-6"><span className="font-display text-xl font-medium md:text-2xl">{name}</span><span className="font-mono text-[10px] text-primary">{code}</span></Link></Reveal>)}</div>
      </div>
    </section>
    <CtaBand />
  </>;
}