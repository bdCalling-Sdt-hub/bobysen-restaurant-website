import React from "react";
import DynamicRestaurantContainer from "./_components/DynamicRestaurantContainer/DynamicRestaurantContainer";

export const metadata = {
  title: {
    absolute: "Book Restaurant | Bookatable",
  },
  description: "Book restaurant page",
};

export default function page({ params }) {
  return (
    <div>
      <DynamicRestaurantContainer params={params} />
    </div>
  );
}
