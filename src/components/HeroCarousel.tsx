import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  src: string;
  alt: string;
  label: string;
  category: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  interval?: number;
}

export function HeroCarousel({ slides, interval = 4500 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo, slides.length]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(next, interval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isPaused, interval]);

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-deep"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isPrev =
          index === (current - 1 + slides.length) % slides.length;
        const isNext = index === (current + 1) % slides.length;

        return (
          <div
            key={index}
            className={`
              absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${isActive ? "opacity-100 scale-100 z-10" : ""}
              ${isPrev ? "opacity-0 scale-105 -translate-x-full z-0" : ""}
              ${isNext ? "opacity-0 scale-105 translate-x-full z-0" : ""}
              ${!isActive && !isPrev && !isNext ? "opacity-0 scale-105 z-0" : ""}
            `}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlay for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(20,61,41,0.85) 0%, rgba(20,61,41,0.35) 35%, rgba(20,61,41,0.1) 60%, rgba(20,61,41,0.25) 100%)",
              }}
            />
          </div>
        );
      })}

      {/* Slide label badge */}
      <div className="absolute bottom-20 left-6 sm:left-10 z-20">
        <div className="inline-flex items-center gap-2 bg-[var(--gold)]/90 backdrop-blur-sm text-[var(--deep)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          {slides[current].category}
        </div>
        <div className="mt-3 font-display text-xl sm:text-2xl text-cream drop-shadow-lg max-w-xs">
          {slides[current].label}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-cream/15 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-cream/30 hover:scale-105 transition-all active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-cream/15 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-cream/30 hover:scale-105 transition-all active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`
              h-2 rounded-full transition-all duration-500
              ${index === current ? "w-8 bg-[var(--gold)]" : "w-2 bg-cream/40 hover:bg-cream/60"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
