import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Preeti's Kitchen — Authentic Indian Street Food in Edmonton" },
      { name: "description", content: "5.0★ rated Indian street food in Edmonton SW. Noodle samosas, pav bhaji, gol gappe (pani puri) and more. Dine-in, pickup & delivery." },
      { property: "og:title", content: "Preeti's Kitchen — Indian Street Food Edmonton" },
      { property: "og:description", content: "Edmonton's favorite chaat house. Samosas, pav bhaji, pani puri — freshly made, authentically spiced." },
      { property: "og:site_name", content: "Preeti's Kitchen" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome />
    </QueryClientProvider>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/order", label: "Order & Catering" },
  { to: "/contact", label: "Visit" },
] as const;

function SiteChrome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/preetis-kitchen-logo-hd.png" alt="Preeti's Kitchen" className="h-9 w-9 rounded-full object-cover border border-border/60" />
            <span className="font-display text-xl font-bold text-foreground">Preeti's Kitchen</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+15879369049" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Phone className="h-4 w-4" /> (587) 936-9049
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden rounded-md p-2 text-foreground" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/90 border-b border-border/40 last:border-0">
                  {l.label}
                </Link>
              ))}
              <a href="tel:+15879369049" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" /> Call (587) 936-9049
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[oklch(0.2_0.03_40)] text-[oklch(0.95_0.02_70)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/preetis-kitchen-logo-hd.png" alt="Preeti's Kitchen" className="h-9 w-9 rounded-full object-cover border border-white/30" />
            <span className="font-display text-xl font-bold">Preeti's Kitchen</span>
          </div>
          <p className="mt-3 text-sm opacity-80">Authentic Indian street food, freshly made in Edmonton's south west.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs">Women-owned</span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs">LGBTQ+ friendly</span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold">Visit</h4>
          <p className="mt-3 text-sm opacity-90">203 Desrochers Blvd SW<br/>Edmonton, AB T6W 4N3</p>
          <a href="tel:+15879369049" className="mt-3 inline-flex items-center gap-2 text-sm opacity-90 hover:text-accent"><Phone className="h-4 w-4" /> (587) 936-9049</a>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold">Follow</h4>
          <div className="mt-3 flex gap-3">
            <a href="https://www.instagram.com/preetiskitchen2025/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-primary hover:border-primary"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.facebook.com/p/Preetis-Kitchen-61564903874114/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-primary hover:border-primary"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs opacity-70">© {new Date().getFullYear()} Preeti's Kitchen. All rights reserved.</div>
      </div>
    </footer>
  );
}
