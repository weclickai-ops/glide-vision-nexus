import { createFileRoute } from "@tanstack/react-router";
import networkImage from "../assets/research-network.jpg";
import { ventures } from "../components/site/data";
import { PageHero, ResearchDiagram, Reveal, SectionHeading } from "../components/site/motion";

export const Route = createFileRoute("/products")({ head: () => ({ meta: [
  { title: "Products & IPs | JomoLab®" },
  { name: "description", content: "Top-Notch Brains To Create Standout Products" },
  { property: "og:title", content: "Products & IPs | JomoLab®" },
  { property: "og:description", content: "JomoLab operates as an innovation ecosystem where ideas evolve into impactful ventures." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Products });

const brands = ["IIMA", "Tata", "Google", "BigBasket", "Government of India", "Arihant Capital", "Dr. Manjunath MS"];

function Products() { return <>
  <PageHero label="Products & IPs" title="Top-Notch Brains To Create Standout Products" copy="JomoLab operates as an innovation ecosystem where ideas evolve into impactful ventures." />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container"><div className="grid gap-4 lg:grid-cols-2">{ventures.map(([code, name, tagline, copy], index) => <Reveal key={name} delay={(index % 2) * 70} className={index === 2 ? "blue-panel relative p-8 lg:col-span-2 md:p-12" : "research-card min-h-96 p-8 md:p-10"}><ResearchDiagram index={index} className="absolute -right-12 -top-12 size-52 opacity-50" /><span className="number-chip">{code}</span><div className="relative mt-20"><h2 className="text-3xl font-medium">{name}</h2><p className="mt-3 font-medium text-primary">{tagline}</p><p className="mt-7 max-w-2xl leading-8 text-muted-foreground">{copy}</p></div></Reveal>)}</div></div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container grid gap-10 lg:grid-cols-12"><Reveal className="lg:col-span-5"><p className="text-2xl leading-[1.6]">Along with our Products &amp; IPs we have conducted the reserach for our Clients &amp; Partners</p><h2 className="mt-16 section-title">Trusted By Visionary Organizations</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">JomoLab and its ecosystem companies have worked with leading institutions, startups, governments, educational organizations, and enterprises.</p></Reveal><Reveal delay={100} className="image-panel min-h-96 lg:col-span-6 lg:col-start-7"><img src={networkImage} alt="Research network structure" width={1600} height={1200} loading="lazy" /></Reveal></div><div className="site-container mt-16"><p className="section-label">Selected Brands</p><div className="grid gap-px overflow-hidden rounded-[18px] bg-border sm:grid-cols-2 lg:grid-cols-4">{brands.map((brand) => <div key={brand} className="min-h-28 bg-background p-6 text-lg font-medium">{brand}</div>)}</div><Reveal className="mt-14 border-t border-border pt-8"><h3 className="text-2xl font-semibold">300+ National &amp; International Organizations Served</h3><p className="mt-4 text-lg text-muted-foreground">Delivering innovation, growth, research, and transformation across multiple industries.</p></Reveal></div></section>
  </>; }