"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import foodMenuIcon from "/public/DynamicRestaurant/menu.png";
import successfulIcon from "/public/DynamicRestaurant/succesful.png";
import usersIcon from "/public/DynamicRestaurant/users.png";
import calenderIcon from "/public/DynamicRestaurant/calendar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { FileSpreadsheet } from "lucide";
import { LoginPrompt_Modal } from "@/utils/modalHook";

export default function BookNowBtn({ id }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  // show modal if user exists else send to login
  const handleOpenModal = (e) => {
    e.preventDefault();
    if (!user) {
      setLoginModalOpen(true);
      setModalOpen(false);
    } else if (user?._id) {
      setModalOpen(true);
    }
  };

  return (
    <AlertDialog
      className="relative"
      open={modalOpen}
      onOpenChange={setModalOpen}
    >
      <AlertDialogTrigger
        className="absolute -bottom-2 left-1/2 w-[96%] -translate-x-1/2 -translate-y-1/2 rounded bg-primary-secondary-2 py-2 text-primary-white"
        onClick={handleOpenModal}
      >
        Book Now
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Image
              src={successfulIcon}
              alt="booking successful marker"
              className="mx-auto block"
            />
            <h4 className="my-3 text-center text-2xl text-primary-secondary-1">
              Table Booked Successfully
            </h4>
          </AlertDialogTitle>
          <Separator className="bg-primary-secondary-1" />
          <AlertDialogDescription>
            <div className="mx-auto my-5 w-3/4 space-y-3">
              <div className="flex items-center gap-x-4 font-kumbh-sans">
                <Image src={calenderIcon} alt="calendar icon" />
                <p className="text-xl">17 December 2022 | 12:15 PM</p>
              </div>
              <div className="flex items-center gap-x-4 font-kumbh-sans">
                <Image src={usersIcon} alt="users icon" />
                <p className="text-xl">2 Guests</p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-auto w-max">
          <Link href={`/menu/${id}`}>
            <AlertDialogAction className="flex items-center gap-x-3 bg-primary-secondary-3 px-5 py-6 text-lg font-bold text-primary-white">
              <Image src={foodMenuIcon} alt="food menu icon" />
              <span>Show Menu</span>
            </AlertDialogAction>
          </Link>
          <AlertDialogCancel className="absolute right-0 top-0 border-0">
            <CircleX />
          </AlertDialogCancel>
        </AlertDialogFooter>
        <Separator className="bg-primary-secondary-1" />

        <p className="text-justify font-kumbh-sans text-primary-white-dark">
          Your table is reserved! Since you reserved your table with Dine in
          Florida, your will automatically receive 2% off your bill when you pay
        </p>
      </AlertDialogContent>

      <>
        <LoginPrompt_Modal
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
      </>
    </AlertDialog>
  );
}
