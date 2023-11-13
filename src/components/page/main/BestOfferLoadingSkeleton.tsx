import React from "react";

export default function BestOfferLoadingSkeleton() {
  return (
    <div className="flex flex-col shadow-lg rounded-lg space-y-5 py-3">
      <span className="aspect-square h-auto w-full rounded-lg bg-gray-600 hover:scale-105 animate-pulse"></span>
      <span
        className="w-3/4 bg-gray-600 animate-pulse h-3 rounded-lg"
        style={{
          animationDelay: "0.5s",
          animationDuration: "1s",
        }}
      ></span>
      <span
        className="w-3/4 bg-gray-600 animate-pulse h-3 rounded-lg"
        style={{
          animationDelay: "0.5s",
          animationDuration: "1s",
        }}
      ></span>
    </div>
  );
}
