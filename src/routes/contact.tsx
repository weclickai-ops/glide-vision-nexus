import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact JomoLab® | Join the Confederation" },
  { name: "description", content: "Connect with JomoLab to collaborate on research, ventures, and future technology." },
  { property: "og:title", content: "Contact JomoLab® | Join the Confederation" },
  { property: "og:description", content: "Start a conversation with JomoLab at team@jomolab.co." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Contact });

const roles = ["Entrepreneurs", "Researchers", "Scientists", "Investors", "Industry leaders", "Innovators"];

function Contact() { return <>
  <PageHero label="05 / Open collaboration" title="Build the next decade with us." copy="We welcome thoughtful conversations with people and organizations working on research, technology, and sustainable progress." />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12">
    <Reveal className="lg:col-span-5"><p className="section-label">Direct contact</p><a href="mailto:team@jomolab.co" className="story-link inline-flex items-center gap-3 pb-3 font-display text-2xl font-medium text-primary md:text-4xl">team@jomolab.co <ArrowUpRight className="size-6" /></a><p className="mt-7 max-w-md leading-7 text-muted-foreground">Share what you are exploring, building, or researching. We will connect you with the right part of the JomoLab ecosystem.</p><div className="mt-12 aspect-[2/1] max-w-md border border-border p-7"><ResearchDiagram index={3} /></div></Reveal>
    <Reveal delay={80} className="lg:col-span-6 lg:col-start-7"><p className="section-label">Who we collaborate with</p><div className="border-t border-foreground">{roles.map((role, index) => <div key={role} className="editorial-row grid grid-cols-[3rem_1fr] border-b border-border py-5"><span className="font-mono text-xs text-primary">0{index + 1}</span><span className="font-display text-xl font-medium">{role}</span></div>)}</div></Reveal>
  </div></section>
</>; }