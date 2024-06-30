"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { setLocation, setSearchTerm } from "@/redux/features/searchSlice.js";
import { Error_Modal } from "@/utils/modalHook.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import downArrowIcon from "/public/hero/downArrow.png";
import locationIcon from "/public/hero/location.svg";
import searchIcon from "/public/hero/search.svg";

export default function HeroSearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setLocation({
              Iat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          );
        },
        (error) => {
          Error_Modal({ title: error?.message });
        },
      );
    } else {
      Error_Modal({ title: "Geolocation is not supported by this browser." });
    }
  };
  const router = useRouter();

  return (
    <div className="relative">
      <Input
        placeholder="Search by restaurant name"
        id="heroSearch"
        className="h-[65px] w-full rounded-3xl border border-primary-black bg-transparent pl-[150px] text-lg text-primary-black shadow"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute left-[1%] top-[6%] h-[57px] w-[35%] text-ellipsis rounded-l-3xl border-l bg-primary-secondary-3 text-center font-kumbh-sans text-primary-white lg:left-[1%] lg:w-[27%]">
        <input
          onClick={getLocation}
          type="text"
          placeholder="search here"
          // onChange={(e) => setLocation(e.target.value)}
          defaultValue={"Location"}
          className="h-full w-full cursor-pointer rounded-l-3xl border-2 border-transparent bg-primary-secondary-3 pl-[25%] font-kumbh-sans text-primary-white outline-none focus:border-2 focus:border-black lg:pl-10"
          // onFocus={() => setIsLocationFocused(true)}
          // onBlur={() => setIsLocationFocused(false)}
        />
        <Image
          src={downArrowIcon}
          alt="arrow down icon"
          className="absolute right-1 top-1/2"
        />
      </div>

      <div
        className={cn(
          "invisible absolute ml-2 mt-1 w-[300px] rounded-xl bg-primary-secondary-3 px-5 py-3 font-kumbh-sans text-primary-white opacity-0 transition-all duration-300 ease-in-out",
          { "opacity-1 visible block": isLocationFocused },
        )}
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            className="flex cursor-pointer items-center gap-x-2 rounded-3xl border border-transparent px-3 py-4 transition-all duration-200 ease-in hover:text-primary-secondary-1"
            role="button"
            key={idx}
          >
            <Image src={locationIcon} alt="location icon" />
            <p>Dhaka</p>
          </div>
        ))}
      </div>

      <Image
        src={locationIcon}
        alt="location icon"
        className="absolute left-[3%] top-[35%]"
      />
      {/* TODO: Set the relevant link */}
      <div
        className="absolute right-[2%] top-[9%] cursor-pointer lg:right-[1%]"
        role="button"
        onClick={() => router.push("/all-restaurants")}
      >
        <Image
          src={searchIcon}
          alt="search icon"
          onClick={() => dispatch(setSearchTerm(search))}
        />
      </div>
    </div>
  );
}
