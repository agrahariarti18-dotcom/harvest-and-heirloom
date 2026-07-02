import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import copperFluteLay from "@/assets/barware/copper-flute-pair-lay.jpg.asset.json";
import copperFlutesStanding from "@/assets/barware/copper-flutes-standing.jpg.asset.json";
import brassEtchedFluteCherry from "@/assets/barware/brass-etched-flute-cherry.jpg.asset.json";
import brassEtchedFlutesSet from "@/assets/barware/brass-etched-flutes-set.jpg.asset.json";
import copperCoupeTall from "@/assets/barware/copper-coupe-tall.jpg.asset.json";
import copperWineGoblets from "@/assets/barware/copper-wine-goblets.jpg.asset.json";
import brushedBrassCoupeTall from "@/assets/barware/brushed-brass-coupe-tall.jpg.asset.json";
import brushedBrassWinePair from "@/assets/barware/brushed-brass-wine-pair.jpg.asset.json";
import brushedBrassFlutesTall from "@/assets/barware/brushed-brass-flutes-tall.jpg.asset.json";
import silverEtchedFlutes from "@/assets/barware/silver-etched-flutes.jpg.asset.json";

type ColorVariant = { name: string; swatch: string; images: string[] };
type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  cover: string;
  colors: ColorVariant[];
  sizes?: string[];
  material: string;
};

const products: Product[] = [
  {
    id: "hammered-champagne-flute",
    name: "Hammered Champagne Flute (Set of 2)",
    category: "Luxury Barware",
    tagline: "Hand-hammered flutes in a rich rose-copper finish",
    description:
      "Slim-stem champagne flutes crafted from stainless steel with a hand-hammered bowl and a mirror-polished rose-copper plating. Ideal for weddings, gifting, and hospitality tabletops.",
    cover: copperFlutesStanding.url,
    material: "Stainless Steel · Copper / Brass Plating",
    sizes: ["150 ml", "180 ml", "220 ml"],
    colors: [
      { name: "Rose Copper", swatch: "#b87333", images: [copperFlutesStanding.url, copperFluteLay.url] },
      { name: "Brushed Brass", swatch: "#c9a35a", images: [brushedBrassFlutesTall.url] },
      { name: "Silver Etched", swatch: "#c9c9c9", images: [silverEtchedFlutes.url] },
    ],
  },
  {
    id: "etched-brass-goblet",
    name: "Etched Brass Champagne Goblet",
    category: "Heritage Barware",
    tagline: "Hand-engraved floral motifs on a solid brass flute",
    description:
      "Traditional Moradabad craftsmanship on a modern silhouette — deeply etched floral panels and a sculpted stem. Available as single flutes or gift-boxed sets of four.",
    cover: brassEtchedFluteCherry.url,
    material: "Solid Brass · Hand-etched",
    sizes: ["Single", "Set of 2", "Set of 4"],
    colors: [
      { name: "Antique Brass", swatch: "#b8924a", images: [brassEtchedFluteCherry.url, brassEtchedFlutesSet.url] },
      { name: "Silver-Plated", swatch: "#d9d9d9", images: [silverEtchedFlutes.url] },
    ],
  },
  {
    id: "hammered-cocktail-coupe",
    name: "Hammered Cocktail Coupe (Set of 2)",
    category: "Cocktail Barware",
    tagline: "Wide-bowl coupes with a hammered mirror finish",
    description:
      "Classic Nick & Nora inspired coupes with a hand-hammered bowl and long tapered stem. A statement piece for cocktail bars, gifting hampers, and premium tabletop lines.",
    cover: copperCoupeTall.url,
    material: "Stainless Steel · Copper / Brass Plating",
    sizes: ["180 ml", "220 ml"],
    colors: [
      { name: "Rose Copper", swatch: "#b87333", images: [copperCoupeTall.url] },
      { name: "Brushed Brass", swatch: "#c9a35a", images: [brushedBrassCoupeTall.url] },
    ],
  },
  {
    id: "hammered-wine-goblet",
    name: "Hammered Wine Goblet (Set of 2)",
    category: "Wine Barware",
    tagline: "Rounded-bowl wine goblets with a hand-hammered finish",
    description:
      "Full-bodied wine goblets with a deep, rounded bowl and slim stem. Hand-hammered for a jewel-like reflection under warm lighting — perfect for fine-dining and luxury gifting.",
    cover: copperWineGoblets.url,
    material: "Stainless Steel · Copper / Brass Plating",
    sizes: ["220 ml", "300 ml"],
    colors: [
      { name: "Rose Copper", swatch: "#b87333", images: [copperWineGoblets.url] },
      { name: "Brushed Brass", swatch: "#c9a35a", images: [brushedBrassWinePair.url] },
    ],
  },
];

