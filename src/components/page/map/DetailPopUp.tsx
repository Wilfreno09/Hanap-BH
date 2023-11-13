import { useAppSelector } from "@/lib/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
export default function DetailPopUp() {
  const [view, setView] = useState<boolean>(false);
  const place_detail = useAppSelector((state) => state.selected_detail_reducer);
  console.log(place_detail);
  console.log(view);
  useEffect(() => {
    if (place_detail.place_id !== "") setView(true);
  }, [place_detail.place_id]);

  return view ? (
    <section className="absolute flex flex-col bottom-0 z-10 w-full h-5/6 rounded-t-lg bg-white border-2 transform transition duration-300 ease-in">
      <XMarkIcon
        className="absolute right-1 h-5 text-gray-900 m-2 "
        onClick={() => setView(false)}
      />
      <div className="aspect-square w-full h-auto bg-red-500 rounded-md"></div>
      <div>
        <h1>{place_detail.name}</h1>
        <p>{place_detail.location.vicinity}</p>
      </div>
      
    </section>
  ) : null;
}
