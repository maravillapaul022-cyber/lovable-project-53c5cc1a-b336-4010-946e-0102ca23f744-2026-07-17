import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Preeti's Kitchen | Women-Owned Indian Street Food" },
      { name: "description", content: "The story behind Preeti's Kitchen — a women-owned, community-loved Indian street food spot in Edmonton with a loyal 5.0★ following." },
      { property: "og:title", content: "About Preeti's Kitchen" },
      { property: "og:description", content: "Women-owned Indian street food in Edmonton SW. Authentic, consistent, community-loved." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our story</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Homemade chaat, made from the heart.</h1>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
          <p>Preeti's Kitchen started as a labour of love — one family recipe at a time. Today, it's grown into one of Edmonton's most loved Indian street food spots, tucked into the Desrochers neighbourhood in the city's south west.</p>
          <p>Every samosa is folded by hand. Every pav is toasted to order. Every batch of pani for our gol gappe is balanced fresh that morning. It's the small stuff — done consistently — that has earned us a perfect 5.0 rating and a loyal community that keeps coming back.</p>
          <p>We're proudly women-owned and an LGBTQ+ friendly business. Whether you're a regular, a first-timer, or dropping in to grab samosas for the office, you belong at our table.</p>
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[4/5]">
          <img src="/about-chaat.jpg" alt="Fresh pav bhaji served hot" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          { icon: Heart, title: "Women-owned", text: "Built and run by women passionate about authentic Indian cooking." },
          { icon: Sparkles, title: "5.0★ consistency", text: "96 Google reviews and counting — every plate held to the same standard." },
          { icon: Users, title: "LGBTQ+ friendly", text: "A welcoming space for everyone who loves great food." },
        ].map(v => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground"><v.icon className="h-5 w-5" /></div>
            <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}