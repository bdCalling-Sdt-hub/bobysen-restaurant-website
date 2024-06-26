"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllRestaurantsQuery } from "@/redux/api/restaurantApi.js";
import Image from "next/image";
import Link from "next/link";
import SliderCard from "./SliderCard/SliderCard";
import rightArrow from "/public/restaurantSlider/rightArrow.png";

export default function RestaurantsSlider() {
  const { data: Rdata } = useGetAllRestaurantsQuery(undefined);
  return (
    // TODO: Load dynamic data from database

    <section className="container mb-[100px]">
      <div className="mb-16 flex items-center justify-between">
        {/* left */}
        <div className="w-1/2">
          <h1 className="font-bold text-primary-secondary-1">
            Explore{" "}
            <span className="text-primary-secondary-3">Restaurants</span>
          </h1>
          <p className="mt-4 font-kumbh-sans text-xl text-primary-secondary-2 lg:w-[40%]">
            Check your city Near by Restaurant
          </p>
        </div>

        {/* right */}
        <Link
          href="/all-restaurants"
          className="flex items-center gap-x-2 border-b-2 border-transparent hover:border-b-2 hover:border-y-primary-secondary-2"
        >
          <p className="font-kumbh-sans">See All</p>
          <Image src={rightArrow} alt="right arrow" />
        </Link>
      </div>
      <Carousel>
        <CarouselContent className="-ml-8">
          {Rdata?.data?.map((data, index) => (
            <CarouselItem key={index} className="pl-8 md:basis-1/2">
              <SliderCard data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="-left-6 bg-primary-secondary-3 text-primary-white lg:-left-12" />
          <CarouselNext className="-right-6 bg-primary-secondary-3 text-primary-white lg:-right-12" />
        </div>
      </Carousel>
    </section>
  );
}
