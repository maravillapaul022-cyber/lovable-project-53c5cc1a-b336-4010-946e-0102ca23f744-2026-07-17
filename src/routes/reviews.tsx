import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({
    meta: [
      { title: "Reviews — Preeti's Kitchen | 5.0★ on Google" },
      { name: "description", content: "See what Edmonton is saying about Preeti's Kitchen. 5.0★ with 96 Google reviews for our samosas, pav bhaji and chaat." },
      { property: "og:title", content: "Reviews — Preeti's Kitchen" },
      { property: "og:description", content: "5.0★ · 96 Google reviews." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

const testimonials = [
  { text: "The samosa was cooked perfectly — the pastry was spot on and the masala was seriously good. Consistent quality every time.", who: "Thomas M." },
  { text: "The noodle samosas reminded me of the flavours from back home. Ended up in a full-on food coma, no regrets.", who: "Geet O." },
  { text: "Authentic, comforting, flawlessly executed street food. The gol gappe are incredibly fresh and the chaat game is on point.", who: "Nishant K." },
  { text: "Tried the aloo patty and samosa — really nice, authentic taste from India. Will be back for more.", who: "Lalit K." },
  { text: "Their suji golgappe tasted just like they do back home. Absolutely loved it.", who: "Simran K." },
  { text: "Crunchy on the outside, soft where it counts. Genuinely the best chaat in the south side.", who: "Regular customer" },
];

function Reviews() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border border-border px-4 py-2 text-sm font-semibold">
          <span className="flex">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-[oklch(0.82_0.16_85)] text-[oklch(0.82_0.16_85)]" />)}</span>
          <span>5.0 · 96 Google reviews</span>
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">Loved by Edmonton.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Real sentiment from our regulars — paraphrased from our Google reviews.</p>
        <a href="https://www.google.com/search?q=Preeti%27s+Kitchen+Edmonton" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          See all reviews on Google <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex gap-0.5">{[0,1,2,3,4].map(j => <Star key={j} className="h-4 w-4 fill-[oklch(0.82_0.16_85)] text-[oklch(0.82_0.16_85)]" />)}</div>
            <blockquote className="mt-3 font-display text-lg leading-snug">"{t.text}"</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {t.who}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}