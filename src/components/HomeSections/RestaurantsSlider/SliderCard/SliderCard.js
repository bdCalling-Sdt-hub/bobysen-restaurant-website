import { Button } from "@/components/ui/button";
import showImage from "@/utils/fileHelper.js";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "/public/restaurantSlider/location-marker.png";
import starIcon from "/public/restaurantSlider/Star.png";

// get dynamic card data
export default function SliderCard({ data }) {
  return (
    <div className="flex flex-col items-center justify-between gap-y-6 rounded-3xl border p-4 lg:flex-row lg:gap-x-8 lg:gap-y-0">
      {/* left */}
      <div className="lg:w-[50%]">
        <Image
          width={200}
          height={100}
          src={showImage(data?.images[0]?.url)}
          alt="restaurant picture"
          className="w-full"
        />
      </div>

      {/* right */}
      <div className="lg:w-[70%]">
        {/* card title */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-primary-secondary-1">{data?.name}</h1>
          <div className="flex items-center gap-x-2">
            <Image src={starIcon} alt="rating star icon" />
            <h3 className="text-xl">({data?.avgReviews})</h3>
          </div>
        </div>

        {/* card content */}
        <div className="mb-3 mt-2">
          <p className="font-kumbh-sans text-sm text-primary-secondary-2">
            {data?.description}
            <Link
              href={`/restaurant/id`}
              className="ml-1 mt-1 inline-block text-sm font-semibold text-primary-black"
            >
              Read More...
            </Link>{" "}
          </p>

          {/* todo: add relevant link */}
        </div>

        <div className="mb-4 flex items-center gap-x-2">
          <Image src={locationIcon} alt="location marker icon" />
          <span className="font-kumbh-sans text-base font-medium text-primary-black/75">
            {data?.address}
          </span>
        </div>

        {/* card footer */}
        {/* TODO: Add relevant link */}
        <Link href={`/restaurant/${data?._id}`} className="w-full rounded-xl">
          <Button className="w-full bg-primary-secondary-3 font-kumbh-sans font-bold text-primary-white">
            Book a table
          </Button>
        </Link>
      </div>
    </div>
  );
}
