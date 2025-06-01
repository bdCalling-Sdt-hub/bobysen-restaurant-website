"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Value } from "@radix-ui/react-select";
import { useState } from "react";

const filterOptions = [
  {
    _id: 1,
    title: "All",
    value: "all",
  },
  {
    _id: 2,
    title: "Popular",
    value: "popular",
  },
  {
    _id: 3,
    title: "New",
    value: "new",
  },
  {
    _id: 4,
    title: "Top Rated",
    value: "topRated",
  },
  {
    _id: 5,
    title: "Recommended",
    value: "recommended",
  },
  {
    _id: 6,
    title: "Rating",
    value: "rating",
  },
 
]

export default function FilterOptions() {
    const [selectedOption, setSelectedOption] = useState(filterOptions[0]?.value);

  return (
    <div className="mt-2">
      {/* menu category carousel */}
      <div className="flex h-[80px] items-center justify-center  font-kumbh-sans text-primary-secondary-1">
        <Carousel className="w-full">
          <CarouselContent className=" px-2 w-[92%] mx-3 ">
            {filterOptions?.map((option, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  " basis-1/2 md:basis-1/3  lg:basis-1/4 xl:basis-1/6  text-balance text-center text-xl font-medium ",
                )}
                onClick={() => setSelectedOption(option?.value)}
              >
                <p
                  className={cn("bg-gray-200 px-5 py-1 rounded-md text-sm md:text-base", {
                    "bg-primary-secondary-1  text-primary-white transition-all duration-300 ease-in-out":
                      selectedOption === option?.value,
                  })}
                >
                  {option?.title}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-lg border bg-primary-secondary-3 text-white shadow md:left-0 -left-2 md:h-8 md:w-8 h-7 w-7  " />
          <CarouselNext className="rounded-lg border-0 bg-primary-secondary-3 text-white shadow -right-4 top-1/2  md:h-8 md:w-8 h-7 w-7" />
        </Carousel>
      </div>

     
    </div>
  );
}
