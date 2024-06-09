import Image from "next/image";
import man from "/public/DynamicRestaurant/Ellipse 12.png";
import { Star } from "lucide-react";

export default function FeedbackCard() {
  // TODO: use dynamic data
  return (
    <div>
      <div className="flex items-center gap-x-4">
        {/* left */}
        <Image src={man} alt="user's profile picture" />

        {/* right */}
        <div>
          <div className="flex items-center gap-x-5 font-kumbh-sans">
            <h5 className="text-lg text-primary-secondary-1">
              Dianner Russell
            </h5>

            <p className="text-primary-secondary-2">Just Now</p>
          </div>
          <div className="mt-2 flex items-center gap-x-2">
            <Star
              className="fill-primary-secondary-1 stroke-primary-secondary-1"
              size={20}
            />
            <Star
              className="fill-primary-secondary-1 stroke-primary-secondary-1"
              size={20}
            />
            <Star
              className="fill-primary-secondary-1 stroke-primary-secondary-1"
              size={20}
            />
            <Star
              className="fill-primary-secondary-1 stroke-primary-secondary-1"
              size={20}
            />
            <Star
              className="fill-primary-secondary-1 stroke-primary-secondary-1"
              size={20}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 px-2">
        <p className="font-kumbh-sans text-primary-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit
          amet consequat sem auctor a.
        </p>
      </div>
    </div>
  );
}
