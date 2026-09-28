import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { domains, horizon } from "../components/site/data";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/domains")({ head: () => ({ meta: [
  { title: "Fu-Tech Research Domains | JomoLab®" },
  { name: "description", content: "Explore JomoLab research across intelligent systems, extended reality, sustainable systems, and human futures." },
  { property: "og:title", content: "Fu-Tech Research Domains | JomoLab®" },
  { property: "og:description", content: "Four research frontiers shaping the world of 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Domains });

function Domains() { return <>
  <PageHero label="02 / Research" title="Fu-Tech Domains" copy="Four connected areas where research, practical experimentation, and venture-building can shape the next decade." />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-screen-2xl divide-y divide-border border-y border-border">{domains.map(([id, title, copy], index) => <Reveal key={id} delay={index * 60} className="grid gap-6 py-10 md:grid-cols-12 md:py-14"><span className="font-mono text-xs text-primary md:col-span-1">DMN-{id}</span><h2 className="font-display text-3xl font-medium md:col-span-4 md:text-4xl">{title}</h2><p className="max-w-xl leading-8 text-muted-foreground md:col-span-6 md:col-start-7">{copy}</p></Reveal>)}</div></section>
  <section className="bg-wash px-5 py-20 md:px-8"><div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12"><Reveal className="lg:col-span-4"><p className="section-label">Wider horizon</p><h2 className="font-display text-3xl font-medium">Connected fields</h2></Reveal><Reveal delay={100} className="flex flex-wrap gap-3 lg:col-span-7 lg:col-start-6">{horizon.map((item) => <span key={item} className="border border-border bg-background px-4 py-3 text-sm text-muted-foreground">{item}</span>)}</Reveal></div></section>
  <CtaBand />
</>; }