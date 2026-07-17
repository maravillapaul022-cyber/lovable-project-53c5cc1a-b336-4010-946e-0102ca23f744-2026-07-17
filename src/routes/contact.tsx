import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Visit Us — Preeti's Kitchen | Desrochers SW Edmonton" },
      { name: "description", content: "Find Preeti's Kitchen at 203 Desrochers Blvd SW, Edmonton. Call (587) 936-9049. Open daily from 9 a.m." },
      { property: "og:title", content: "Visit Preeti's Kitchen" },
      { property: "og:description", content: "203 Desrochers Blvd SW, Edmonton. Open from 9 a.m." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const hours = [
  { day: "Monday", h: "9:00 a.m. – 9:00 p.m." },
  { day: "Tuesday", h: "9:00 a.m. – 9:00 p.m." },
  { day: "Wednesday", h: "9:00 a.m. – 9:00 p.m." },
  { day: "Thursday", h: "9:00 a.m. – 9:00 p.m." },
  { day: "Friday", h: "9:00 a.m. – 10:00 p.m." },
  { day: "Saturday", h: "9:00 a.m. – 10:00 p.m." },
  { day: "Sunday", h: "9:00 a.m. – 9:00 p.m." },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Visit</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Find us in Desrochers.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Drop by, call ahead, or place an order for pickup and delivery.</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <InfoCard icon={MapPin} title="Address">
            <p>203 Desrochers Blvd SW<br/>Edmonton, AB T6W 4N3</p>
            <a href="https://maps.google.com/?q=203+Desrochers+Blvd+SW+Edmonton+AB" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">Get directions →</a>
          </InfoCard>
          <InfoCard icon={Phone} title="Phone">
            <a href="tel:+15879369049" className="text-lg font-semibold text-foreground hover:text-primary">(587) 936-9049</a>
          </InfoCard>
          <InfoCard icon={Clock} title="Hours" green>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.5_0.15_140)]"><span className="h-2 w-2 rounded-full bg-[oklch(0.5_0.15_140)]" /> Opens 9 a.m.</p>
            <dl className="text-sm">
              {hours.map(h => (
                <div key={h.day} className="flex justify-between py-1 border-b border-border/60 last:border-0">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd className="font-medium">{h.h}</dd>
                </div>
              ))}
            </dl>
          </InfoCard>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm min-h-[400px]">
            <iframe
              title="Preeti's Kitchen location"
              src="https://www.google.com/maps?q=203+Desrochers+Blvd+SW+Edmonton+AB&output=embed"
              className="h-full w-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-2xl font-bold">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Questions about catering, pickup, or our menu? Send us a note.</p>
            <form action="https://webhook.site/7c3cf30b-1c6b-4f3a-9c3c-e02518f32158" method="POST" className="mt-5 grid gap-4">
              <input type="hidden" name="access_key" value="98caec7f-88a4-4d2d-a4e3-d342b4e6b2a7" />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  <span>Name</span>
                  <input type="text" name="name" required className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  <span>Email</span>
                  <input type="email" name="email" required className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                <span>Message</span>
                <textarea name="message" rows={5} required className="rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary" />
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, green }: { icon: any; title: string; children: React.ReactNode; green?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-full ${green ? "bg-[oklch(0.9_0.08_140)] text-[oklch(0.4_0.15_140)]" : "bg-primary text-primary-foreground"}`}><Icon className="h-5 w-5" /></div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}