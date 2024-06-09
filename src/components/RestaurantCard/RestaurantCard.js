import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import restaurant1 from "/public/ExploreRestaurants/restaurant-1.png";
import star from "/public/ExploreRestaurants/star.png";
import locationIcon from "/public/ExploreRestaurants/location.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function RestaurantCard({ card }) {
  return (
    <Card className="shadow">
      <CardHeader>
        <Image
          src={restaurant1}
          alt="restaurant 1"
          className="mx-auto mb-2 block"
        />
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold text-primary-secondary-1">
            Trattoria dall&apos;Oste
          </h3>
          <div className="flex items-center gap-x-2 text-xl">
            <Image src={star} alt="rating star" />
            <h4>(4.5)</h4>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={locationIcon} alt="location marker icon" />
          <span className="font-kumbh-sans text-base font-medium text-primary-black/75">
            Via Luigi Alamanni, 3, 50123 Firenze
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-kumbh-sans text-sm text-primary-secondary-2">
          Featuring seasonal and sustainable seafood that is flown in fresh
          daily, our chef-driven menu proves that no matter when you’re dining,
          seafood can be truly exceptional.
          {/* TODO: Add relevant link */}
          <Link
            href="/restaurant/id"
            className="mt-1 inline-block font-semibold text-primary-black"
          >
            Read More...
          </Link>
        </p>
      </CardContent>
      <CardFooter>
        {/* TODO: Add relevant link */}
        <Link href={`/restaurant/1`} className="w-full rounded-xl">
          <Button
            className="w-full bg-primary-secondary-3 font-kumbh-sans font-bold text-primary-white"
            size="lg"
          >
            Book a table
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
