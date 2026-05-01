import React from "react";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col items-center animate-pulse border p-5 px-2 rounded-lg border-gray-300 ">
      {/* IMAGE SKELETON */}
      <div className="sm:w-34 h-32 mt-2 rounded bg-gray-200"></div>

      <br />

      {/* TITLE */}
      <div className="w-24 h-4 bg-gray-200 rounded self-start ml-[22.5px]"></div>

      {/* TYPE */}
      <div className="w-16 h-3 bg-gray-200 rounded mt-2 self-start ml-[22.5px]"></div>

      {/* PRICE */}
      <div className="w-28 h-5 bg-gray-200 rounded mt-[12px] self-start ml-[22.5px]"></div>

      {/* BUTTONS */}
      <div className="flex gap-2 mt-3 justify-end pr-7.5 w-full px-2">
        <div className="w-10 h-8 bg-gray-200 rounded"></div>
        <div className="w-16 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
