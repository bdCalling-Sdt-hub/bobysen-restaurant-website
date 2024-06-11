import Image from "next/image";
import profilePic from "/public/profileDrawer/profilePic.png";
import userIcon from "/public/profileDrawer/user.png";
import historyIcon from "/public/profileDrawer/history.png";
import favoriteIcon from "/public/profileDrawer/favorite.png";
import logoutIcon from "/public/profileDrawer/logout.png";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileDrawer({ openState, setOpenState }) {
  return (
    <div
      className={cn(
        "invisible fixed left-0 top-0 z-[99999] h-screen w-full opacity-0 transition-all duration-300 ease-in-out",
        {
          "opacity-1 visible": openState,
        },
      )}
    >
      <div
        className="backdrop absolute left-0 top-0 -z-10 h-full w-full bg-primary-white opacity-[0.93]"
        onClick={() => setOpenState(false)}
      ></div>

      {/* right side drawer */}
      <div
        className={cn(
          "absolute right-0 top-0 z-[99999] h-full w-[75%] translate-x-[100vw] bg-primary-secondary-2 px-8 py-20 text-primary-white opacity-[0.92] transition-all duration-300 ease-in-out md:w-[50%] lg:w-[24%]",
          { "translate-x-0": openState },
        )}
      >
        <div className="mx-auto max-w-max">
          {/* <Avatar>
            <AvatarImage src={profilePic} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <Image
            src={profilePic}
            alt="profile picture"
            className="mx-auto w-[80%]"
          />
          <h4 className="mt-4 text-center text-2xl font-bold">John Doe</h4>
        </div>

        {/* menu */}
        <div className="mt-12">
          <Link
            href="/dashboard/user/profile"
            className="flex items-center gap-x-6"
          >
            <Image src={userIcon} alt="user icon" />
            <h3 className="font-kumbh-sans text-xl">Personal Details</h3>
          </Link>

          <Separator className="my-4 bg-primary-secondary-3" />

          <Link
            href="/dashboard/user/orders"
            className="flex items-center gap-x-6"
          >
            <Image src={historyIcon} alt="booking history icon" />
            <h3 className="font-kumbh-sans text-xl">Booking History</h3>
          </Link>

          <Separator className="my-4 bg-primary-secondary-3" />

          <Link
            href="/dashboard/user/favorite"
            className="flex items-center gap-x-6"
          >
            <Image src={favoriteIcon} alt="favorite icon" />
            <h3 className="font-kumbh-sans text-xl">Favorite</h3>
          </Link>

          <Separator className="my-4 bg-primary-secondary-3" />

          <Link href={"#"} className="flex items-center gap-x-6">
            <Image src={logoutIcon} alt="log out icon" />
            <h3 className="font-kumbh-sans text-xl">Logout</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
