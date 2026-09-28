import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, Tilt } from "../components/site/motion";
import { advisors } from "../components/site/data";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Advisory Board | JomoLab®" },
      { name: "description", content: "Meet Chief Thinker Ratnesh Dwivedi and the advisory board guiding JomoLab." },
      { property: "og:title", content: "Leadership & Advisory Board | JomoLab®" },
      { property: "og:description", content: "Extraordinary minds with a shared vision for 2035." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  return (
    <>
      <PageHero label="[ 04 / Leadership ]" title="Extraordinary minds." copy="A shared vision guided by founders, researchers, and global industry leaders." />
      <section className="px-5 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-tight">“Technology should not only make life smarter—it should make life <span className="text-gradient">better.</span>”</blockquote>
          <p className="mt-10 font-display text-xl font-bold">Ratnesh Dwivedi</p>
          <p className="mt-1 text-sm text-primary">Chief Thinker, JomoLab®</p>
        </Reveal>
      </section>
      <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <Reveal><p className="section-label">Selected advisory board</p></Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map(([name, role], i) => (
              <Reveal key={name} delay={i * 110}>
                <Tilt className="glass-card group h-full p-8">
                  <div className="avatar-ring grid size-16 place-items-center rounded-full font-display text-lg font-bold text-accent">
                    {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <h2 className="mt-10 font-display text-xl font-bold">{name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{role}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
