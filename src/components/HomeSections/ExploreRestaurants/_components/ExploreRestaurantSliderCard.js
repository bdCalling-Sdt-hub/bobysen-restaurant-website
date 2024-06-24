"use client";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ExploreRestaurantSliderCard() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
    >
      <CarouselContent className="-ml-8">
        {Array.from({ length: 9 }).map((_, idx) => (
          <CarouselItem key={idx} className="pl-8 md:basis-1/3">
            <RestaurantCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
        <CarouselPrevious className="-left-6 bg-primary-secondary-3 text-primary-white lg:-left-12" />
        <CarouselNext className="-right-6 bg-primary-secondary-3 text-primary-white lg:-right-12" />
      </div>
    </Carousel>
  );
}
