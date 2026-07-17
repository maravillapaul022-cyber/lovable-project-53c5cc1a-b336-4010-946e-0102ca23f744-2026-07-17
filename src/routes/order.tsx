import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PartyPopper, Briefcase, ShoppingBag, Check } from "lucide-react";

export const Route = createFileRoute("/order")({
  component: OrderPage,
  head: () => ({
    meta: [
      { title: "Order & Catering — Preeti's Kitchen Edmonton" },
      { name: "description", content: "Order pickup, delivery or catering for your office and events. Bulk samosas, patties and chaat trays available." },
      { property: "og:title", content: "Order & Catering — Preeti's Kitchen" },
      { property: "og:description", content: "Catering for staff meetings, birthdays and events." },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
});

function OrderPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "Catering", date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    if (form.name.length > 100 || form.email.length > 200 || form.message.length > 1500) return;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Order & Catering</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Feed the crew.</h1>
        <p className="mt-4 text-lg text-muted-foreground">From pickup orders to office catering — samosas, patties and chaat trays for any occasion.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { icon: ShoppingBag, title: "Pickup & Delivery", text: "Call ahead or order online for curbside and no-contact delivery." },
          { icon: Briefcase, title: "Office Catering", text: "Staff meetings and lunches — samosas and patties by the tray." },
          { icon: PartyPopper, title: "Events", text: "Birthdays, gatherings, parties. We'll build a menu with you." },
        ].map(o => (
          <div key={o.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"><o.icon className="h-5 w-5" /></div>
            <h3 className="mt-4 font-display text-xl font-bold">{o.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Inquiry form</h2>
        <p className="mt-2 text-muted-foreground">Tell us what you need and we'll get back within one business day.</p>

        {sent ? (
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-[oklch(0.95_0.06_140)] border border-[oklch(0.7_0.15_140)] p-5">
            <Check className="h-6 w-6 text-[oklch(0.5_0.15_140)] shrink-0" />
            <div>
              <p className="font-display text-xl font-bold text-foreground">Thanks — we got it!</p>
              <p className="mt-1 text-sm text-muted-foreground">We'll reach out shortly. For anything urgent, call (587) 936-9049.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Full name" required><input required maxLength={100} value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input" /></Field>
            <Field label="Email" required><input required type="email" maxLength={200} value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input" /></Field>
            <Field label="Phone"><input type="tel" maxLength={30} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="input" /></Field>
            <Field label="Order type"><select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="input"><option>Catering</option><option>Pickup</option><option>Delivery</option><option>Event</option></select></Field>
            <Field label="Date needed"><input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="input" /></Field>
            <div className="md:col-span-2">
              <Field label="Message" required><textarea required maxLength={1500} rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input resize-none" placeholder="How many people, what you're thinking, any dietary notes..." /></Field>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">Send inquiry</button>
            </div>
          </form>
        )}
      </div>
      <style>{`.input{width:100%;border:1px solid var(--color-border);background:var(--color-background);border-radius:.75rem;padding:.65rem .85rem;font-size:.95rem;outline:none;transition:border-color .15s,box-shadow .15s;font-family:inherit}.input:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px oklch(0.55 0.19 30 / 0.15)}`}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}