import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40">
      <div className="aurora absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-screen-2xl text-center">
        <p className="section-label">Confederation channel open</p>
        <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.92]">Architect the<br /><span className="text-gradient">next decade.</span></h2>
        <Link to="/contact" className="btn-sweep group mt-12 inline-flex items-center gap-4 border border-primary px-7 py-4 font-display font-bold text-accent">
          Join the confederation <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