export function BarwareShowcase() {
  const [openId, setOpenId] = useState<string | null>(null);
  const product = products.find((p) => p.id === openId);

  return (
    <section id="barware" className="py-24 bg-gradient-to-b from-cream to-[#f6efe3]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Luxury Barware Collection
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-4">
            Copper &amp; Brass Barware
          </h2>
          <p className="text-deep/70">
            Hand-crafted champagne flutes, wine goblets and cocktail coupes in hammered copper,
            brushed brass and silver-etched finishes. Tap any product to explore its gallery,
            finishes and sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setOpenId(p.id)}
              className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-deep/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f6efe3]">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-deep">
                  {p.category}
                </div>
                {p.colors.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-full">
                    {p.colors.slice(0, 4).map((c) => (
                      <span key={c.name} className="h-3 w-3 rounded-full ring-1 ring-black/10" style={{ background: c.swatch }} />
                    ))}
                    <span className="text-[10px] font-medium text-deep ml-0.5">{p.colors.length} finishes</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-deep mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
                <p className="text-deep/60 text-sm line-clamp-2">{p.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  View Product <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-deep text-cream px-8 py-3.5 rounded-full font-medium hover:bg-gold transition-colors"
          >
            Request Barware Catalogue <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <Dialog open={!!openId} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-none [&>button]:hidden">
          {product && <ProductDetail product={product} onClose={() => setOpenId(null)} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  const [colorIdx, setColorIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
  }, [colorIdx]);

  const color = product.colors[colorIdx];
  const images = color.images;
  const activeImg = images[imgIdx];

  return (
    <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
      <DialogTitle className="sr-only">{product.name}</DialogTitle>
      <DialogDescription className="sr-only">{product.tagline}</DialogDescription>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="bg-[#f6efe3] p-6 md:p-10 flex flex-col">
        <div className="relative flex-1 flex items-center justify-center min-h-[320px]">
          <img
            key={activeImg}
            src={activeImg}
            alt={`${product.name} - ${color.name}`}
            className="max-h-[480px] w-auto object-contain rounded-lg animate-in fade-in duration-300"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-0 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % images.length)}
                className="absolute right-0 h-10 w-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setImgIdx(i)}
                className={`h-16 w-16 rounded-md overflow-hidden border-2 transition ${i === imgIdx ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 md:p-10 flex flex-col">
        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
          {product.category}
        </div>
        <h3 className="font-serif text-3xl text-deep mb-2">{product.name}</h3>
        <p className="text-deep/70 italic mb-5">{product.tagline}</p>
        <p className="text-deep/80 text-sm leading-relaxed mb-6">{product.description}</p>

        <div className="text-xs text-deep/60 mb-6">
          <span className="font-semibold uppercase tracking-wider text-deep">Material:</span> {product.material}
        </div>

        {product.colors.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep">Finish</span>
              <span className="text-sm text-deep/70">{color.name}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColorIdx(i)}
                  title={c.name}
                  className={`h-10 w-10 rounded-full ring-2 ring-offset-2 transition ${i === colorIdx ? "ring-gold" : "ring-transparent hover:ring-deep/30"}`}
                  style={{ background: c.swatch }}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep">Size</span>
              <span className="text-sm text-deep/70">{product.sizes[sizeIdx]}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSizeIdx(i)}
                  className={`px-4 py-2 rounded-full text-sm border transition ${i === sizeIdx ? "bg-deep text-cream border-deep" : "bg-white text-deep border-deep/20 hover:border-deep"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="flex-1 bg-deep text-cream hover:bg-gold rounded-full h-12"
          >
            <a href={`#contact`} onClick={onClose}>
              Enquire for Export
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 rounded-full h-12 border-deep/20 text-deep hover:bg-deep hover:text-cream"
          >
            <a
              href={`https://wa.me/919958096383?text=${encodeURIComponent(`Hi HortiHand, I'd like a quote for: ${product.name} (${color.name}${product.sizes ? ", " + product.sizes[sizeIdx] : ""})`)}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Quote
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
