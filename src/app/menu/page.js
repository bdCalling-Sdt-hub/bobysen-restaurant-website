"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import FoodItemCard from "./_components/FoodItemCard";

export default function Menu() {
  // TODO: load menu categories from database
  const menuCategories = [
    "Pizza",
    "Rice",
    "Kabab",
    "Pulaw",
    "Sushi",
    "Fry",
    "Chicken",
    "Mutton",
    "Others",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  return (
    <div className="pt-[160px]">
      {/* menu category carousel */}
      <div className="flex h-[80px] items-center justify-center bg-primary-secondary-3/55 font-kumbh-sans text-primary-secondary-1">
        <Carousel className="container">
          <CarouselContent>
            {menuCategories?.map((category) => (
              <CarouselItem
                key={category}
                className={cn(
                  "basis-[14.28%] cursor-pointer p-2 text-center text-2xl font-medium transition-all duration-300 ease-in-out",
                  {
                    "bg-primary-secondary-2 text-primary-white":
                      selectedCategory.toLowerCase() === category.toLowerCase(),
                  },
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-lg border-0 bg-primary-secondary-3 text-white shadow" />
          <CarouselNext className="rounded-lg border-0 bg-primary-secondary-3 text-white shadow" />
        </Carousel>
      </div>

      {/* category items */}
      <div className="mx-auto my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-[80%] lg:grid-cols-4">
        {Array.from({ length: 7 }).map((_, idx) => (
          <FoodItemCard
            cardData={{ id: idx, name: selectedCategory, price: "190" }}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
