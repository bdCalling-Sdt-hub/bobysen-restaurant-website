import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import showImage from "@/utils/fileHelper.js";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import locationIcon from "/public/ExploreRestaurants/location.svg";
import star from "/public/ExploreRestaurants/star.png";

export default function RestaurantCard({ data }) {
  return (
    <Card className="shadow">
      <CardHeader>
        <Image
          width={400}
          height={400}
          src={showImage(data?.restaurant?.images[0]?.url)}
          alt="restaurant 1"
          className="mx-auto mb-2 block"
        />
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold text-primary-secondary-1">
            {data?.restaurant?.name}
          </h3>
          <div className="flex items-center gap-x-2 text-xl">
            <Image src={star} alt="rating star" />
            <h4> {data?.restaurant?.avgReviews}</h4>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={locationIcon} alt="location marker icon" />
          <span className="font-kumbh-sans text-base font-medium text-primary-black/75">
            {data?.restaurant?.address}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-kumbh-sans text-sm text-primary-secondary-2">
          {data?.restaurant?.description}
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
        <Link
          href={`/restaurant/${data?.restaurant?._id}`}
          className="w-full rounded-xl"
        >
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
