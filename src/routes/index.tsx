import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Globe2, ShieldCheck, Package, Truck, Sprout, Award, Sparkles,
  CheckCircle2, MapPin, Phone, Mail, ArrowRight, MessageCircle, Menu, X,
  ChevronDown, Star, Factory, Building2, ShoppingBag, Hotel, Store, Users,
} from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import logoAsset from "@/assets/hortihand-logo.png.asset.json";
import productRed from "@/assets/product-red-dragon.jpg";
import productWhite from "@/assets/product-white-dragon.jpg";
import productStatue from "@/assets/product-brass-statue.jpg";
import productDecor from "@/assets/product-brass-decor.jpg";
import carouselContainerShip from "@/assets/carousel-container-ship.jpg";
import carouselDragonRed from "@/assets/carousel-dragon-red.jpg";
import carouselDragonWhite from "@/assets/carousel-dragon-white.jpg";
import carouselBrassStatue from "@/assets/carousel-brass-statue.jpg";
import carouselBrassDecor from "@/assets/carousel-brass-decor.jpg";
import carouselDragonFarm from "@/assets/carousel-dragon-farm.jpg";
import carouselPortCranes from "@/assets/carousel-port-cranes.jpg";
import carouselBrassCollection from "@/assets/carousel-brass-collection.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HortiHand EXIM PVT LTD — Premium Dragon Fruit & Brass Handicraft Exporter" },
      { name: "description", content: "Exporting India's finest fresh dragon fruits and handcrafted brass treasures to global buyers. Quality-assured, certified, and shipped worldwide." },
      { property: "og:title", content: "HortiHand EXIM — Fresh Harvests & Handicraft Treasures" },
      { property: "og:description", content: "Global B2B export of premium dragon fruit and brass handicrafts from India." },
    ],
  }),
  component: Landing,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <WhyUs />
      <Products />
      <Process />
      <Markets />
      <Certifications />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- Top announcement ---------- */
