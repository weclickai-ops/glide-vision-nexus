import { createFileRoute } from "@tanstack/react-router";
import materialsLab from "../assets/future-materials-lab.jpg";
import { domains } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal, SectionHeading } from "../components/site/motion";

export const Route = createFileRoute("/domains")({ head: () => ({ meta: [
  { title: "Fu-Tech Research Domains | JomoLab®" },
  { name: "description", content: "Explore JomoLab research across intelligent systems, extended reality, sustainable systems, and human futures." },
  { property: "og:title", content: "Fu-Tech Research Domains | JomoLab®" },
  { property: "og:description", content: "Four research frontiers shaping the world of 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Domains });

function Domains() { return <>
  <PageHero label="Page 2" title="What is Fu-Tech?" copy="Future Technology Beyond AI The future is not limited to Artificial Intelligence." />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center"><Reveal className="lg:col-span-5"><p className="text-3xl font-light leading-snug md:text-4xl">True innovation requires breakthroughs across every aspect of human life.</p></Reveal><Reveal delay={100} className="image-panel aspect-[4/3] lg:col-span-6 lg:col-start-7"><img src={materialsLab} alt="Future materials research in a laboratory" width={1600} height={1200} loading="lazy" /></Reveal></div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container"><Reveal><SectionHeading eyebrow="Fu-Tech Includes" title="Research for the world of 2035" /></Reveal><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{domains.map((title, index) => <Reveal key={title} delay={(index % 3) * 55} className="research-card min-h-64 p-7"><ResearchDiagram index={index} className="absolute -right-8 -top-8 size-40 opacity-60" /><span className="number-chip">{String(index + 1).padStart(2, "0")}</span><h2 className="absolute bottom-7 left-7 right-7 text-xl font-medium">{title}</h2></Reveal>)}</div></div></section>
  <section className="px-5 py-20 md:px-8 md:py-28"><Reveal className="site-container blue-panel p-8 md:p-14"><p className="max-w-5xl text-2xl font-light leading-[1.6] md:text-4xl">We believe every industry will undergo transformation before 2035. JomoLab exists to accelerate that transformation through research, collaboration, and innovation.</p></Reveal></section>
  </>; }