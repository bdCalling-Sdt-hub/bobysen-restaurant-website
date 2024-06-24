import UserProfileForm from "./_componets/UserProfileForm";
import UserImage from "./_componets/UserImage";

export const metadata = {
  title: "Your Profile | Bookable",
  description: "User profile page",
};

export default function UserProfile() {
  return (
    <div className="container pt-[160px]">
      <h1>Profile Picture</h1>

      {/* user image */}
      <div className="mt-16 flex flex-col items-center lg:flex-row lg:gap-x-20">
        <UserImage />
      </div>

      {/* user details form */}
      <div className="my-10">
        <UserProfileForm />
      </div>
    </div>
  );
}
