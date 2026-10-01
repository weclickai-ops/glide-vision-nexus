import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import collaborationImage from "../assets/research-collaboration.jpg";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact JomoLab® | Join the Confederation" },
  { name: "description", content: "Website: jomolab.co Email: ratnesh@jomolab.in" },
  { property: "og:title", content: "Contact JomoLab® | Join the Confederation" },
  { property: "og:description", content: "Future Begins Here. Join The Confederation." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Contact });

function Contact() { return <>
  <PageHero title="Connect Us" />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container grid gap-4 lg:grid-cols-2"><Reveal className="soft-panel p-8 md:p-12"><p className="section-label">Website</p><a href="https://jomolab.co" className="story-link mt-12 pb-3 text-3xl font-medium text-primary md:text-5xl">jomolab.co <ArrowUpRight className="size-6" /></a></Reveal><Reveal delay={80} className="blue-panel p-8 md:p-12"><p className="section-label">Email</p><a href="mailto:ratnesh@jomolab.in" className="story-link mt-12 break-all pb-3 text-2xl font-medium text-primary md:text-4xl">ratnesh@jomolab.in <ArrowUpRight className="size-6 shrink-0" /></a></Reveal></div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container grid gap-4 lg:grid-cols-12"><Reveal className="image-panel min-h-96 lg:col-span-7"><img src={collaborationImage} alt="Researchers shaping the future together" width={1600} height={1200} loading="lazy" /></Reveal><Reveal delay={100} className="soft-panel flex min-h-96 flex-col justify-end p-8 md:p-12 lg:col-span-5"><h2 className="section-title">Future Begins Here.</h2><p className="mt-8 text-2xl font-medium text-primary">Join The Confederation</p></Reveal></div></section>
  </>; }