import { useAppSelector } from "@/lib/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
export default function DetailPopUp() {
  const [view, setView] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(false);
  const place_detail = useAppSelector((state) => state.selected_detail_reducer);
  useEffect(() => {
    if (place_detail.place_id !== "") setView(true);
  }, [place_detail.place_id]);

  return view ? (
    <section
      className={`absolute flex flex-col bottom-0 z-10 w-full ${
        full ? "h-screen" : "h-5/6"
      } rounded-t-lg bg-white border-2 transform transition duration-500 ease-in overflow-y-auto`}
    >
      <div
        className="flex items- justify-center mb-3 py-4 "
        onClick={() => setFull((prev) => !prev)}
      >
        <span className="h-1 w-2/5 bg-gray-500 rounded-full"></span>
        <XMarkIcon
          className="absolute right-1 top-1 h-6 text-gray-900 m-2 "
          onClick={() => setView(false)}
        />
      </div>
      <div className="aspect-square w-full h-auto bg-red-500 rounded-md"></div>
      <div className="space-y-2 my-3 p-2 text-gray-900">
        <h1 className="text-xl font-bold">{place_detail.name}</h1>
        <p className="text-sm font-semibold text-gray-60">
          {place_detail.location.vicinity}
        </p>
      </div>
      {full ? (
        <>
          <div className="flex items-center space-x-5 mx-auto text-lg text-gray-900 ">
            <div className="flex items-center justify-center space-x-2">
              <p className="font-bold">₱</p>
              {place_detail.price.min ? (
                <p> {place_detail.price.min}</p>
              ) : (
                <i className="text-base text-gray-700">unknown</i>
              )}
            </div>
            <p>~</p>
            <div className="flex items-center justify-center space-x-2">
              <p className="font-bold">₱</p>

              {place_detail.price.max ? (
                <p>{place_detail.price.max}</p>
              ) : (
                <i className="text-base text-gray-700">unknown</i>
              )}
            </div>
          </div>
          <p className="mx-auto text-sm font-semibold text-gray-800 mt-3">
            {`(${place_detail.rooms})`} Rooms Available
          </p>
        </>
      ) : null}
      <button className="flex items-center justify-center border-2 border-gray-600 rounded-full my-5 mx-auto w-3/4 p-1">
        <p className="text-lg font-semibold text-gray-800 ">See more</p>
      </button>
    </section>
  ) : null;
}
