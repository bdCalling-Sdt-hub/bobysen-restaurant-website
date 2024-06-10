import Image from "next/image";
import foodItemPic from "/public/Menu/foodItem1.png";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FoodItem() {
  // TODO: Use dynamic data

  return (
    <div className="container flex flex-col items-center gap-x-10 pb-24 pt-[180px] lg:flex-row">
      {/* left */}
      <div className="lg:w-[30%]">
        <Image
          src={foodItemPic}
          alt="Picture of the food item"
          className="w-full"
        />
      </div>

      {/* right */}
      <div className="lg:w-[60%]">
        {/* title */}
        <h1 className="text-primary-black">Chicken Curry Masala</h1>

        {/* rating */}
        <div className="mt-3 flex flex-col items-center gap-x-5 lg:flex-row">
          <div className="flex items-center gap-x-2">
            <Star className="fill-[#FFAD33] stroke-[#FFAD33]" />
            <Star className="fill-[#FFAD33] stroke-[#FFAD33]" />
            <Star className="fill-[#FFAD33] stroke-[#FFAD33]" />
            <Star className="fill-[#FFAD33] stroke-[#FFAD33]" />
            <Star className="fill-primary-secondary-2 stroke-primary-secondary-2" />
          </div>
          <p className="font-kumbh-sans text-lg text-primary-secondary-2">
            (150 Reviews)
          </p>
        </div>

        {/* price */}
        <p className="mb-7 mt-4 text-2xl font-semibold text-primary-black">
          $192.00
        </p>

        {/* desc */}
        <div className="space-y-3 pe-20 font-kumbh-sans">
          <h5 className="text-xl text-primary-black">Description</h5>
          <p className="text-lg text-primary-secondary-2">
            Our classic cheeseburger is made with a fresh, never-frozen beef
            patty that is cooked to perfection and topped with melted American
            cheese, lettuce, tomato, pickles, and onions.
          </p>
        </div>

        <div className="mt-8 flex items-stretch justify-between gap-x-5 lg:w-[65%]">
          {/* left */}
          <div className="flex h-[50px] items-center">
            <div
              role="button"
              className="rounded-0 flex h-[50px] items-center justify-center rounded-l-lg border-2 border-r-0 border-primary-secondary-2 bg-transparent px-3 text-primary-black hover:border-transparent hover:bg-red-400 hover:text-primary-white"
            >
              <Minus />
            </div>
            <Input
              className="h-[50px] w-[120px] border-2 border-primary-secondary-2 text-center text-2xl outline-0"
              style={{ borderRadius: "0" }}
            />
            <div
              role="button"
              className="rounded-0 flex h-[50px] items-center justify-center rounded-r-lg border-2 border-l-0 border-transparent bg-primary-secondary-3 px-3 text-3xl text-primary-white"
            >
              <Plus />
            </div>
          </div>

          {/* right */}
          <Button className="h-[50px] bg-primary-secondary-2 px-10 font-kumbh-sans text-lg text-primary-white">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="h-[50px] border-primary-secondary-2"
          >
            <Heart />
          </Button>
        </div>
      </div>
    </div>
  );
}
