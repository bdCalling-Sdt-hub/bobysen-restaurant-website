import { Textarea } from "@/components/ui/textarea";
import StarRating from "./_components/StarRating";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Your Review | Bookatable",
};

export default function UserReview() {
  return (
    <div className="container pb-24 pt-[190px]">
      <StarRating />

      <p className="mb-8 mt-6 font-kumbh-sans text-lg text-primary-secondary-2">
        Please share your opinion about the restaurant
      </p>

      <Textarea
        placeholder="Your review"
        className="h-[150px] bg-primary-white-light px-5 py-3 text-base"
      />

      <Button
        size="lg"
        className="mt-10 w-full rounded-lg bg-primary-secondary-3 font-medium text-primary-white"
      >
        SEND REVIEW
      </Button>
    </div>
  );
}
