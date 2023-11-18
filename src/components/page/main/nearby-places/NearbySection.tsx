import { motion } from "framer-motion";
import NearbyLoadingSkeleton from "./NearbyLoadingSkeleton";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { PlaceDetailsType } from "@/lib/types/place-detail";
const NearbyPlaceListMain = dynamic(
  () => import("@/components/page/main/nearby-places/NearbyPlacesListMain"),
  { loading: () => <NearbyLoadingSkeleton /> }
);
const NearbyPlaceListMobile = dynamic(
  () => import("@/components/page/main/nearby-places/NearbyPlaceListMobile"),
  { loading: () => <NearbyLoadingSkeleton /> }
);
export default function NearbySection({ data }: { data: PlaceDetailsType[] }) {
  const [width, setWidth] = useState(0);
  const [page_width, setPageWidth] = useState(0);
  const div_ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function resizeHandler() {
      setPageWidth(window.innerWidth);
    }
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    setWidth(div_ref?.current?.scrollWidth! - div_ref.current?.offsetWidth!);
  }, [div_ref.current?.scrollWidth, div_ref.current?.offsetWidth]);

  return (
    <section className="flex flex-col space-y-5 py-5 lg:h-[85vh]">
      <h1 className="text-3xl font-bold my-5 mx-8 md:text-5xl">
        Closest to you
      </h1>
      {page_width > 640 ? (
        <motion.div className="h-full cursor-grab overflow-x-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex mx-5 space-x-5"
            ref={div_ref}
          >
            <NearbyPlaceListMain data={data} />
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex overflow-x-auto scrollbar-hide">
          <NearbyPlaceListMobile data={data} />
        </div>
      )}
    </section>
  );
}
