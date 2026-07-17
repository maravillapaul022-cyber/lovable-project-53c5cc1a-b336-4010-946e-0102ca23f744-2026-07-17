import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Clock, Truck, ShoppingBag, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Preeti's Kitchen — Authentic Indian Street Food in Edmonton" },
      { name: "description", content: "Edmonton's 5.0★ favorite for noodle samosas, pav bhaji and gol gappe. Dine-in, curbside pickup and no-contact delivery in Desrochers SW." },
      { property: "og:title", content: "Preeti's Kitchen — Indian Street Food Edmonton" },
      { property: "og:description", content: "5.0★ (96 reviews). Samosas, pav bhaji, pani puri and more." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/hero-samosas.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Preeti's Kitchen",
        servesCuisine: "Indian",
        priceRange: "$",
        telephone: "+1-587-936-9049",
        address: { "@type": "PostalAddress", streetAddress: "203 Desrochers Blvd SW", addressLocality: "Edmonton", addressRegion: "AB", postalCode: "T6W 4N3", addressCountry: "CA" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "96" },
      }),
    }],
  }),
});

function RatingBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${dark ? "bg-white/10 text-white backdrop-blur border border-white/20" : "bg-white text-foreground shadow-sm border border-border"}`}>
      <span className="flex">
        {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-[oklch(0.82_0.16_85)] text-[oklch(0.82_0.16_85)]" />)}
      </span>
      <span>5.0 · 96 Google reviews</span>
    </div>
  );
}

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-samosas.jpg" alt="Fresh samosas from Preeti's Kitchen" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.06_35/0.92)] via-[oklch(0.25_0.08_35/0.75)] to-[oklch(0.25_0.08_35/0.35)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36 text-white">
          <div className="max-w-2xl">
            <RatingBadge dark />
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-black leading-[0.95]">
              Edmonton's Favorite <span className="text-[oklch(0.82_0.16_85)]">Indian Street Food</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-xl">
              Crunchy noodle samosas, hot pav bhaji, and gol gappe bursting with tangy pani — handcrafted daily in Desrochers SW.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                <UtensilsCrossed className="h-5 w-5" /> View Menu
              </Link>
              <Link to="/order" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.82_0.16_85)] px-6 py-3 text-base font-semibold text-foreground hover:brightness-105">
                <ShoppingBag className="h-5 w-5" /> Order Online
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              {["Dine-in", "Curbside Pickup", "No-Contact Delivery"].map(s => (
                <span key={s} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Signature dishes</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Tastes of the Indian street</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">See full menu →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: "/veg-samosa.jpg", name: "Veg Samosas", desc: "Crispy golden pastry hand-folded around spiced potato and peas — served with mint and tamarind chutney." },
            { img: "/food_5.jpg", name: "Pav Bhaji", desc: "Buttery mashed vegetable curry with toasted pav rolls." },
            { img: "/pani-puri.jpg", name: "Pani Puri", desc: "Crisp hollow puris filled with spiced potato, chickpeas and tangy tamarind-mint pani." },
          ].map(d => (
            <div key={d.name} className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[oklch(0.95_0.05_75)]">
        <div className="mx-auto max-w-7xl px-5 py-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: UtensilsCrossed, title: "Dine-in", text: "Casual counter service, always fresh." },
            { icon: ShoppingBag, title: "Curbside Pickup", text: "Call ahead, we'll bring it out." },
            { icon: Truck, title: "No-Contact Delivery", text: "Hot chaat straight to your door." },
          ].map(s => (
            <div key={s.title} className="flex items-start gap-4 rounded-xl bg-white/70 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><s.icon className="h-5 w-5" /></div>
              <div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.45_0.18_28)] p-10 md:p-14 text-primary-foreground">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Come find us in Desrochers</h2>
            <p className="mt-4 text-white/90 max-w-md">Open daily from 9 a.m. Whether you're picking up a box of samosas for the office or grabbing a hot plate of chaat — we've got you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-5 py-3 text-sm font-semibold hover:bg-white/90"><MapPin className="h-4 w-4" /> Get directions</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"><Clock className="h-4 w-4" /> See hours</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur border border-white/20">
            <RatingBadge dark />
            <p className="mt-4 font-display text-2xl font-semibold leading-snug">"Authentic, comforting, and flawlessly executed Indian street food."</p>
            <p className="mt-2 text-sm text-white/80">— from our Google reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}