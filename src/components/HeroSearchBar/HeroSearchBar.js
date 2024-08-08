"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { setLocation, setSearchTerm } from "@/redux/features/searchSlice.js";
import { Error_Modal } from "@/utils/modalHook.js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import downArrowIcon from "/public/hero/downArrow.png";
import locationIcon from "/public/hero/location.svg";
import searchIcon from "/public/hero/search.svg";
import { ArrowUpRight } from "lucide-react";

export default function HeroSearchBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, setSearch] = useState();
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const pathName = usePathname();
  const searchBtnRef = useRef();

  // search bar value
  const { searchTerm } = useSelector((state) => state.search);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setLocation({
              Iat: position.coords.latitude,
              lng: position.coords.longitude,
            }),

            router.push(`/all-restaurants`),
          );
        },
        (error) => {
          Error_Modal(error?.data?.message);
        },
      );
    } else {
      Error_Modal("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="relative">
      <Input
        placeholder="Search by restaurant name"
        id="heroSearch"
        className={`h-[65px] w-full rounded-3xl border border-primary-black bg-transparent pl-[140px] ${pathName === "/" ? "lg:pl-[148px]" : "lg:pl-[160px]"} pr-[70px] text-lg text-primary-black shadow`}
        defaultValue={
          pathName === "/all-restaurants" && searchTerm ? searchTerm : ""
        }
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchBtnRef.current.click();
          }
        }}
      />

      <div className="absolute left-[1%] top-[6%] h-[57px] w-[35%] text-ellipsis rounded-l-3xl border-l bg-primary-secondary-3 text-center font-kumbh-sans text-primary-white lg:left-[1%] lg:w-[27%]">
        <input
          onClick={() => setIsLocationFocused(!isLocationFocused)}
          onBlur={() => setIsLocationFocused(!isLocationFocused)}
          type="text"
          value={"Location"}
          readOnly
          className="h-full w-full cursor-pointer rounded-l-3xl border-2 border-transparent bg-primary-secondary-3 pl-[20%] font-kumbh-sans text-primary-white outline-none focus:border-2 focus:border-black lg:pl-9"
        />
        <Image
          src={downArrowIcon}
          alt="arrow down icon"
          className="absolute right-1 top-1/2"
        />
      </div>

      <div
        className={cn(
          "invisible absolute ml-2 mt-1 w-max rounded-xl bg-primary-secondary-3 px-2 py-2 font-kumbh-sans text-primary-white opacity-0 transition-all duration-300 ease-in-out",
          { "opacity-1 visible block": isLocationFocused },
        )}
      >
        <div
          className="flex cursor-pointer items-center gap-x-2 rounded-3xl border border-transparent px-3 py-1 transition-all duration-200 ease-in hover:text-primary-secondary-1"
          role="button"
          onClick={getLocation}
        >
          <p className="flex items-center gap-x-[2px] text-base">
            Set Nearby Location{" "}
            <ArrowUpRight height={17} width={17} className="block pb-1" />
          </p>
        </div>
      </div>

      <Image
        src={locationIcon}
        alt="location icon"
        className="absolute left-[3%] top-[35%]"
      />

      <div
        className="absolute right-[2%] top-[9%] cursor-pointer lg:right-[1%]"
        role="button"
        ref={searchBtnRef}
        onClick={() => {
          dispatch(setSearchTerm(search));
          router.push("/all-restaurants");
        }}
      >
        <Image src={searchIcon} alt="search icon" className="" />
      </div>
    </div>
  );
}
