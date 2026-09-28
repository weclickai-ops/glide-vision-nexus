import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { vision } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About the Confederation | JomoLab®" },
  { name: "description", content: "Learn why JomoLab connects research, enterprise, and industry around purposeful future technology." },
  { property: "og:title", content: "About the Confederation | JomoLab®" },
  { property: "og:description", content: "A research confederation built to turn purposeful inquiry into sustainable progress." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });

function About() { return <>
  <PageHero label="01 / Institutional mandate" title="Clarity over noise." copy="JomoLab is a global Future Technology R&D Confederation created to turn purposeful research into useful, sustainable progress." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
    <Reveal className="lg:col-span-5"><p className="section-label">Our philosophy</p><h2 className="section-title">From FOMO to JOMO.</h2></Reveal>
    <Reveal delay={80} className="lg:col-span-6 lg:col-start-7"><p className="text-2xl leading-[1.5] text-muted-foreground">The modern world rewards urgency and distraction. We choose meaningful innovation: technology that simplifies life, empowers people, and creates lasting value.</p><div className="mt-12 aspect-[2/1] border border-border bg-card p-8"><ResearchDiagram index={1} /></div><p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Study framework / Signal to application</p></Reveal>
  </div></section>
  <section className="border-t border-foreground px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl"><Reveal className="grid gap-8 border-b border-border pb-9 lg:grid-cols-12"><div className="lg:col-span-5"><p className="section-label">Vision / 2035</p><h2 className="section-title">What we are here to advance.</h2></div><p className="max-w-md leading-7 text-muted-foreground lg:col-span-4 lg:col-start-8">A shared framework for research that can move beyond the laboratory.</p></Reveal><div className="grid bg-border md:grid-cols-2 md:gap-px">{vision.map((item, index) => <Reveal key={item} delay={index * 50} className="research-card grid min-h-48 grid-cols-[3rem_1fr] gap-5 p-7"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="font-display text-2xl font-medium">{item}</p></Reveal>)}</div></div></section>
  <CtaBand />
</>; }