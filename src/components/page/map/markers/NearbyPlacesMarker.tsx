import { setSelectedDetail } from "@/lib/redux/slices/selected-detail-slice";
import { AppDispatch } from "@/lib/redux/store";
import { PlaceDetailsType } from "@/lib/types/place-detail";
import { HomeIcon } from "@heroicons/react/24/solid";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DetailPopUPMain from "../detail-popup/DetailPopUPMain";

export default function NearbyPlacesMarker({
  datas,
}: {
  datas: PlaceDetailsType[];
}) {
  return (
    <>
      {datas?.map((data) => (
        <DetailPopUPMain key={data.place_id} data={data} />
      ))}
    </>
  );
}
