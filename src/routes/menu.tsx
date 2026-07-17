import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Preeti's Kitchen | Samosas, Chaat & Pav Bhaji Edmonton" },
      { name: "description", content: "Freshly made Indian street food menu: veg & noodle samosas, aloo & cheese puff patties, pav bhaji, gol gappe, masala tea and garlic pickle in Edmonton." },
      { property: "og:title", content: "Menu — Preeti's Kitchen" },
      { property: "og:description", content: "Samosas, puff patties, pav bhaji, gol gappe, masala tea and more — 100% vegetarian." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

type Item = { name: string; desc: string; price: string; veg?: boolean };
type Cat = { title: string; blurb: string; items: Item[] };

const categories: Cat[] = [
  {
    title: "Appetizers",
    blurb: "Hand-folded pastries, fried to golden perfection.",
    items: [
      { name: "Veg Samosa", desc: "Crispy, golden-brown pastry filled with a savory mix of spiced potatoes and peas.", price: "$2.00", veg: true },
      { name: "Noodles Samosa", desc: "A fusion twist — crispy samosa stuffed with spice stir-fried hakka noodles and vegetables.", price: "$3.50", veg: true },
      { name: "Cheese Samosa", desc: "A rich, indulgent take — golden pastry with a gooey blend of melted cheese, veg and mild spice.", price: "$3.50", veg: true },
      { name: "Aloo Puff Pattie", desc: "Flaky golden puff pastry stuffed with soft, spiced mashed potatoes.", price: "$3.00", veg: true },
      { name: "Cheesey Veg Puff Pattie", desc: "Warm, buttery puff pastry with melted cheese and vibrant vegetables.", price: "$3.50", veg: true },
    ],
  },
  {
    title: "Main Course",
    blurb: "Hearty comfort classics from the streets of Mumbai.",
    items: [
      { name: "Pav Bhaji", desc: "Spicy mashed vegetable curry cooked with butter, served with soft toasted pav rolls.", price: "$11.00", veg: true },
    ],
  },
  {
    title: "Chaat",
    blurb: "Tangy, spicy, crunchy — the heart of Indian street eats.",
    items: [
      { name: "Gol Gappe", desc: "Also known as Pani Puri or Puchka — crisp puris filled with spiced potato, chickpeas, and tangy tamarind pani. Party platter.", price: "$20.00", veg: true },
    ],
  },
  {
    title: "Snacks",
    blurb: "Crunchy, savory treats — perfect with a cup of chai.",
    items: [
      { name: "Herb & Garlic Namak Para (1 LB)", desc: "Delectable, savory Indian snack — golden-brown, diamond-shaped bites with herbs and garlic.", price: "$12.50", veg: true },
    ],
  },
  {
    title: "Beverages",
    blurb: "",
    items: [
      { name: "Masala Tea", desc: "Aromatic black tea simmered with fresh milk and a house blend of Indian spices.", price: "$3.00", veg: true },
    ],
  },
  {
    title: "Condiments",
    blurb: "Handcrafted with love — take a jar home.",
    items: [
      { name: "Garlic Pickle", desc: "Bold, robust flavors — fresh hand-picked garlic cloves marinated in a spice blend for true spice lovers.", price: "$10.00", veg: true },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">The menu</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Made fresh, priced fair.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Handcrafted with love in Edmonton. 100% vegetarian by nature.</p>
      </div>

      <div className="mt-14 space-y-14">
        {categories.map(cat => (
          <section key={cat.title}>
            <div className="flex items-end justify-between border-b border-border pb-3 mb-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">{cat.title}</h2>
              <p className="hidden md:block text-sm text-muted-foreground italic">{cat.blurb}</p>
            </div>
            <ul className="divide-y divide-border">
              {cat.items.map(i => (
                <li key={i.name} className="flex gap-4 py-5 items-baseline">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold">{i.name}</h3>
                      {i.veg && <Leaf className="h-4 w-4 text-[oklch(0.55_0.15_140)]" aria-label="Vegetarian" />}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                  </div>
                  <div className="flex-1 hidden sm:block border-b border-dotted border-border/60 translate-y-[-6px]" />
                  <span className="font-display text-xl font-bold text-primary">{i.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-16 text-center text-sm text-muted-foreground">Prices approximate — call <a href="tel:+15879369049" className="text-primary font-semibold">(587) 936-9049</a> for today's full offerings and catering trays.</p>
    </div>
  );
}