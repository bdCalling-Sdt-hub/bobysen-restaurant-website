import Link from "next/link";
import rightArrow from "/public/ExploreRestaurants/rightArrow.png";
import Image from "next/image";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExploreRestaurants() {
  return (
    <section className="container my-[60px]">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="w-1/2">
          <h1 className="font-bold text-primary-secondary-1">
            Explore{" "}
            <span className="text-primary-secondary-3">Top Restaurants</span>
          </h1>
          <p className="mt-4 font-kumbh-sans text-xl text-primary-secondary-2 lg:w-[40%]">
            Check your city Near by Restaurant
          </p>
        </div>

        {/* right */}
        <Link
          href="/top-restaurants"
          className="flex items-center gap-x-2 border-b-2 border-transparent hover:border-b-2 hover:border-y-primary-secondary-2"
        >
          <p className="font-kumbh-sans">See All</p>
          <Image src={rightArrow} alt="right arrow" />
        </Link>
      </div>

      {/* TODO: Load Card Data from database */}
      <div className="mt-10">
        <Carousel>
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
      </div>
    </section>
  );
}
