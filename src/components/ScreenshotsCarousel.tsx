"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = Array.from(
  { length: 6 },
  (_, i) => `/screenshots/flutter_guide_screen_${i + 1}.jpeg`,
);

export const ScreenshotsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full px-16">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%]"
            >
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                width={540}
                height={960}
                className="mx-auto max-w-[160px] rounded-lg object-cover shadow sm:max-w-[180px] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="bg-background border-border hover:bg-accent absolute top-1/2 left-4 -translate-y-1/2 rounded-full border p-2 shadow-md transition disabled:cursor-not-allowed disabled:opacity-25 disabled:grayscale"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="bg-background border-border hover:bg-accent absolute top-1/2 right-4 -translate-y-1/2 rounded-full border p-2 shadow-md transition disabled:cursor-not-allowed disabled:opacity-25 disabled:grayscale"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
