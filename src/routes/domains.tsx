import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { domains, horizon } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/domains")({ head: () => ({ meta: [
  { title: "Fu-Tech Research Domains | JomoLab®" },
  { name: "description", content: "Explore JomoLab research across intelligent systems, extended reality, sustainable systems, and human futures." },
  { property: "og:title", content: "Fu-Tech Research Domains | JomoLab®" },
  { property: "og:description", content: "Four research frontiers shaping the world of 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Domains });

function Domains() { return <>
  <PageHero label="02 / Research index" title="Fu-Tech domains." copy="Four connected areas where research, practical experimentation, and venture-building can shape the next decade." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl grid bg-border md:grid-cols-2 md:gap-px lg:grid-cols-4">
    {domains.map(([id, title, copy], index) => <Reveal key={id} delay={index * 50} className="research-card"><article className="flex h-full min-h-[34rem] flex-col p-7"><div className="aspect-square border border-border bg-background p-7"><ResearchDiagram index={index} /></div><p className="mt-7 font-mono text-[9px] uppercase text-primary">Domain / {id}</p><h2 className="mt-3 font-display text-2xl font-medium">{title}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p><div className="mt-auto border-t border-border pt-4 font-mono text-[9px] uppercase text-muted-foreground">Research horizon / 2035+</div></article></Reveal>)}
  </div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8"><div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12"><Reveal className="lg:col-span-4"><p className="section-label">Wider horizon</p><h2 className="section-title">Connected fields.</h2></Reveal><Reveal delay={80} className="grid border-l border-t border-border sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-4">{horizon.map((item, index) => <span key={item} className="min-h-24 border-b border-r border-border bg-background p-4 font-mono text-[10px] uppercase text-muted-foreground"><span className="mb-5 block text-primary">H-{String(index + 1).padStart(2, "0")}</span>{item}</span>)}</Reveal></div></section>
  <CtaBand />
</>; }