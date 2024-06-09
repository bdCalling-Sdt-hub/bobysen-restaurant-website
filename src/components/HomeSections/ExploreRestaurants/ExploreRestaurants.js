import Link from "next/link";
import rightArrow from "/public/ExploreRestaurants/rightArrow.png";
import Image from "next/image";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";

export default function ExploreRestaurants() {
  return (
    <section className="container my-[60px]">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="w-1/2">
          <h1 className="font-bold text-primary-secondary-1">
            Explore{" "}
            <span className="text-primary-secondary-3">Top Restaurants</span>
          </h1>
          <p className="mt-4 font-kumbh-sans text-xl text-primary-secondary-2 lg:w-[40%]">
            Check your city Near by Restaurant
          </p>
        </div>

        {/* right */}
        <Link
          href="/all-restaurant"
          className="flex items-center gap-x-2 border-b-2 border-transparent hover:border-b-2 hover:border-y-primary-secondary-2"
        >
          <p className="font-kumbh-sans">See All</p>
          <Image src={rightArrow} alt="right arrow" />
        </Link>
      </div>

      {/* TODO: Load Card Data from database */}
      <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-5 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
        {Array.from({ length: 3 }).map((_, idx) => (
          <RestaurantCard key={idx} />
        ))}
      </div>
    </section>
  );
}
