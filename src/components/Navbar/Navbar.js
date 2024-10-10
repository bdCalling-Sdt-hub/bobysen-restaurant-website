"use client";

import logo from "/public/home/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthBasedButton from "./_components/AuthBasedButton";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="absolute left-0 top-[30px] z-[9999] w-full">
      <div className="flex max-h-[100px] items-center justify-between pr-2 lg:container lg:pr-0">
        {/* left */}
        <Link href="/" className="w-[30%] lg:w-[12%]">
          <Image src={logo} alt="logo" className="max-h-[100px] w-full" />
        </Link>

        {/* center */}

        {/* right */}

        <div className="flex items-center gap-x-1 lg:max-w-max lg:gap-x-5">
          <div className="space-x-5 pt-2">
            <Link href="/event">Event</Link>
            {user?.userId && <Link href="/points">Points</Link>}
          </div>

          <Button
            className="hover:bg-secondary-1 h-[40px] w-[90px] text-balance rounded-xl border border-primary-secondary-1 bg-primary-secondary-3 text-xs font-semibold hover:bg-primary-secondary-1 hover:text-primary-white lg:h-[40px] lg:w-[140px] lg:px-0 lg:text-base"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
          >
            Download App
          </Button>

          {/* Auth Based Button */}
          <AuthBasedButton
            className="h-[40px] w-[90px] rounded-xl border border-primary-secondary-1 bg-transparent text-xs font-semibold text-primary-secondary-1 hover:bg-primary-secondary-1 hover:text-primary-white lg:h-[40px] lg:w-[140px] lg:text-base"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
          />
        </div>
      </div>
    </div>
  );
}