function TopBar() {
  return (
    <div className="bg-deep text-cream text-xs">
      <div className="container-luxe flex flex-wrap items-center justify-between gap-2 py-2">
        <span className="opacity-80">Trusted Global Exporter from India · IEC Registered</span>
        <span className="hidden sm:flex items-center gap-4 opacity-80">
          <a href="mailto:exports@hortihand.com" className="hover:text-gold transition-colors flex items-center gap-1.5">
            <Mail className="h-3 w-3" /> exports@hortihand.com
          </a>
          <a href="tel:+910000000000" className="hover:text-gold transition-colors flex items-center gap-1.5">
            <Phone className="h-3 w-3" /> +91 00000 00000
          </a>
        </span>
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container-luxe flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 group" aria-label="HortiHand EXIM PVT LTD">
          <img
            src={logoAsset.url}
            alt="HortiHand EXIM PVT LTD logo"
            className="h-14 w-14 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg font-semibold tracking-wide">HortiHand <span className="text-gold">EXIM</span></div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Fresh Harvests & Handicraft Treasures</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-all">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-deep transition-colors shadow-[var(--shadow-gold)]">
            Request Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-luxe py-4 flex flex-col gap-3">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
const heroSlides = [
  { src: carouselContainerShip, alt: "Large international cargo container ship loaded with colorful shipping containers departing from Indian port at golden sunset, global export logistics", label: "Global Export Network — Container Ships Worldwide", category: "Logistics" },
  { src: carouselDragonRed, alt: "Fresh premium red dragon fruits with vibrant magenta skin and green scales on wooden surface, morning dew drops, premium Indian agricultural export", label: "Premium Red Dragon Fruit — Farm Fresh Harvest", category: "Fresh Produce" },
  { src: carouselBrassStatue, alt: "Intricately handcrafted Indian brass deity statue with detailed engravings and warm golden patina on dark velvet, artisan metal handicraft", label: "Handcrafted Brass Statues — Artisan Quality", category: "Handicrafts" },
  { src: carouselDragonWhite, alt: "Elegant white dragon fruits with fresh green tips arranged on dark slate surface, premium exotic tropical fruit export quality", label: "White Dragon Fruit — Exotic & Premium", category: "Fresh Produce" },
  { src: carouselBrassDecor, alt: "Collection of premium Indian brass home decor items including decorative vases, ornate bowls, and engraved plates on marble surface", label: "Brass Home Decor — Luxury Handcrafted", category: "Handicrafts" },
  { src: carouselDragonFarm, alt: "Lush Indian dragon fruit plantation with rows of tall cactus plants bearing ripe red and white fruits, bright tropical morning sunlight", label: "Sustainable Dragon Fruit Farms — India", category: "Our Farms" },
  { src: carouselPortCranes, alt: "Colorful shipping containers being loaded by gantry cranes at a busy international seaport terminal under blue sky", label: "Seaport Operations — Efficient Loading", category: "Logistics" },
  { src: carouselBrassCollection, alt: "Traditional Indian brass handicraft collection with decorative oil lamps, incense holders, small statues, and engraved boxes on dark green fabric", label: "Brass Handicraft Collection — Traditional Art", category: "Handicrafts" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Carousel area */}
        <div className="relative h-[55vh] lg:h-[88vh] order-2 lg:order-1">
          <HeroCarousel slides={heroSlides} interval={5000} />
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2 bg-deep text-cream relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[var(--brass)]/10 blur-3xl" />
          <div className="relative px-6 sm:px-10 lg:px-16 py-16 lg:py-24 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
              <span className="divider-gold" /> Fresh Harvests & Handicraft Treasures
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
              Exporting India's <span className="gradient-text-gold italic">finest</span> dragon fruits & brass handicrafts worldwide.
            </h1>
            <p className="text-base lg:text-lg text-cream/80 leading-relaxed mb-8 max-w-xl">
              HortiHand EXIM PVT LTD connects global buyers with premium agricultural produce and handcrafted brass treasures — sourced directly from trusted growers and skilled artisans across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--deep)] px-7 py-3.5 rounded-full font-medium hover:bg-[var(--brass)] hover:text-cream transition-all shadow-[var(--shadow-gold)]">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full font-medium hover:bg-cream hover:text-[var(--deep)] transition-all">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Globe2, label: "Global Export Network" },
    { icon: ShieldCheck, label: "Premium Quality Assurance" },
    { icon: Truck, label: "Timely Deliveries" },
    { icon: Package, label: "Custom Packaging Solutions" },
  ];
  return (
    <div className="bg-cream border-b border-border">
      <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="mb-6 inline-flex items-center justify-center h-32 w-32 rounded-2xl bg-cream border border-border shadow-[var(--shadow-card)] p-3">
            <img src={logoAsset.url} alt="HortiHand EXIM PVT LTD logo" className="h-full w-full object-contain" />
          </div>
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
            A trusted bridge between India's <span className="gradient-text-gold italic">finest produce</span> and the world.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            HortiHand EXIM PVT LTD is a trusted Indian export company dedicated to delivering premium fresh produce and authentic handcrafted brass products to international markets. We combine agricultural excellence with traditional craftsmanship to provide global buyers with exceptional products that meet international quality standards.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {[
              { t: "Our Mission", d: "Deliver excellence in every shipment by connecting global buyers with India's finest harvests and crafts." },
              { t: "Our Vision", d: "Become the most reliable Indian export partner for premium agro and handicraft products." },
              { t: "Our Values", d: "Integrity, sustainability, craftsmanship and lasting partnerships." },
            ].map(c => (
              <div key={c.t} className="border-t-2 border-[var(--gold)] pt-4">
                <div className="font-display text-xl mb-2">{c.t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const cards = [
    { icon: ShieldCheck, t: "Quality Assurance", d: "Strict multi-stage quality checks before every shipment leaves our facility." },
    { icon: Sprout, t: "Direct Sourcing", d: "Farm-to-market and artisan-to-market model with full traceability." },
    { icon: Globe2, t: "Global Export Expertise", d: "End-to-end export documentation, customs and logistics handled professionally." },
    { icon: Leaf, t: "Sustainable Practices", d: "Responsible sourcing, ethical trade and eco-conscious operations." },
    { icon: Package, t: "Secure Packaging", d: "Export-grade packaging engineered for safe long-haul delivery." },
    { icon: Truck, t: "On-Time Delivery", d: "Reliable worldwide shipping network with consistent transit times." },
  ];
  return (
    <section id="why" className="py-24 lg:py-32 bg-cream">
      <div className="container-luxe">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">Built on trust. Delivered with <span className="gradient-text-gold italic">precision.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          {cards.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8 hover:bg-cream transition-colors group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Products ---------- */
function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>Two Divisions, One Standard</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4">Our <span className="gradient-text-gold italic">Export Catalogue</span></h2>
        </div>

        {/* Dragon fruit division */}
        <div className="mb-24">
          <DivisionHeader number="01" title="Dragon Fruit Export Division" subtitle="Farm-fresh, export-grade pitaya shipped with full phytosanitary compliance." />
          <div className="grid lg:grid-cols-2 gap-8">
            <ProductCard img={productRed} alt="Sliced premium red dragon fruit" name="Red Dragon Fruit" tag="Hylocereus costaricensis" desc="Vibrant magenta flesh, naturally sweet, ideal for retail chains and HORECA buyers." />
            <ProductCard img={productWhite} alt="Sliced premium white dragon fruit" name="White Dragon Fruit" tag="Hylocereus undatus" desc="Crisp white flesh with mild sweetness, premium grade for global distribution." />
          </div>
          <FeatureBand items={["Freshly Harvested", "Traceable Supply Chain", "Phytosanitary Compliance", "International Packaging Standards"]} />
        </div>

        {/* Brass division */}
        <div>
          <DivisionHeader number="02" title="Brass Handicrafts Export Division" subtitle="Heritage craftsmanship by master artisans — sculpted, polished, and packaged for the world." />
          <div className="grid lg:grid-cols-2 gap-8">
            <ProductCard img={productStatue} alt="Ornate Indian brass statue" name="Brass Statues & Religious Artifacts" tag="Handcrafted" desc="Sacred sculptures and decorative idols by skilled artisans, antique and polished finishes." />
            <ProductCard img={productDecor} alt="Decorative brass home decor" name="Brass Home Decor & Custom Pieces" tag="Bespoke" desc="Vases, bowls, antique collections and fully customisable brass pieces for boutique buyers." />
          </div>
          <FeatureBand items={["Handmade by Master Artisans", "Premium Brass Material", "Custom Orders Accepted", "Worldwide Shipping"]} />
        </div>
      </div>
    </section>
  );
}

function DivisionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-border">
      <div>
        <div className="text-gold font-display text-sm tracking-[0.3em]">DIVISION {number}</div>
        <h3 className="font-display text-3xl lg:text-4xl mt-1">{title}</h3>
      </div>
      <p className="text-muted-foreground max-w-md text-sm">{subtitle}</p>
    </div>
  );
}

