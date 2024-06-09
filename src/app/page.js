import Hero from "@/components/Hero/Hero";
import ExploreRestaurants from "@/components/HomeSections/ExploreRestaurants/ExploreRestaurants";
import RestaurantsSlider from "@/components/HomeSections/RestaurantsSlider/RestaurantsSlider";
import Services from "@/components/HomeSections/Services/Services";
import Image from "next/image";

export const metadata = {
  title: "Home | bookatable",
  description:
    "A restaurant table booking platform that enables diners to customize their booking by requesting a specific table location or view.",
};

export default function Home() {
  return (
    <div className="pt-[160px]">
      <Hero />
      <ExploreRestaurants />
      <Services />
      <RestaurantsSlider />
    </div>
  );
}
