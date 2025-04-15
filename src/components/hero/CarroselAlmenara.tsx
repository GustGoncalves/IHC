"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

const images: CarouselImage[] = [
  {
    src: "/IgrejaSaoJoaoBatista.jpg",
    alt: "Igreja São João Batista",
    caption: "Patrimônio histórico e religioso da cidade",
  },
  {
    src: "/CasteloAlemanara.jpg",
    alt: "Castelo de Almenara",
    caption: "Marco arquitetônico construído na década de 1960",
  },
  {
    src: "/PonteAlmenara.jpeg",
    alt: "Ponte sobre o Rio Jequitinhonha",
    caption: "Ligando paisagens e histórias do Vale",
  },
];

export default function CarrosselAlmenara() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <div className="w-full bg-amber-800/5 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-2/3 lg:basis-1/2 px-4"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-amber-700/30">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={90}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                        {image.alt}
                      </h3>
                      <p className="text-amber-200 text-sm md:text-base">
                        {image.caption}
                      </p>
                      <span className="text-amber-200 text-xs flex items-center mt-2">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Almenara, Minas Gerais
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-amber-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    Patrimônio Cultural
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-amber-700/90 hover:bg-amber-700 text-white border-0 shadow-lg" />
          <CarouselNext className="hidden md:flex bg-amber-700/90 hover:bg-amber-700 text-white border-0 shadow-lg" />
        </Carousel>
      </div>
    </div>
  );
}
