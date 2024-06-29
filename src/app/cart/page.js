"use client";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import CartCard from "./_components/CartCard";

// export const metadata = {
//   title: "Cart | Bookatable",
//   description: "The cart of bookatable platform",
// };

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mx-auto pb-24 pt-[160px] lg:w-[60%]">
      {/* title */}
      <h1 className="mb-10">Cart Details</h1>

      {/* cart cards */}
      <div className="space-y-10">
        {Array.from({ length: 3 }).map((_, idx) => (
          <CartCard key={idx} />
        ))}
      </div>

      {/* total */}
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <h1 className="font-normal text-primary-secondary-3">Total Cost</h1>
          <h1 className="font-bold text-primary-secondary-3">
            ${parseFloat(1500).toFixed(2)}
          </h1>
        </div>
        <Button className="mt-8 w-full rounded-lg bg-primary-secondary-3 font-medium text-primary-white">
          Payment
        </Button>
      </div>
    </div>
  );
}
