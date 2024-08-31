"use client";
import { Button } from "@/components/ui/button";
import { useGetMenuByReservationIdQuery } from "@/redux/api/cartApi";
import { useLoadPaymentZoneMutation } from "@/redux/api/orderApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Empty } from "antd";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { rehydrateCartFromLocalStorage } from "@/redux/features/cartSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CartCard from "./_components/CartCard";
// export const metadata = {
//   title: "Cart | Bookatable",
//   description: "The cart of bookatable platform",
// };

export default function Cart() {
  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");
  const restaurantId = searchParams.get("restaurant");
  const cart = useSelector((state) => state.cart);
  const { data: Cdata } = useGetMenuByReservationIdQuery(booking);
  const dispatch = useDispatch();
  const [makePayment] = useLoadPaymentZoneMutation();
  useEffect(() => {
    dispatch(rehydrateCartFromLocalStorage());
  }, [dispatch]);

  const handlePayment = async () => {
    const data = {
      cart: Cdata?.data?._id,
      order: {
        id_order: uuidv4(),
        currency: "MUR",
        amount: cart?.totalAmount,
        iframe_behavior: {
          height: 400,
          width: 350,
          custom_redirection_url: process.env.NEXT_PUBLIC_REDIRECT_URL,
          language: "EN",
        },
      },
    };
    try {
      const res = await makePayment(data).unwrap();
      window.open(res?.data?.payment_zone_data);
      Success_model("Payment successfull.");
    } catch (error) {
      Error_Modal("error");
    }
  };
  return (
    <div className="mx-auto pb-24 pt-[180px] lg:w-[68%]">
      {/* title */}
      <div className="mb-10 flex items-center justify-between">
        <h1>Cart Details</h1>
        <Link href={`/menu/${restaurantId}?booking=${booking}`}>
          <button className="flex items-center gap-x-2 rounded-lg bg-primary-secondary-3 px-4 py-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:bg-black hover:text-primary-secondary-3">
            <Plus />
            Add More
          </button>
        </Link>
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
            <div className="mt-2 flex items-center justify-between">
              <h1 className="text-3xl font-normal text-primary-secondary-3">
                Status
              </h1>
              <h1 className="text-3xl font-bold text-primary-secondary-3">
                {Cdata?.data?.status ?? "unpaid"}
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
            <Button
              disabled={Cdata?.data?.status === "paid"}
              onClick={handlePayment}
              className="mt-8 w-full rounded-lg bg-primary-secondary-3 font-medium text-primary-white"
            >
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
