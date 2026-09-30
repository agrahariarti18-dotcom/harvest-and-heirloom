import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import bowlRed from "@/assets/jewellery-new/floral-bowl-red.jpeg.asset.json";
import bowlSilver from "@/assets/jewellery-new/floral-bowl-silver.jpeg.asset.json";
import mugGold from "@/assets/jewellery-new/floral-mug-gold.jpeg.asset.json";
import mugWhite from "@/assets/jewellery-new/floral-mug-white.jpeg.asset.json";
import plateGold from "@/assets/jewellery-new/floral-plate-gold.jpeg.asset.json";
import plateWhiteLarge from "@/assets/jewellery-new/floral-plate-white-large.jpeg.asset.json";
import plateWhiteSmall from "@/assets/jewellery-new/floral-plate-white-small.jpeg.asset.json";
import trayGoldLarge from "@/assets/jewellery-new/floral-tray-gold-large.jpeg.asset.json";
import trayWhite from "@/assets/jewellery-new/floral-tray-white.jpeg.asset.json";
import traysRedWhite from "@/assets/jewellery-new/enamel-trays-red-white.jpeg.asset.json";

type ProductCategory = "Bowls" | "Mugs" | "Plates" | "Trays";
type ProductVariant = { name: string; swatchClass: string; images: string[] };
type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  cover: string;
  material: string;
  variants: ProductVariant[];
  sizes: string[];
};

const products: Product[] = [
  {
    id: "floral-enamel-serving-bowl",
    name: "Floral Enamel Serving Bowl",
    category: "Bowls",
    tagline: "Sculpted metal bowls finished with vivid floral enamel",
    description: "A decorative serving bowl with an intricate all-over floral pattern, shaped for premium table settings, festive gifting, and boutique collections.",
    cover: bowlSilver.url,
    material: "Metal · Hand-finished enamel",
    variants: [
      { name: "Silver Floral", swatchClass: "bg-muted", images: [bowlSilver.url] },
      { name: "Crimson Floral", swatchClass: "bg-destructive", images: [bowlRed.url] },
    ],
    sizes: ["Standard"],
  },
  {
    id: "floral-enamel-mug",
    name: "Floral Enamel Mug",
    category: "Mugs",
    tagline: "Ornamental handled mugs with heritage floral detailing",
    description: "A decorative handled mug with colourful floral engraving and polished metal accents, designed for gifting and distinctive tabletop displays.",
    cover: mugGold.url,
    material: "Metal · Floral enamel detailing",
    variants: [
      { name: "Antique Gold", swatchClass: "bg-gold", images: [mugGold.url] },
      { name: "Pearl White", swatchClass: "bg-cream", images: [mugWhite.url] },
    ],
    sizes: ["Standard"],
  },
  {
    id: "floral-enamel-plate",
    name: "Floral Enamel Decorative Plate",
    category: "Plates",
    tagline: "Statement floral plates for serving and display",
    description: "An ornate round plate framed by colourful botanical motifs, suitable for festive serving, display styling, and coordinated gift sets.",
    cover: plateGold.url,
    material: "Metal · Hand-finished enamel",
    variants: [
      { name: "Antique Gold", swatchClass: "bg-gold", images: [plateGold.url] },
      { name: "Pearl White", swatchClass: "bg-cream", images: [plateWhiteLarge.url, plateWhiteSmall.url] },
    ],
    sizes: ["Small", "Large"],
  },
  {
    id: "floral-enamel-serving-tray",
    name: "Floral Enamel Serving Tray",
    category: "Trays",
    tagline: "Decorative serving trays in coordinated floral finishes",
    description: "A richly patterned serving tray combining artisan floral work with a polished metal form, created for entertaining, gifting, and premium hospitality collections.",
    cover: trayWhite.url,
    material: "Metal · Hand-finished enamel",
    variants: [
      { name: "Pearl White", swatchClass: "bg-cream", images: [trayWhite.url, traysRedWhite.url] },
      { name: "Crimson Red", swatchClass: "bg-destructive", images: [traysRedWhite.url] },
      { name: "Antique Gold", swatchClass: "bg-gold", images: [trayGoldLarge.url] },
    ],
    sizes: ["Standard", "Large"],
  },
];

const filters = ["All", "Bowls", "Mugs", "Plates", "Trays"] as const;
type Filter = (typeof filters)[number];

