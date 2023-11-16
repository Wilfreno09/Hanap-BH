"use client";
import quickSort from "@/lib/google-api/sort";
import { StarIcon } from "@heroicons/react/24/solid";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function NearbySection({ data }: { data: PlaceDetailsType[] }) {
  const [width, setWidth] = useState(0);
  const div_ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth(div_ref?.current?.scrollWidth! - div_ref.current?.offsetWidth!);
  }, [div_ref]);
  return (
    data[0].place_id !== "" && (
      <motion.div className="h-full cursor-grab overflow-x-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex mx-5 space-x-5"
          ref={div_ref}
        >
          {quickSort(data)?.map((details) => (
            <div
              className="rounded-lg shadow-lg flex flex-col justify-between my-5"
              key={details.place_id}
            >
              <div className="aspect-video h-40 w-auto rounded-lg cursor-pointer bg-gray-900  sm:h-[12] lg:h-[15rem] hover:rounded-lg hover:scale-105 transform transition duration-300 ease-out"></div>
              <div className="flex flex-col space-y-1 px-2">
                <strong className=" text-gray-900 text-lg">
                  {details.name}
                </strong>
                <p className="text-gray-700 text-sm">
                  {details.location.vicinity}
                </p>
              </div>
              <div className="flex items-center justify-between px-2 font-semibold text-gray-900">
                <p className="text-md font-semibold">
                  <strong>{details.distance?.toFixed(2)}</strong> Km away
                </p>
                <div className="flex items-center space-x-1 p-3">
                  <p>{details.rating.average}</p>
                  <StarIcon className="h-3 text-gray-800" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    )
  );
}
