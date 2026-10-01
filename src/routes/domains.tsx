import { createFileRoute } from "@tanstack/react-router";
import { domains } from "../components/site/data";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/domains")({ head: () => ({ meta: [
  { title: "Fu-Tech Research Domains | JomoLab®" },
  { name: "description", content: "Explore JomoLab research across intelligent systems, extended reality, sustainable systems, and human futures." },
  { property: "og:title", content: "Fu-Tech Research Domains | JomoLab®" },
  { property: "og:description", content: "Four research frontiers shaping the world of 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Domains });

function Domains() { return <>
  <PageHero label="Page 2" title="What is Fu-Tech?" copy="Future Technology Beyond AI The future is not limited to Artificial Intelligence." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl"><Reveal><p className="max-w-4xl font-display text-3xl leading-snug">True innovation requires breakthroughs across every aspect of human life.</p></Reveal><Reveal className="mt-16"><p className="section-label">Fu-Tech Includes</p><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{domains.map((title, index) => <div key={title} className="research-card min-h-36 border-b border-r border-border p-6"><span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-7 text-lg font-medium">{title}</h2></div>)}</div></Reveal></div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8 md:py-24"><Reveal className="mx-auto max-w-screen-2xl"><p className="max-w-4xl text-2xl leading-[1.6] text-muted-foreground">We believe every industry will undergo transformation before 2035. JomoLab exists to accelerate that transformation through research, collaboration, and innovation.</p></Reveal></section>
</>; }