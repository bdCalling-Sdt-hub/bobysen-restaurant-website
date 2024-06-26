"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useGetAllMenuQuery } from "@/redux/api/menuApi.js";
import { useGetAllMenuCategoryQuery } from "@/redux/api/menuCategoryApi.js";
import { useState } from "react";
import FoodItemCard from "../_components/FoodItemCard";

export default function DynamicMenu({ params }) {
  const query = {
    restaurant: params?.id,
  };
  const { data: menuCategories } = useGetAllMenuCategoryQuery(query);
  const [selectedCategory, setSelectedCategory] = useState(
    menuCategories?.data[0]?._id,
  );

  const { data: Fdata } = useGetAllMenuQuery({ category: selectedCategory });
  return (
    <div className="pt-[160px]">
      {/* menu category carousel */}
      <div className="flex h-[80px] items-center justify-center bg-primary-secondary-3/55 font-kumbh-sans text-primary-secondary-1">
        <Carousel className="container">
          <CarouselContent>
            {menuCategories?.data?.map((category, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "basis-[14.28%] cursor-pointer p-2 text-center text-2xl font-medium transition-all duration-300 ease-in-out",
                  {
                    "bg-primary-secondary-2 text-primary-white":
                      selectedCategory === category?._id,
                  },
                )}
                onClick={() => setSelectedCategory(category?._id)}
              >
                {category?.title}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-lg border-0 bg-primary-secondary-3 text-white shadow" />
          <CarouselNext className="rounded-lg border-0 bg-primary-secondary-3 text-white shadow" />
        </Carousel>
      </div>

      {/* category items */}
      <div className="mx-auto my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-[80%] lg:grid-cols-4">
        {Fdata?.data?.map((data, idx) => (
          <FoodItemCard cardData={data} key={idx} />
        ))}
      </div>
    </div>
  );
}
