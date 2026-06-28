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
import hammeredGold from "@/assets/planters/hammered-gold.jpg.asset.json";
import archBrass from "@/assets/planters/arch-brass.jpg.asset.json";
import glossyTeal from "@/assets/planters/glossy-teal.jpg.asset.json";
import goldVstand from "@/assets/planters/gold-vstand.jpg.asset.json";
import cartTrolley from "@/assets/planters/cart-trolley.jpg.asset.json";
import cobaltCylinder from "@/assets/planters/cobalt-cylinder.jpg.asset.json";
import birdcageBowl from "@/assets/planters/birdcage-bowl.jpg.asset.json";

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
    colors: [{ name: "Charcoal Black", swatch: "#2b2b2b", images: [blackStand.url, blackTripodReal.url] }],
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
  {
    id: "swirl-ceramic",
    name: "Hand-Painted Swirl Ceramic Planter (Set of 3)",
    category: "Premium Ceramic",
    tagline: "Glossy ceramic planters with hand-drawn swirl artwork on gold tripod stands",
    description:
      "A signature set of three nesting ceramic planters, each finished with intricate hand-painted swirl detailing and presented on golden iron tripod stands. Sold as a coordinated set or single sizes — a centrepiece for premium retail and gifting.",
    cover: swirlWhite.url,
    material: "Glazed ceramic · Gold-finish iron stand",
    sizes: ["Small", "Medium", "Large", "Set of 3"],
    colors: [
      { name: "Ivory & Bronze", swatch: "#f1ead8", images: [swirlWhite.url] },
      { name: "Black & Gold", swatch: "#1a1208", images: [swirlBlack.url] },
    ],
  },
  {
    id: "brass-cylinder-vase",
    name: "Brushed Brass Cylinder Vase",
    category: "Luxury Vase",
    tagline: "Brushed-finish brass cylinders for floral and table styling",
    description:
      "A timeless trio of brushed brass cylindrical vases, perfect for floral arrangements, candles, or styling on console tables. Designed for boutique hotels, event styling, and luxury gifting.",
    cover: brassCylinder.url,
    material: "Brushed brass",
    sizes: ["Mini 3\"", "Medium 5\"", "Tall 7\""],
    colors: [{ name: "Brushed Brass", swatch: "#c9a96a", images: [brassCylinder.url] }],
  },
  {
    id: "enamel-bucket",
    name: "Enamel Print Bucket Planter",
    category: "Artisan Print",
    tagline: "Glossy enamel-finish planters in bold prints and solid colours",
    description:
      "Steel bucket planters dipped in glossy enamel and finished with either a vibrant folk-art print or a starlit black-glitter coat. Lightweight, durable, and made for indoor styling.",
    cover: enamelFloral.url,
    material: "Enamel-coated steel",
    sizes: ["Small (10.5cm)", "Medium (13cm)"],
    colors: [
      { name: "Folk Floral Teal", swatch: "#2a8a90", images: [enamelFloral.url] },
      { name: "Starlit Black", swatch: "#0e0e10", images: [enamelBlack.url] },
    ],
  },
  {
    id: "hanging-ikat",
    name: "Ikat Print Hanging Railing Planter",
    category: "Balcony Decor",
    tagline: "Hook-style hanging planter with vivid ikat artwork",
    description:
      "A double-hook railing planter ideal for balconies, terraces, and outdoor cafes. Vivid ikat-inspired prints on a glossy enamel base, finished with a lime-green rim and matching hooks.",
    cover: hangingIkat.url,
    material: "Enamel-coated steel",
    sizes: ["Standard"],
    colors: [{ name: "Teal Ikat", swatch: "#1f6b6f", images: [hangingIkat.url] }],
  },
  {
    id: "hammered-gold",
    name: "Hammered Gold Ceramic Pot (Set of 2)",
    category: "Tabletop Decor",
    tagline: "Dimpled gold ceramic pots with a luxurious hand-hammered finish",
    description:
      "A coordinated pair of ceramic planters dipped in a warm gold glaze and finished with a tactile hammered-dimple texture. Ideal for tabletops, console styling, and luxury gifting.",
    cover: hammeredGold.url,
    material: "Glazed ceramic · Gold finish",
    sizes: ["Small 4\"", "Medium 5\"", "Set of 2"],
    colors: [{ name: "Hammered Gold", swatch: "#c9a35a", images: [hammeredGold.url] }],
  },
  {
    id: "arch-stand-brass",
    name: "Arch-Stand Brushed Brass Planter",
    category: "Modern Decor",
    tagline: "Brushed brass cylinder elevated on an architectural gold arch stand",
    description:
      "A statement indoor planter pairing a brushed brass cylinder with a sculptural arched gold-finish iron stand. Adds a refined, mid-century-modern silhouette to any room.",
    cover: archBrass.url,
    material: "Brushed brass · Gold-finish iron",
    sizes: ["Medium 6\"", "Tall 9\""],
    colors: [{ name: "Brushed Brass", swatch: "#c9a96a", images: [archBrass.url] }],
  },
  {
    id: "glossy-cylinder",
    name: "Glossy Cylinder Planter with Gold Stand",
    category: "Indoor Decor",
    tagline: "High-gloss ceramic cylinder cradled in a minimalist gold frame",
    description:
      "A glossy enamel-finished cylindrical pot held in a slim gold-finish iron stand. Designed for elegant indoor styling, fresh florals, and boutique gifting.",
    cover: glossyTeal.url,
    material: "Glazed ceramic · Gold-finish iron",
    sizes: ["Small", "Medium"],
    colors: [
      { name: "Emerald Green", swatch: "#0e5b4f", images: [glossyTeal.url] },
    ],
  },
  {
    id: "gold-vstand",
    name: "Gold Sphere V-Stand Planter",
    category: "Minimalist",
    tagline: "Matte gold sphere balanced on a geometric black wire V-stand",
    description:
      "A modern sculptural planter combining a matte gold metal sphere with a graphic black wire V-shaped base. A bold accent piece for desks, shelves, and modern interiors.",
    cover: goldVstand.url,
    material: "Metal · Powder-coated iron",
    sizes: ["Standard 5\""],
    colors: [{ name: "Matte Gold", swatch: "#b8924a", images: [goldVstand.url] }],
  },
  {
    id: "cart-trolley",
    name: "Vintage Cart Trolley Planter",
    category: "Garden Decor",
    tagline: "Wrought-iron cart trolley cradling a brushed brass bucket",
    description:
      "A whimsical vintage-style trolley in matte black wrought iron, holding a brushed brass bucket planter. A charming accent for entryways, balconies, and boutique retail displays.",
    cover: cartTrolley.url,
    material: "Wrought iron · Brushed brass",
    sizes: ["Standard"],
    colors: [{ name: "Black & Brass", swatch: "#3a2a18", images: [cartTrolley.url] }],
  },
  {
    id: "cobalt-cylinder",
    name: "Cobalt Cylinder Planter with Stand",
    category: "Modern Decor",
    tagline: "Vivid cobalt cylinder on a matching tonal iron stand",
    description:
      "A bold cobalt blue cylindrical planter set on a tonal blue powder-coated iron stand. Brings a pop of saturated colour to neutral living rooms, studios, and modern interiors.",
    cover: cobaltCylinder.url,
    material: "Metal · Powder-coated iron",
    sizes: ["Medium 7\"", "Tall 9\""],
    colors: [{ name: "Cobalt Blue", swatch: "#1b4cc4", images: [cobaltCylinder.url] }],
  },
  {
    id: "birdcage-bowl",
    name: "Matte Black Bowl on Gold Birdcage Stand",
    category: "Designer Planter",
    tagline: "Matte black hemisphere bowl raised on a gold birdcage frame",
    description:
      "An elegant matte black hemispherical bowl planter resting on a tall gold-finish birdcage stand. A standout silhouette for entryways, side tables, and luxury interiors.",
    cover: birdcageBowl.url,
    material: "Metal · Gold-finish iron",
    sizes: ["Standard 8\""],
    colors: [{ name: "Matte Black & Gold", swatch: "#1a1a1a", images: [birdcageBowl.url] }],
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
