import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
import Link from "next/link";

export default function ResultDropDown({
  details,
}: {
  details: PlaceDetailType[];
}) {
  return (
    <div className="fixed w-full md:asbolute">
      {details.map((detail: PlaceDetailType) => (
        <Link
          href={`/place-detail/${detail.place_id}`}
          key={detail.place_id}
          className=""
        >
          <h1>{detail.name}</h1>
          <h2>{detail.location.vicinity}</h2>
        </Link>
      ))}
    </div>
  );
}
