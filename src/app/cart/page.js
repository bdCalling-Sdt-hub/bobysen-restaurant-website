"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import CartCard from "./_components/CartCard";
import { Empty } from "antd";
import { Plus } from "lucide-react";

// export const metadata = {
//   title: "Cart | Bookatable",
//   description: "The cart of bookatable platform",
// };

export default function Cart() {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className="mx-auto pb-24 pt-[180px] lg:w-[68%]">
      {/* title */}
      <div className="mb-10 flex items-center justify-between">
        <h1>My Cart</h1>
        <button className="flex items-center gap-x-2 rounded-lg bg-primary-secondary-3 px-4 py-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:bg-black hover:text-primary-secondary-3">
          <Plus />
          Add More
        </button>
      </div>

      {cart?.items?.length ? (
        <>
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
              <h1 className="text-3xl font-normal text-primary-secondary-3">
                Total Cost
              </h1>
              <h1 className="text-3xl font-bold text-primary-secondary-3">
                $ {cart?.totalAmount}
              </h1>
            </div>

            {/* <div className="mt-4 flex items-center justify-between">
              <h1 className="text-3xl font-normal text-primary-secondary-3">
                Status
              </h1>
              <h1 className="text-3xl font-bold text-primary-secondary-3">
                {cart?.status}
              </h1>
            </div> */}
            <Button className="mt-8 w-full rounded-lg bg-primary-secondary-3 font-medium text-primary-white">
              Payment
            </Button>
          </div>
        </>
      ) : (
        <div className="my-16 flex h-full w-full items-center justify-center">
          <Empty />
        </div>
      )}
    </div>
  );
}