export function JewelleryShowcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const visibleProducts = useMemo(
    () => products.filter((product) => filter === "All" || product.category === filter),
    [filter],
  );
  const selectedProduct = products.find((product) => product.id === openId);

  return (
    <section id="jewellery" className="bg-gradient-to-b from-[var(--cream-warm,_#f6efe3)] via-cream to-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-brass">
            <span className="divider-gold" /> Floral Enamel Collection <span className="divider-gold" />
          </div>
          <h2 className="mb-4 font-display text-4xl text-deep lg:text-5xl">
            Decorative <span className="gradient-text-gold italic">tableware</span> for memorable settings
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore floral enamel bowls, mugs, plates, and trays. Open a product to view its dedicated gallery, finishes, and available sizes.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Filter products">
          {filters.map((item) => (
            <Button
              key={item}
              type="button"
              variant={filter === item ? "default" : "outline"}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className="h-10 rounded-full px-5"
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visibleProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setOpenId(product.id)}
              className="group overflow-hidden rounded-2xl border border-border bg-background text-left shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cream-warm,_#f6efe3)]">
                <img src={product.cover} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-deep backdrop-blur">
                  {product.category}
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1.5 text-[10px] font-medium text-deep backdrop-blur">
                  {product.variants.length} {product.variants.length === 1 ? "finish" : "finishes"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1.5 font-display text-xl leading-tight text-deep transition-colors group-hover:text-gold">{product.name}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                  View Product <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild className="h-12 rounded-full bg-deep px-8 text-cream hover:bg-gold hover:text-deep">
            <a href="#contact">Request Product Catalogue <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </div>

      <Dialog open={Boolean(openId)} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden border-none bg-background p-0 [&>button]:hidden">
          {selectedProduct ? <ProductDetail product={selectedProduct} onClose={() => setOpenId(null)} /> : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  const [variantIndex, setVariantIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const variant = product.variants[variantIndex];
  const images = variant.images;

  useEffect(() => setImageIndex(0), [variantIndex]);

  return (
    <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-2">
      <DialogTitle className="sr-only">{product.name}</DialogTitle>
      <DialogDescription className="sr-only">{product.tagline}</DialogDescription>
      <Button type="button" size="icon" variant="outline" onClick={onClose} aria-label="Close product" className="absolute right-4 top-4 z-20 rounded-full bg-background shadow-md">
        <X className="h-5 w-5" />
      </Button>

      <div className="flex min-h-[420px] flex-col bg-[var(--cream-warm,_#f6efe3)] p-5 md:min-h-[640px] md:p-9">
        <div className="relative flex min-h-[330px] flex-1 items-center justify-center">
          <img src={images[imageIndex]} alt={`${product.name} in ${variant.name}`} className="max-h-[510px] h-auto w-full rounded-lg object-contain" />
          {images.length > 1 ? (
            <>
              <Button type="button" size="icon" variant="outline" onClick={() => setImageIndex((index) => (index - 1 + images.length) % images.length)} aria-label="Previous image" className="absolute left-0 rounded-full bg-background/90 shadow">
                <ChevronLeft />
              </Button>
              <Button type="button" size="icon" variant="outline" onClick={() => setImageIndex((index) => (index + 1) % images.length)} aria-label="Next image" className="absolute right-0 rounded-full bg-background/90 shadow">
                <ChevronRight />
              </Button>
            </>
          ) : null}
        </div>
        {images.length > 1 ? (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((image, index) => (
              <button key={image} type="button" onClick={() => setImageIndex(index)} aria-label={`View image ${index + 1}`} className={`h-16 w-16 overflow-hidden rounded-md border-2 transition ${index === imageIndex ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}>
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-6 md:p-10">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold"><Sparkles className="h-3.5 w-3.5" /> {product.category}</div>
        <h3 className="mb-2 font-display text-3xl text-deep">{product.name}</h3>
        <p className="mb-5 italic text-deep/70">{product.tagline}</p>
        <p className="mb-6 text-sm leading-relaxed text-deep/80">{product.description}</p>
        <p className="mb-7 text-xs text-deep/60"><span className="font-semibold uppercase tracking-wider text-deep">Material:</span> {product.material}</p>

        <fieldset className="mb-7">
          <div className="mb-3 flex items-center justify-between">
            <legend className="text-xs font-semibold uppercase tracking-wider text-deep">Finish</legend>
            <span className="text-sm text-deep/70">{variant.name}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((item, index) => (
              <Button key={item.name} type="button" size="icon" variant="outline" onClick={() => setVariantIndex(index)} title={item.name} aria-label={item.name} aria-pressed={variantIndex === index} className={`rounded-full p-1 ${variantIndex === index ? "ring-2 ring-gold ring-offset-2" : ""}`}>
                <span className={`h-full w-full rounded-full border border-border ${item.swatchClass}`} />
              </Button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <legend className="text-xs font-semibold uppercase tracking-wider text-deep">Size</legend>
            <span className="text-sm text-deep/70">{product.sizes[sizeIndex]}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <Button key={size} type="button" variant={sizeIndex === index ? "default" : "outline"} onClick={() => setSizeIndex(index)} aria-pressed={sizeIndex === index} className="rounded-full">
                {size}
              </Button>
            ))}
          </div>
        </fieldset>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-12 flex-1 rounded-full bg-deep text-cream hover:bg-gold hover:text-deep">
            <a href="#contact" onClick={onClose}>Enquire for Export</a>
          </Button>
          <Button asChild variant="outline" className="h-12 flex-1 rounded-full border-deep/20 text-deep hover:bg-deep hover:text-cream">
            <a href={`https://wa.me/919958096383?text=${encodeURIComponent(`Hi HortiHand, I'd like a quote for: ${product.name} (${variant.name}, ${product.sizes[sizeIndex]})`)}`} target="_blank" rel="noreferrer">WhatsApp Quote</a>
          </Button>
        </div>
      </div>
    </div>
  );
}