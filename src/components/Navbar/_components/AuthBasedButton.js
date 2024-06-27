"use client";

import ProfileDrawer from "@/components/ProfileDrawer/ProfileDrawer";
import { Button } from "@/components/ui/button";
import { selectUser } from "@/redux/features/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function AuthBasedButton(props) {
  const [profileDrawerOpenState, setProfileDrawerOpenState] = useState(false);
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <>
      {user?.userId ? (
        <Button
          {...props}
          onClick={() => setProfileDrawerOpenState(!profileDrawerOpenState)}
        >
          My Profile
        </Button>
      ) : (
        <Button {...props} asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      )}

      {/* Profile Drawer */}
      <ProfileDrawer
        openState={profileDrawerOpenState}
        setOpenState={setProfileDrawerOpenState}
      />
    </>
  );
}
