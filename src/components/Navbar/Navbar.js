"use client";

import logo from "/public/home/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer";
import { useState } from "react";

export default function Navbar() {
  const [profileDrawerOpenState, setProfileDrawerOpenState] = useState(false);

  return (
    <div className="absolute left-0 top-[30px] z-[9999] w-full">
      <div className="container flex max-h-[100px] items-center justify-between">
        {/* left */}
        <Link href="/" className="w-[30%] lg:w-[12%]">
          <Image src={logo} alt="logo" className="max-h-[100px] w-full" />
        </Link>

        {/* right */}
        <div className="flex items-center gap-x-1 lg:max-w-max lg:gap-x-5">
          <Button
            className="hover:bg-secondary-1 h-[40px] w-[90px] text-balance rounded-xl border border-primary-secondary-1 bg-primary-secondary-3 text-xs font-semibold hover:bg-primary-secondary-1 hover:text-primary-white lg:h-[40px] lg:w-[140px] lg:text-base"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
          >
            Download App
          </Button>
          <Button
            className="h-[40px] w-[90px] rounded-xl border border-primary-secondary-1 bg-transparent text-xs font-semibold text-primary-secondary-1 hover:bg-primary-secondary-1 hover:text-primary-white lg:h-[40px] lg:w-[140px] lg:text-base"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
            onClick={() => setProfileDrawerOpenState(!profileDrawerOpenState)}
          >
            My Profile
          </Button>
        </div>
      </div>

      {/* Profile Drawer */}
      <ProfileDrawer
        openState={profileDrawerOpenState}
        setOpenState={setProfileDrawerOpenState}
      />
    </div>
  );
}
