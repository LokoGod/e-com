"use client";

import { Card, CardContent } from "@/components/ui/card";
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
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {[
            "https://wallpapers.com/images/hd/widescreen-fire-watch-sunset-art-jcxvdd49bx9xt2jn.jpg",
            "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
            "https://wallpapers.com/images/hd/red-forest-trees-n8z3bf3dv0b2cj6w.jpg",
            "https://wallpapercave.com/wp/4IBEkae.jpg",
            "https://wallpapers.com/images/hd/1920-x-1080-hd-qk3gikd2sbt9vio5.jpg",
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="flex items-center justify-center">
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div> */}
    </div>
  );
}