function ProductCard({ img, alt, name, tag, desc }: { img: string; alt: string; name: string; tag: string; desc: string }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-cream border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-luxe)] transition-all">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-7">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass mb-2">{tag}</div>
        <h4 className="font-display text-2xl mb-2">{name}</h4>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mb-5">
          {["Farm Fresh", "Export Grade", "Bulk Orders", "Custom Packaging"].map(c => (
            <span key={c} className="flex items-center gap-1.5 text-foreground/70"><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{c}</span>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
          Inquire Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function FeatureBand({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(i => (
        <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-cream border border-border">
          <Sparkles className="h-4 w-4 text-gold shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{i}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    "Product Inquiry", "Quotation", "Sample Approval", "Production & Procurement",
    "Quality Inspection", "Packaging", "Export Documentation", "Global Shipping", "Delivery",
  ];
  return (
    <section id="process" className="py-24 lg:py-32 bg-deep text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[var(--gold)]/5 blur-3xl" />
      <div className="container-luxe relative">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow tone="dark">Our Export Process</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">From inquiry to <span className="gradient-text-gold italic">doorstep</span> — orchestrated end-to-end.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((s, i) => (
            <div key={s} className="relative pl-14">
              <div className="absolute left-0 top-0 h-10 w-10 rounded-full border border-[var(--gold)]/40 flex items-center justify-center text-gold font-display text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl">{s}</div>
              <div className="mt-2 h-px bg-cream/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Markets ---------- */
function Markets() {
  const countries = ["USA", "Canada", "United Kingdom", "Germany", "France", "UAE", "Saudi Arabia", "Qatar", "Singapore", "Australia"];
  return (
    <section id="markets" className="py-24 lg:py-32">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionEyebrow>Global Markets</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight mb-5">Trusted across <span className="gradient-text-gold italic">continents.</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Serving global buyers with reliable export solutions and premium Indian products — from the Americas to the Gulf, Europe and Asia-Pacific.
          </p>
          <div className="flex flex-wrap gap-2">
            {countries.map(c => (
              <span key={c} className="px-4 py-2 rounded-full bg-cream border border-border text-sm font-medium hover:border-[var(--gold)] hover:text-primary transition-colors flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold" /> {c}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl" />
          <div className="relative h-full w-full rounded-full bg-deep text-cream flex items-center justify-center shadow-[var(--shadow-luxe)] overflow-hidden">
            <Globe2 className="h-64 w-64 text-[var(--gold)]/30" strokeWidth={0.6} />
            <div className="absolute bottom-8 text-center">
              <div className="font-display text-5xl gradient-text-gold">10+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-cream/70">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const certs = [
    { code: "IEC", name: "Import Export Code" },
    { code: "APEDA", name: "Agricultural Export Authority" },
    { code: "FSSAI", name: "Food Safety & Standards" },
    { code: "MSME", name: "Ministry of MSME" },
    { code: "GST", name: "GST Registered" },
    { code: "ISO", name: "Compliance Ready" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow>Certifications & Compliance</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4">Backed by <span className="gradient-text-gold italic">credentials</span> that matter.</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {certs.map(c => (
            <div key={c.code} className="group relative aspect-square rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center p-4 hover:border-[var(--gold)] transition-colors shadow-[var(--shadow-card)]">
              <Award className="h-7 w-7 text-gold mb-3" />
              <div className="font-display text-2xl">{c.code}</div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
function Industries() {
  const ind = [
    { icon: Building2, t: "Importers" },
    { icon: Factory, t: "Distributors" },
    { icon: ShoppingBag, t: "Wholesalers" },
    { icon: Store, t: "Retail Chains" },
    { icon: Hotel, t: "Hospitality Sector" },
    { icon: Users, t: "E-commerce Sellers" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>Industries We Serve</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">Sourcing partners for <span className="gradient-text-gold italic">every channel.</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {ind.map(({ icon: Icon, t }) => (
            <div key={t} className="group flex items-center gap-5 p-6 rounded-2xl border border-border hover:border-primary hover:bg-cream transition-all">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="font-display text-xl">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const reviews = [
    { q: "HortiHand has been our most reliable supplier of premium dragon fruit. Consistent quality, prompt shipments, professional documentation.", n: "Ahmed Al Rashid", r: "Procurement Lead, Dubai" },
    { q: "Their brass handicrafts brought a level of craftsmanship our boutique buyers immediately recognised. Custom orders handled flawlessly.", n: "Sophie Laurent", r: "Buyer, Paris" },
    { q: "From sample to bulk container, the experience was transparent and exceptional. A true long-term sourcing partner.", n: "Michael Chen", r: "Importer, Singapore" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container-luxe">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>Client Testimonials</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">Voices from our <span className="gradient-text-gold italic">global partners.</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map(r => (
            <figure key={r.n} className="bg-background p-8 rounded-2xl border border-border shadow-[var(--shadow-card)] flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}
              </div>
              <blockquote className="font-display text-xl leading-relaxed text-foreground/90 mb-6 flex-1">"{r.q}"</blockquote>
              <figcaption className="border-t border-border pt-4">
                <div className="font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "What countries do you export to?", a: "We currently ship to the USA, Canada, UK, Germany, France, UAE, Saudi Arabia, Qatar, Singapore, Australia and more — with a continually expanding partner network." },
    { q: "Do you provide samples?", a: "Yes. Pre-shipment samples are available for qualified B2B buyers. Sample charges and freight are confirmed at quotation stage." },
    { q: "What is your minimum order quantity?", a: "MOQs vary by product. Dragon fruit is typically ordered by full container loads; brass handicrafts have flexible MOQs starting from small wholesale lots." },
    { q: "Can you customize packaging?", a: "Absolutely. We offer branded, retail-ready and export-grade packaging tailored to your market and channel." },
    { q: "How long does shipping take?", a: "Transit times range from 7–35 days depending on destination, mode (air/sea) and product category." },
    { q: "Do you handle export documentation?", a: "Yes — we manage all phytosanitary, customs and shipping documentation end-to-end." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">Questions, <span className="gradient-text-gold italic">answered.</span></h2>
          <p className="text-muted-foreground mt-5">Everything international buyers usually ask before initiating a partnership.</p>
        </div>
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 flex gap-4 items-start">
              <div className="flex-1">
                <div className="font-display text-xl flex items-center justify-between gap-4">
                  {it.q}
                  <ChevronDown className={`h-5 w-5 text-gold transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
                </div>
                {open === i && <p className="mt-3 text-muted-foreground leading-relaxed animate-fade-in">{it.a}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 lg:py-32 bg-deep text-cream relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="container-luxe relative grid lg:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow tone="dark">Let's Talk Business</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight mb-6">Request a quote or schedule a <span className="gradient-text-gold italic">consultation.</span></h2>
          <p className="text-cream/80 leading-relaxed mb-10 max-w-md">Tell us about your sourcing needs. Our export team responds within one business day with pricing, samples and logistics options.</p>
          <div className="space-y-5">
            {[
              { icon: Mail, label: "exports@hortihand.com" },
              { icon: Phone, label: "+91 00000 00000" },
              { icon: MapPin, label: "India · Global Exports" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-full border border-[var(--gold)]/30 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-gold" />
                </div>
                <span className="text-cream/90">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-background text-foreground rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-luxe)]"
        >
          {sent ? (
            <div className="text-center py-16">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl mb-2">Thank you!</h3>
              <p className="text-muted-foreground">Our export team will reach out within 24 hours.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Company Name" name="company" />
              <Field label="Country" name="country" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Product Interest</label>
                <select name="product" required className="mt-2 w-full bg-cream border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]">
                  <option>Dragon Fruit (Red / White)</option>
                  <option>Brass Handicrafts</option>
                  <option>Both Divisions</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea name="message" rows={4} required className="mt-2 w-full bg-cream border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-deep transition-colors shadow-[var(--shadow-gold)] mt-2">
                Request Quote <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input required name={name} type={type} className="mt-2 w-full bg-cream border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#0F2D1E] text-cream/80 pt-20 pb-8">
      <div className="container-luxe grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-20 w-20 rounded-2xl bg-cream/95 p-2 flex items-center justify-center shadow-[var(--shadow-gold)]">
              <img src={logoAsset.url} alt="HortiHand EXIM PVT LTD logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-display text-xl text-cream">HortiHand <span className="text-gold">EXIM</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">Pvt Ltd · Since 2024</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Premium Indian exporter of fresh dragon fruits and handcrafted brass treasures — your trusted long-term sourcing partner.
          </p>
        </div>
        <div className="lg:col-span-2">
          <FooterTitle>Quick Links</FooterTitle>
          <ul className="space-y-2 text-sm">
            {nav.map(n => <li key={n.href}><a href={n.href} className="hover:text-gold transition-colors">{n.label}</a></li>)}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <FooterTitle>Products</FooterTitle>
          <ul className="space-y-2 text-sm">
            <li>Red Dragon Fruit</li>
            <li>White Dragon Fruit</li>
            <li>Brass Statues</li>
            <li>Brass Home Decor</li>
            <li>Custom Orders</li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <FooterTitle>Newsletter</FooterTitle>
          <p className="text-sm mb-4">Export market insights and product launches in your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input type="email" placeholder="you@company.com" className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-3 text-sm placeholder:text-cream/40 focus:outline-none focus:border-[var(--gold)]" />
            <button className="bg-[var(--gold)] text-[var(--deep)] px-5 rounded-full font-medium hover:bg-[var(--brass)] hover:text-cream transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container-luxe mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/50">
        <div>© {new Date().getFullYear()} HortiHand EXIM PVT LTD. All rights reserved.</div>
        <div>Crafted for global trade · Made in India</div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-cream font-display text-base mb-4">{children}</div>;
}

/* ---------- Helpers ---------- */
function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] ${tone === "dark" ? "text-gold" : "text-brass"}`}>
      <span className="divider-gold" /> {children}
    </div>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[var(--shadow-luxe)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
