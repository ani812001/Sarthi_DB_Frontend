import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Carousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", update);
    update();
  }, [emblaApi]);

  return (
    <div className="relative">

      {/* Slides */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      {/* Next */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center"
      >
        <ArrowRight className="w-4 h-4" />
      </button>

    </div>
  );
}

export function CarouselItem({ children }) {
  return (
    <div className="min-w-full px-2">
      {children}
    </div>
  );
}