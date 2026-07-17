import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Preeti's Kitchen | Indian Street Food Photos" },
      { name: "description", content: "A look at the food we make at Preeti's Kitchen — samosas, chaat, pav bhaji and more." },
      { property: "og:title", content: "Gallery — Preeti's Kitchen" },
      { property: "og:description", content: "Fresh Indian street food photography from our Edmonton kitchen." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/veg-samosa.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const images = [
  { src: "/veg-samosa.jpg", alt: "Authentic Indian veg samosa" },
  { src: "/food_4.jpg", alt: "Cheese vegetable patty" },
  { src: "/food_5.jpg", alt: "Pav bhaji with fresh onions" },
  { src: "/about-chaat.jpg", alt: "Hot pav bhaji plate" },
  { src: "/food_7.jpg", alt: "Golden aloo patties" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Gallery</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Fresh out of our kitchen.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Real photos of the food we serve every day.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3 auto-rows-[280px]">
        {images.map((img, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover hover:scale-105 transition duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}