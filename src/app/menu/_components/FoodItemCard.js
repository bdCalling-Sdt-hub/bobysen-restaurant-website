"use client";

import Image from "next/image";
import foodPic from "/public/Menu/foodItem.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarRatings from "react-star-ratings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import BookNowModal from "./BookNowModal";

export default function FoodItemCard({ cardData }) {
  const { id, name, price } = cardData;
  const params = useSearchParams().get("state");
  const restaurantId = usePathname().replace("/menu/", "");
  const router = useRouter();
  const [bookNowModalOpen, setBookNowModalOpen] = useState(false);

  // show book table prompt if params has state
  const handleOrderNowBtn = () => {
    if (params === "only-menu") {
      setBookNowModalOpen(true);
    } else {
      router.push(`/menu/item/${id}`);
    }
  };

  return (
    <>
      <Card className="rounded-3xl border bg-transparent text-primary-secondary-1 shadow-none">
        <CardHeader>
          <CardTitle>
            <Image src={foodPic} alt={`${name}`} className="mb-3 block" />
            <p className="text-3xl font-bold">{name}</p>
          </CardTitle>
          <CardDescription className="font-kumbh-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            iste ea amet porro cum harum praesentium cupiditate quae eveniet
            sunt at est odit, illo, voluptatum repellat esse recusandae impedit
            unde?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-2xl font-medium">
            ${parseFloat(price).toFixed(2)}
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
        </CardContent>
        <CardFooter>
          <Button
            className="w-full rounded-3xl bg-primary-secondary-1 font-kumbh-sans text-primary-white"
            onClick={handleOrderNowBtn}
          >
            Order Now
          </Button>
        </CardFooter>
      </Card>
      <BookNowModal
        open={bookNowModalOpen}
        setOpen={setBookNowModalOpen}
        restaurantId={restaurantId}
      />
    </>
  );
}
