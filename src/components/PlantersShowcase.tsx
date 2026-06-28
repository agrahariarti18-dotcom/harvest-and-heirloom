import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import birdcage from "@/assets/planters/birdcage.jpg.asset.json";
import globeBlue from "@/assets/planters/globe-blue.jpg.asset.json";
import globeGold from "@/assets/planters/globe-gold.jpg.asset.json";
import globeCopper from "@/assets/planters/globe-copper.jpg.asset.json";
import globeRed from "@/assets/planters/globe-red.jpg.asset.json";
import mandala from "@/assets/planters/mandala.jpg.asset.json";
import goldCage from "@/assets/planters/gold-cage.jpg.asset.json";
import blackStand from "@/assets/planters/black-stand.jpg.asset.json";
import whiteCopper from "@/assets/planters/white-copper.jpg.asset.json";
import terracottaGeo from "@/assets/planters/terracotta-geo.jpg.asset.json";
import globeBlueReal from "@/assets/planters/globe-blue-real.jpg.asset.json";
import globeGoldReal from "@/assets/planters/globe-gold-real.jpg.asset.json";
import globeCopperReal from "@/assets/planters/globe-copper-real.jpg.asset.json";
import blackTripodReal from "@/assets/planters/black-tripod-real.jpg.asset.json";
import brassCylinder from "@/assets/planters/brass-cylinder.jpg.asset.json";
import enamelBlack from "@/assets/planters/enamel-black.jpg.asset.json";
import enamelFloral from "@/assets/planters/enamel-floral.jpg.asset.json";
import hangingIkat from "@/assets/planters/hanging-ikat.jpg.asset.json";
import swirlWhite from "@/assets/planters/swirl-white.jpg.asset.json";
import swirlBlack from "@/assets/planters/swirl-black.jpg.asset.json";

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
    id: "globe-planter",
    name: "Metallic Globe Planter with Stand",
    category: "Premium Planter",
    tagline: "Mirror-finish globe planters on minimalist iron stands",
    description:
      "Hand-spun iron planters with a high-gloss metallic finish, mounted on powder-coated tripod stands. Available in four luxurious finishes and three sizes — perfect for hotels, resorts, and luxury interiors.",
    cover: globeBlue.url,
    material: "Iron · Powder-coated stand",
    sizes: ["Small (6\")", "Medium (8\")", "Large (10\")"],
    colors: [
      { name: "Sapphire Blue", swatch: "#1e3a8a", images: [globeBlue.url, globeBlueReal.url] },
      { name: "Antique Gold", swatch: "#9a7b4f", images: [globeGold.url, globeGoldReal.url] },
      { name: "Burnished Copper", swatch: "#b87333", images: [globeCopper.url, globeCopperReal.url] },
      { name: "Ruby Red", swatch: "#9b1c2e", images: [globeRed.url] },
    ],
  },
  {
    id: "birdcage-planter",
    name: "Bird-Top Cage Ceramic Planter",
    category: "Designer Planter",
    tagline: "Ceramic pots cradled in gold cages with sculpted brass birds",
    description:
      "Elegant ceramic planters set inside gold-finished iron cages, crowned with a hand-cast brass bird. A signature decor piece for boutique retail, gifting, and premium home decor lines.",
    cover: birdcage.url,
    material: "Ceramic · Gold-finish iron · Brass",
    sizes: ["Single Tier", "Double Tier"],
    colors: [
      { name: "Ivory White", swatch: "#f5f2eb", images: [birdcage.url] },
      { name: "Blush Pink", swatch: "#e8b8c4", images: [birdcage.url] },
      { name: "Matte Black", swatch: "#1a1a1a", images: [birdcage.url] },
      { name: "Teal", swatch: "#3a9b9b", images: [birdcage.url] },
    ],
  },
  {
    id: "gold-cage",
    name: "Gold Cage Bowl Planter",
    category: "Indoor Decor",
    tagline: "Matte ceramic bowl framed by a vertical gold cage",
    description:
      "A sculptural planter combining a deep matte ceramic bowl with a polished gold-finish iron cage. Designed for indoor greenery, succulents, and small foliage arrangements.",
    cover: goldCage.url,
    material: "Ceramic · Gold-finish iron",
    sizes: ["Standard 8\""],
    colors: [{ name: "Espresso Black", swatch: "#2a1f1a", images: [goldCage.url] }],
  },
  {
    id: "mandala-tripod",
    name: "Mandala Print Tripod Planter",
    category: "Artisan Print",
    tagline: "Hand-decorated mandala-print planter on a brass tripod",
    description:
      "Vibrant mandala artwork wrapped around a sleek metal pot, balanced on a slim brass-finish tripod. A cheerful statement piece blending traditional Indian motifs with modern silhouettes.",
    cover: mandala.url,
    material: "Metal · Brass-finish iron",
    sizes: ["Standard 7\""],
    colors: [{ name: "Multicolour Mandala", swatch: "#d4574e", images: [mandala.url] }],
  },
  {
    id: "black-stand",
    name: "Matte Black Bowl Planter",
    category: "Minimalist",
    tagline: "Soft matte bowl on a sturdy black iron tripod",
    description:
      "A clean, contemporary planter with a velvety matte black finish, raised on a powder-coated iron stand. Ideal for modern interiors and Scandinavian decor styling.",
    cover: blackStand.url,
    material: "Metal · Powder-coated iron",
    sizes: ["Small", "Medium"],
    colors: [{ name: "Charcoal Black", swatch: "#2b2b2b", images: [blackStand.url] }],
  },
  {
    id: "white-copper",
    name: "White Cylinder Copper-Stand Planter",
    category: "Modern Decor",
    tagline: "Pure white cylinder elevated on slim rose-gold legs",
    description:
      "A minimalist white cylindrical pot resting on four slender rose-gold copper legs. Brings a mid-century modern feel to any indoor plant collection.",
    cover: whiteCopper.url,
    material: "Metal · Copper-finish stand",
    sizes: ["Medium 9\"", "Large 11\""],
    colors: [{ name: "Snow White", swatch: "#f7f5f1", images: [whiteCopper.url] }],
  },
  {
    id: "terracotta-geo",
    name: "Terracotta Geo-Cage Planter",
    category: "Garden Decor",
    tagline: "Classic terracotta pot in a bright geometric wire cage",
    description:
      "A traditional terracotta pot held within a vivid geometric wire frame. Combines rustic warmth with modern, playful color — perfect for cafes, balconies, and gift collections.",
    cover: terracottaGeo.url,
    material: "Terracotta · Powder-coated wire",
    sizes: ["Small 5\"", "Medium 6\""],
    colors: [
      { name: "Sunshine Yellow", swatch: "#f6c243", images: [terracottaGeo.url] },
    ],
  },
];

export function PlantersShowcase() {
  const [openId, setOpenId] = useState<string | null>(null);
  const product = products.find((p) => p.id === openId) ?? null;

  return (
    <section id="planters" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf6ee 0%, #f1e7d3 100%)" }}>
      <div className="container-luxe">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep/5 text-deep text-xs font-medium tracking-wider uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Planters & Decor Collection
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-4">
            Designer Planters & Home Decor
          </h2>
          <p className="text-deep/70 text-lg">
            Tap any product to explore its full gallery, available colours and sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <span className="text-[10px] font-medium text-deep ml-0.5">{p.colors.length} colours</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-deep mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
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
            Request Planters Catalogue <ChevronRight className="h-4 w-4" />
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

      {/* Gallery */}
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

      {/* Details */}
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
              <span className="text-xs font-semibold uppercase tracking-wider text-deep">Colour</span>
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
