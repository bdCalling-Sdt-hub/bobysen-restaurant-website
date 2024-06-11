"use client";

import Image from "next/image";
import foodPic from "/public/dashboard-user/favorite/foodPic.png";
import { Button } from "@/components/ui/button";
import StarRatings from "react-star-ratings";

export default function FavoriteCard() {
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

      <StarRatings rating={5} starRatedColor="#F5BE32" starDimension="30px" />
      <br />
      <Button className="mt-4 w-[75%] rounded-3xl bg-primary-secondary-2 font-kumbh-sans text-primary-white">
        Show Details
      </Button>
    </div>
  );
}
