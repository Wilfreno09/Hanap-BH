"use client";
import { setSelectedDetail } from "@/lib/redux/slices/selected-detail-slice";
import { AppDispatch } from "@/lib/redux/store";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { useDispatch } from "react-redux";
import DetailPopUPMain from "../detail-popup/DetailPopUPMain";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NearbyPlacesMarker({
  datas,
}: {
  datas: PlaceDetailsType[];
}) {
  const [on_mobile, setOnMobile] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (
      /Mobi|Android/i.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, [navigator.userAgent]);

  return (
    <>
      {datas?.map((data) => (
        <AdvancedMarker
          key={data.place_id}
          position={data.location.coordinates}
          onClick={() => {
            dispatch(setSelectedDetail(data));
          }}
          className="cursor-pointer"
        >
          <DetailPopUPMain
            key={data.place_id}
            data={data}
            on_mobile={on_mobile}
          />
        </AdvancedMarker>
      ))}
    </>
  );
}
