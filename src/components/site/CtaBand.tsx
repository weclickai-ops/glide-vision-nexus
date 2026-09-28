import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion";

export function CtaBand() {
  return (
    <section className="border-t border-border bg-wash px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-12 lg:items-end">
        <p className="section-label lg:col-span-3">Open collaboration</p>
        <div className="lg:col-span-7"><h2 className="section-title">Build what the next decade needs.</h2></div>
        <Link to="/contact" className="story-link inline-flex w-fit items-center gap-3 pb-2 font-semibold text-primary lg:col-span-2 lg:justify-self-end">Start a conversation <ArrowRight className="size-4" /></Link>
      </Reveal>
    </section>
  );
}