"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import CartCard from "./_components/CartCard";

// export const metadata = {
//   title: "Cart | Bookatable",
//   description: "The cart of bookatable platform",
// };

export default function Cart() {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mx-auto pb-24 pt-[160px] lg:w-[60%]">
      {/* title */}
      <h1 className="mb-10">Cart Details</h1>

      {/* cart cards */}
      <div className="space-y-10">
        {cart?.items?.map((data, idx) => (
          <CartCard
            key={idx}
            data={data}
            bookingId={booking}
            totalAmount={cart?.totalAmount}
          />
        ))}
      </div>

      {/* total */}
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <h1 className="font-normal text-primary-secondary-3">Total Cost</h1>
          <h1 className="font-bold text-primary-secondary-3">
            $ {cart?.totalAmount}
          </h1>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="font-normal text-primary-secondary-3">Status</h1>
          <h1 className="font-bold text-primary-secondary-3">{cart?.status}</h1>
        </div>
        <Button className="mt-8 w-full rounded-lg bg-primary-secondary-3 font-medium text-primary-white">
          Payment
        </Button>
      </div>
    </div>
  );
}
