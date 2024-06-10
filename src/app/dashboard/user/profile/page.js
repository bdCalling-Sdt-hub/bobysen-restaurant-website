import Image from "next/image";
import profilePic from "/public/dashboard-user/profile/profilePic.png";
import { Button } from "@/components/ui/button";
import UserProfileForm from "./_componets/UserProfileForm";

export const metadata = {
  title: "Your Profile | Bookable",
};

export default function UserProfile() {
  return (
    <div className="container pt-[160px]">
      <h1>Profile Picture</h1>
      <div className="mt-16 flex flex-col items-center lg:flex-row lg:gap-x-20">
        <Image src={profilePic} alt="profile picture" />

        <div className="space-y-5 text-center">
          <p className="font-kumbh-sans text-lg text-primary-secondary-1">
            Maximum size 5mb. Format jpg, jpeg, png
          </p>
          <Button
            className="rounded-3xl bg-primary-secondary-1 px-16 font-kumbh-sans text-primary-white"
            size="lg"
          >
            Change Picture
          </Button>
        </div>
      </div>

      {/* user details form */}
      <div className="my-10">
        <UserProfileForm />
      </div>
    </div>
  );
}
