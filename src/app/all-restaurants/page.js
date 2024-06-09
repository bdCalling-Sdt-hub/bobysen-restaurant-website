import HeroSearchBar from "@/components/HeroSearchBar/HeroSearchBar";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";

export default function AllRestaurants() {
  return (
    <div className="container pt-[160px]">
      <div className="flex flex-col items-center justify-between space-y-5 lg:flex-row lg:space-y-0">
        {/* left */}
        <div className="lg:w-1/2">
          <h1 className="font-bold text-primary-secondary-1">
            Explore{" "}
            <span className="text-primary-secondary-3">Restaurants</span>
          </h1>
          <p className="mt-4 font-kumbh-sans text-xl text-primary-secondary-2 lg:w-[40%]">
            Check your city Near by Restaurant
          </p>
        </div>

        {/* right */}
        <div className="lg:w-[40%]">
          <HeroSearchBar />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, idx) => (
          <RestaurantCard key={idx} />
        ))}
      </div>
    </div>
  );
}
