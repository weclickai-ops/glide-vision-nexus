import { createFileRoute } from "@tanstack/react-router";
import biosphere from "../assets/sustainable-biosphere.jpg";
import { CtaBand } from "../components/site/CtaBand";
import { vision } from "../components/site/data";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About JomoLab® | Purposeful Future Research" },
  { name: "description", content: "Discover JomoLab's philosophy and its vision for clear, purposeful, sustainable technology." },
  { property: "og:title", content: "About JomoLab® | Purposeful Future Research" },
  { property: "og:description", content: "Technology should simplify life, empower people, and create sustainable progress." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });

function About() { return <>
  <PageHero label="01 / About" title="Clarity over noise." copy="JomoLab is a global Future Technology R&D Confederation created to turn purposeful research into useful, sustainable progress." />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12 lg:items-center">
    <Reveal className="lg:col-span-5"><p className="section-label">Our philosophy</p><h2 className="section-title">From FOMO to JOMO.</h2><p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">The modern world rewards urgency and distraction. We choose meaningful innovation: technology that simplifies life, empowers people, and creates lasting value.</p></Reveal>
    <Reveal delay={100} className="lg:col-span-6 lg:col-start-7"><div className="image-frame overflow-hidden border border-border"><img src={biosphere} alt="Sustainable city research concept" loading="lazy" width={1600} height={1200} className="aspect-[4/3] w-full object-cover" /></div><p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Fig. 01 — Sustainable systems study</p></Reveal>
  </div></section>
  <section className="border-t border-border px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-4"><p className="section-label">Vision / 2035</p><h2 className="section-title">What we are here to advance.</h2></Reveal><div className="divide-y divide-border border-y border-border lg:col-span-7 lg:col-start-6">{vision.map((item, index) => <Reveal key={item} delay={index * 60} className="grid grid-cols-[3rem_1fr] gap-5 py-7"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="font-display text-xl font-medium md:text-2xl">{item}</p></Reveal>)}</div></div></section>
  <CtaBand />
</>; }