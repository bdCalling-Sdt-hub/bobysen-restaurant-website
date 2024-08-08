"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAddToCartMutation } from "@/redux/api/cartApi.js";
import { useInsertItemIntoFavoriteListMutation } from "@/redux/api/favouriteApi.js";
import { useGetSingleMenuQuery } from "@/redux/api/menuApi.js";
import { addToCart } from "@/redux/features/cartSlice.js";
import showImage from "@/utils/fileHelper.js";
import { Error_Modal, Success_model } from "@/utils/modalHook.js";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function FoodItem({ params }) {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const dispatch = useDispatch();
  const [favourite, { isLoading, isSuccess }] =
    useInsertItemIntoFavoriteListMutation();
  const router = useRouter();
  const [count, setCount] = useState(0);
  const { data: Mdata, refetch } = useGetSingleMenuQuery(params?.id?.[0]);
  const [addTocart] = useAddToCartMutation();
  // TODO: Use dynamic data
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
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
      Error_Modal({ title: error?.data?.message });
    }
  };

  const handleAddToCart = async () => {
    const data = {
      bookingId: booking,
      quantity: count,
      price: Mdata?.data?.price,
      menu: params?.id?.[0],
      menuName: Mdata?.data?.name,
      menuImage: Mdata?.data?.image,
      status: "unpaid",
    };

    const cartData = {
      bookingId: booking,
      menu: params?.id?.[0],
      quantity: count,
      amount: Number(count) * Number(Mdata?.data?.price),
      owner: Mdata?.data?.owner,
    };
    dispatch(addToCart(data));
    router.push(`/cart?booking=${booking}`);
    Success_model({ text: "Item successfully added into cart" });
    await addTocart({ body: cartData, id: booking }).unwrap();

    try {
    } catch (error) {
      Error_Modal({ text: error?.data?.message || "Something went wrong" });
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
           {Mdata?.data?.description}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-x-5 space-y-5 lg:w-[65%] lg:flex-row lg:justify-between lg:space-y-0">
          {/* left */}
          <div className="flex h-[50px] items-center">
            <div
              role="button"
              className="rounded-0 flex h-[50px] items-center justify-center rounded-l-lg border-2 border-r-0 border-primary-secondary-2 bg-transparent px-3 text-primary-black hover:border-transparent hover:bg-red-400 hover:text-primary-white"
            >
              <Minus onClick={decreaseCount} />
            </div>
            <Input
              className="h-[50px] w-[120px] border-2 border-primary-secondary-2 text-center text-2xl outline-0"
              style={{ borderRadius: "0" }}
              value={count}
              id="cartQuantityInput"
            />
            <button
              role="button"
              className="rounded-0 flex h-[50px] items-center justify-center rounded-r-lg border-2 border-l-0 border-transparent bg-primary-secondary-3 px-3 text-3xl text-primary-white"
            >
              <Plus onClick={() => setCount((count) => count + 1)} />
            </button>
          </div>

          {/* right */}
          <Button
            onClick={handleAddToCart}
            className="h-[50px] bg-primary-secondary-2 px-10 font-kumbh-sans text-lg text-primary-white"
          >
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
