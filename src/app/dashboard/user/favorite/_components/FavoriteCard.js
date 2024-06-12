"use client";

import Image from "next/image";
import foodPic from "/public/dashboard-user/favorite/foodPic.png";
import { Button } from "@/components/ui/button";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";

export default function FavoriteCard({ id }) {
  return (
    <div className="rounded-3xl border p-3">
      <Image src={foodPic} alt="food pic" />
      <h3 className="mb-3 mt-4 text-3xl font-semibold text-primary-secondary-1">
        Spinach & Mushroom
      </h3>
      <p className="mb-4 font-kumbh-sans text-primary-secondary-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        necessitatibus harum tempora molestias, neque vitae nostrum eos itaque,
        odio rem accusamus velit nulla facere tenetur quaerat quas! Beatae,
        atque nihil?
      </p>

      <div className="flex items-center gap-x-4">
        <StarRatings
          rating={4.5}
          starRatedColor="#F5BE32"
          starDimension="22px"
          starSpacing="6px"
        />
        <div className="flex items-center gap-2 pt-2 font-kumbh-sans text-lg font-bold">
          <h4 className="text-[#F5BE32]">4.5</h4>
          <span className="text-primary-secondary-1">(10)</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-x-4">
        <Button
          className="mt-4 flex-grow rounded-3xl bg-primary-secondary-2 font-kumbh-sans text-primary-white"
          asChild
        >
          <Link href={`/dashboard/user/favorite/${id}`}>Show Details</Link>
        </Button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="mt-4 rounded-full bg-primary-secondary-2 px-3 py-2 hover:bg-gray-700"
              variant="outline"
            >
              <Heart className="stroke-primary-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove from Favorite</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
