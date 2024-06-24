"use client";

import Image from "next/image";
import profilePic from "/public/dashboard-user/profile/profilePic.png";
import { Button } from "@/components/ui/button";
import { useGetSingleUserQuery } from "@/redux/api/authApi";

export default function UserImage() {
  const { data, isLoading } = useGetSingleUserQuery();
  return (
    <>
      <Image src={profilePic} alt="profile picture" />

      <div className="space-y-5 text-center">
        <p className="font-kumbh-sans text-lg text-primary-secondary-1">
          Maximum size 5mb. Format jpg, jpeg, png
        </p>
        <Button
          className="rounded-3xl bg-primary-secondary-1 px-16 font-kumbh-sans text-primary-white"
          size="lg"
        >
          Change Picture
        </Button>
      </div>
    </>
  );
}
