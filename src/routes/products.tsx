import { createFileRoute } from "@tanstack/react-router";
import { ventures } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/products")({ head: () => ({ meta: [
  { title: "Products & IPs | JomoLab®" },
  { name: "description", content: "Top-Notch Brains To Create Standout Products" },
  { property: "og:title", content: "Products & IPs | JomoLab®" },
  { property: "og:description", content: "JomoLab operates as an innovation ecosystem where ideas evolve into impactful ventures." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Products });

const brands = ["IIMA", "Tata", "Google", "BigBasket", "Government of India", "Arihant Capital", "Dr. Manjunath MS"];

function Products() { return <>
  <PageHero label="Page 4 / Products & IPs" title="Top-Notch Brains To Create Standout Products" copy="JomoLab operates as an innovation ecosystem where ideas evolve into impactful ventures." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl border-t border-foreground">{ventures.map(([code, name, tagline, copy], index) => <Reveal key={name} delay={index * 40}><article className="editorial-row grid gap-7 border-b border-border py-10 lg:grid-cols-12 lg:items-start"><span className="font-mono text-xs text-primary lg:col-span-1">{code}</span><div className="hidden size-20 border border-border p-3 lg:col-span-1 lg:block"><ResearchDiagram index={index} /></div><div className="lg:col-span-4"><h2 className="text-3xl font-medium">{name}</h2><p className="mt-2 font-semibold text-primary">{tagline}</p></div><p className="leading-8 text-muted-foreground lg:col-span-6">{copy}</p></article></Reveal>)}</div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl"><Reveal><p className="max-w-4xl text-2xl leading-[1.6]">Along with our Products &amp; IPs we have conducted the reserach for our Clients &amp; Partners</p><h2 className="mt-16 section-title">Trusted By Visionary Organizations</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">JomoLab and its ecosystem companies have worked with leading institutions, startups, governments, educational organizations, and enterprises.</p><p className="section-label mt-12">Selected Brands</p></Reveal><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{brands.map((brand) => <div key={brand} className="min-h-28 border-b border-r border-border bg-background p-6 text-lg font-medium">{brand}</div>)}</div><Reveal className="mt-14 border-t border-foreground pt-8"><h3 className="text-2xl font-semibold">300+ National &amp; International Organizations Served</h3><p className="mt-4 text-lg text-muted-foreground">Delivering innovation, growth, research, and transformation across multiple industries.</p></Reveal></div></section>
</>; }