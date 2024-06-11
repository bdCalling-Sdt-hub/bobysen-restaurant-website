import React from "react";
import FavoriteCard from "./_components/FavoriteCard";

export const metadata = {
  title: "Your Favorites | Bookable",
};

export default function UserFavorites() {
  return (
    <div className="container pt-[160px]">
      <h1>Favorite</h1>

      <div className="mt-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
        {Array.from({ length: 10 }).map((_, idx) => (
          <FavoriteCard key={idx} id={idx} />
        ))}
      </div>
    </div>
  );
}
