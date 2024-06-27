"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInsertItemIntoFavoriteListMutation } from "@/redux/api/favouriteApi.js";
import { useGetSingleMenuQuery } from "@/redux/api/menuApi.js";
import showImage from "@/utils/fileHelper.js";
import { Error_Modal, Success_model } from "@/utils/modalHook.js";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function FoodItem({ params }) {
  const [favourite, { isLoading, isSuccess }] =
    useInsertItemIntoFavoriteListMutation();
  const { data: Mdata, refetch } = useGetSingleMenuQuery(params?.id?.[0]);
  // TODO: Use dynamic data
  const handleFavourite = async () => {
    try {
      const res = await favourite({ id: Mdata?.data?._id }).unwrap();

      if (!Mdata?.data?.isFavourite) {
        Success_model({ title: "Menu successfully added to favorite list" });
      } else if (Mdata?.data?.isFavourite) {
        Success_model({
          title: "Menu successfully removed from favorite list",
        });
      }
      refetch();
    } catch (error) {
      Error_Modal({ title: error?.message });
    }
  };

  return (
    <div className="container flex flex-col items-center gap-x-10 pb-24 pt-[180px] lg:flex-row">
      {/* left */}
      <div className="w-full lg:w-[30%]">
        <Image
          width={500}
          height={500}
          src={showImage(Mdata?.data?.image)}
          alt="Picture of the food item"
          className="w-full"
        />
      </div>

      {/* right */}
      <div className="mt-16 w-full lg:mt-0 lg:w-[60%]">
        {/* title */}
        <h1 className="text-primary-black">{Mdata?.data?.name}</h1>

        {/* rating */}
        {/* <div className="mt-3 flex flex-col items-center gap-x-5 lg:flex-row">
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
        </div> */}

        {/* price */}
        <p className="mb-7 mt-4 text-2xl font-semibold text-primary-black">
          $ {Mdata?.data?.price}
        </p>

        {/* desc */}
        <div className="space-y-3 pe-20 font-kumbh-sans">
          <h5 className="text-xl text-primary-black">Description</h5>
          <p className="text-lg text-primary-secondary-2">
            You can add this menu item to your cart to place an order.
            Additionally, you can mark it as a favorite for future reference.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-x-5 space-y-5 lg:w-[65%] lg:flex-row lg:justify-between lg:space-y-0">
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
              defaultValue={0}
              id="cartQuantityInput"
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

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className={`h-[50px] rounded-lg border px-3 hover:bg-gray-300/30 ${
                  Mdata?.data?.isFavourite
                    ? "border-transparent bg-primary-secondary-2"
                    : "border-primary-secondary-2"
                }`}
                variant="outline"
              >
                <Heart onClick={handleFavourite} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to Favorite</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
