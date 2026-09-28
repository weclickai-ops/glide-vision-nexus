import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { advisors } from "../components/site/data";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/leadership")({ head: () => ({ meta: [
  { title: "Leadership & Advisory Board | JomoLab®" },
  { name: "description", content: "Meet Chief Thinker Ratnesh Dwivedi and the advisory board guiding JomoLab." },
  { property: "og:title", content: "Leadership & Advisory Board | JomoLab®" },
  { property: "og:description", content: "Experienced minds united by a shared vision for 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Leadership });

function Leadership() { return <>
  <PageHero label="04 / Leadership" title="A shared point of view." copy="Founders, researchers, and industry leaders helping JomoLab connect long-term thinking with practical action." />
  <section className="px-5 py-20 md:px-8 md:py-28"><Reveal className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12"><p className="section-label lg:col-span-3">Chief Thinker</p><div className="lg:col-span-8"><blockquote className="font-display text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.15]">“Technology should not only make life smarter—it should make life better.”</blockquote><p className="mt-9 font-semibold">Ratnesh Dwivedi</p><p className="mt-1 text-sm text-muted-foreground">Chief Thinker, JomoLab®</p></div></Reveal></section>
  <section className="border-t border-border px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-3"><p className="section-label">Advisory board</p><h2 className="font-display text-3xl font-medium">Experience across industries and regions.</h2></Reveal><div className="divide-y divide-border border-y border-border lg:col-span-8 lg:col-start-5">{advisors.map(([name, role], index) => <Reveal key={name} delay={index * 60} className="grid gap-2 py-7 md:grid-cols-[3rem_1fr_1fr]"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="font-display text-xl font-medium">{name}</h3><p className="text-sm leading-6 text-muted-foreground">{role}</p></Reveal>)}</div></div></section>
  <CtaBand />
</>; }