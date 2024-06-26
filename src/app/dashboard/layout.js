"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const pathName = usePathname();

  console.log(user);

  useEffect(() => {
    if (!user?._id) {
      router.push(`/login?redirectLink=${pathName}`); // send pathname as query to redirect user to previous page
    }

    return () => {};
  }, [pathName, router, user?._id]);

  if (user?._id) {
    return children;
  }
}
