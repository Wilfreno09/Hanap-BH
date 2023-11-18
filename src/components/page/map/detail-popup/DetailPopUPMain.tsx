import { PlaceDetailsType } from "@/lib/types/place-detail";
import Image from "next/image";
import svgIMG from "../../../../../public/image-square-xmark-svgrepo-com.svg";
import { useEffect, useRef, useState } from "react";
import { HomeIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setSelectedDetail } from "@/lib/redux/slices/selected-detail-slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function DetailPopUPMain({ data }: { data: PlaceDetailsType }) {
  const router = useRouter();
  const [view, setView] = useState(false);
  const svg_ref = useRef<SVGSVGElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const map = useMap();
  const on_android = /Mobi|Android/i.test(navigator.userAgent);
  const on_ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  // useEffect(() => {
  //   function clickHandler(e: MouseEvent) {
  //     if (!svg_ref.current?.contains(e.target as Node)) {
  //       setView(false);
  //     }
  //   }
  //   document.addEventListener("click", clickHandler);

  //   return () => document.removeEventListener("click", clickHandler);
  // }, []);

  return (
    <>
      <AdvancedMarker
        key={data.place_id}
        position={data.location.coordinates}
        onClick={() => {
          map?.setZoom(18);
          map?.panTo({
            lat: data.location.coordinates.lat + 0.001,
            lng: data.location.coordinates.lng,
          });
          dispatch(setSelectedDetail(data));
          if (on_android || on_ios) {
            router.push(`/map?place_id=${data.place_id}`);
          }
        }}
      >
        {view && (
          <section
            onClick={() => dispatch(setSelectedDetail(data))}
            className=" absolute right-full -bottom-full bg-white shadow-lg rounded-lg text-gray-900 w-64 "
          >
            <XMarkIcon
              onClick={() => setView(false)}
              className="z-10 absolute top-2 right-2 h-5 cursor-pointer hover:scale-125 transform translate duration-300 ease-out"
            />
            <div className="relative aspect-square w-full flex items-center justify-center rounded-lg shadow-md">
              <Image
                src={svgIMG}
                alt="no image"
                className="object-contain h-[40%] w-auto"
              />
            </div>
            <div className="my-2 px-2">
              <p className="text-lg font-medium whitespace-nowrap">
                {data.name.length > 25
                  ? `${data.name.slice(0, 25)}...`
                  : data.name}
              </p>
              <p className="my-1">
                {data.location.vicinity.length > 45
                  ? `${data.location.vicinity.slice(0, 45)}...`
                  : data.location.vicinity}
              </p>
            </div>
            <div className="flex items-center justify-between px-3">
              <p className="text-md font-semibold">
                <strong>{data.distance?.toFixed(2)}</strong> Km away
              </p>
              <div className="flex space-x-1 mx-3 my-2">
                <p>{data.rating.average}</p>
                <StarIcon className="h-3" />
              </div>
            </div>
            <hr className="w-[90%] ml-[5%] self-center h-[2px] rounded-full bg-gray-500 mb-3" />
            <div className="flex items-center justify-center space-x-5 w-full text-base">
              <div className="flex items-center justify-center space-x-2">
                <p className="font-bold">₱</p>
                {data.price.min ? (
                  <p> {data.price.min}</p>
                ) : (
                  <i className="text-sm text-gray-700">unknown</i>
                )}
              </div>
              <p>~</p>
              <div className="flex items-center justify-center space-x-2">
                <p className="font-bold">₱</p>

                {data.price.max ? (
                  <p>{data.price.max}</p>
                ) : (
                  <i className="text-sm text-gray-700">unknown</i>
                )}
              </div>
            </div>
            <p className="flex justify-center text-xs font-semibold text-gray-800 p-3">
              {`(${data.rooms})`} Rooms Available
            </p>
            <Link
              href={`/place/${data.place_id}`}
              as={`/place/${data.place_id}`}
              target="_blank"
              className="text-sm font-semibold flex items-center justify-center  border border-gray-700 rounded-full p-[.3rem] m-2 hover:scale-105 hover:shadow-lg transform translate duration-300 ease-out"
            >
              See more
            </Link>
          </section>
        )}
        <HomeIcon
          ref={svg_ref}
          className="h-12 p-2 text-gray-900 hover:scale-125"
          onClick={() => {
            setView(true);
          }}
        />
      </AdvancedMarker>
    </>
  );
}
