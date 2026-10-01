import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact JomoLab® | Join the Confederation" },
  { name: "description", content: "Website: jomolab.co Email: ratnesh@jomolab.in" },
  { property: "og:title", content: "Contact JomoLab® | Join the Confederation" },
  { property: "og:description", content: "Future Begins Here. Join The Confederation." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Contact });

function Contact() { return <>
  <PageHero label="Page 5" title="Connect Us" copy="Future Begins Here." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12">
    <Reveal className="lg:col-span-6"><p className="section-label">Website</p><a href="https://jomolab.co" className="story-link inline-flex items-center gap-3 pb-3 font-display text-3xl font-medium text-primary md:text-5xl">jomolab.co <ArrowUpRight className="size-6" /></a></Reveal>
    <Reveal delay={80} className="lg:col-span-6"><p className="section-label">Email</p><a href="mailto:ratnesh@jomolab.in" className="story-link inline-flex items-center gap-3 pb-3 font-display text-2xl font-medium text-primary md:text-4xl">ratnesh@jomolab.in <ArrowUpRight className="size-6" /></a></Reveal>
  </div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8 md:py-24"><Reveal className="mx-auto max-w-screen-2xl"><h2 className="section-title">Future Begins Here.</h2><p className="mt-8 text-2xl font-medium text-primary">Join The Confederation</p></Reveal></section>
</>; }