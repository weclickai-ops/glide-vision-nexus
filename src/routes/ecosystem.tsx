import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "../components/site/CtaBand";
import { ventures } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/ecosystem")({ head: () => ({ meta: [
  { title: "Ecosystem & Ventures | JomoLab®" },
  { name: "description", content: "Explore the ventures and initiatives that turn JomoLab research into products, platforms, and global conversations." },
  { property: "og:title", content: "Ecosystem & Ventures | JomoLab®" },
  { property: "og:description", content: "A connected family of ventures turning ideas into impact." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Ecosystem });

function Ecosystem() { return <>
  <PageHero label="03 / Applied research" title="Ideas into impact." copy="A connected family of ventures translating research into products, experiences, advocacy, and shared progress." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl border-t border-foreground">
    {ventures.map(([code, name, copy], index) => <Reveal key={name} delay={index * 45}><article className="editorial-row grid gap-8 border-b border-border py-9 md:grid-cols-12 md:items-center"><span className="font-mono text-[9px] text-primary md:col-span-1">{code}</span><div className="hidden aspect-square size-20 border border-border p-3 md:col-span-1 md:block"><ResearchDiagram index={index} /></div><h2 className="font-display text-3xl font-medium md:col-span-3">{name}</h2><p className="max-w-xl leading-7 text-muted-foreground md:col-span-5">{copy}</p><ArrowUpRight className="size-5 text-primary md:col-span-2 md:justify-self-end" /></article></Reveal>)}
  </div></section>
  <CtaBand />
</>; }