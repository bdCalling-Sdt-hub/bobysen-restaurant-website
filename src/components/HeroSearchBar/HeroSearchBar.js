"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import locationIcon from "/public/hero/location.svg";
import downArrowIcon from "/public/hero/downArrow.png";
import searchIcon from "/public/hero/search.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function HeroSearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState("");
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const router = useRouter();

  return (
    <div className="relative">
      <Input
        id="heroSearch"
        className="h-[65px] w-full rounded-3xl border border-primary-black bg-transparent pl-[160px] text-lg text-primary-black shadow"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div className="absolute left-[1%] top-[6%] h-[57px] w-[35%] text-ellipsis rounded-l-3xl border-l bg-primary-secondary-3 text-center font-kumbh-sans text-primary-white lg:left-[1%] lg:w-[27%]">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          defaultValue={"Location"}
          className="h-full w-full rounded-l-3xl bg-primary-secondary-3 pl-[25%] font-kumbh-sans text-primary-white outline-none lg:pl-10"
          onFocus={() => setIsLocationFocused(true)}
          onBlur={() => setIsLocationFocused(false)}
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
        onClick={() => router.push("/all-restaurant")}
      >
        <Image src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}
