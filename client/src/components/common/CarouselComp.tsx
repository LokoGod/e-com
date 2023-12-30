"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselComp() {
  return (
    <div className="flex items-center justify-center">
      <Carousel className=" max-w-screen-fit">
        <CarouselContent>
          {[
            "https://wallpapers.com/images/hd/ultra-wide-x5eywlkdqhtbbu3f.jpg",
            "https://resource.logitechg.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/plp-hero/hero-gaming-keyboards-desktop.jpg?v=1",
            "https://wallpapers.com/images/hd/wide-luminescent-blue-galaxy-cvwms9n04ylj1hkw.jpg",
            "https://wallpapers.com/images/hd/bright-glacier-national-park-wide-shot-kxhdovka2iu3qb7t.jpg",
            "https://wallpapers.com/images/featured/widescreen-3ao0esn9qknhdudj.jpg",
          ].map((imageSrc, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <img
                  src={imageSrc}
                  alt="Image description"
                  className="w-full h-400 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
