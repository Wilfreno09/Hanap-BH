"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ResultDropDown from "./ResultDropDown";
import { PlaceDetailType } from "@/lib/types/google-place-api/place-detail";
export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [details, setDetails] = useState<PlaceDetailType[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [active, setActive] = useState<boolean>(false);

  async function getPlaceDetails(query: string) {
    try {
      const res = await fetch(`/api/map/autocomplete?search=${query}`);
      const response = await res.json();
      setDetails(response.result);
    } catch (error) {
      throw error;
    }
  }
  return (
    <form
      className="relative flex-grow md:w-1/3 flex items-center border-2 rounded-full px-2 md:shadow-sm py-2 mx-10"
      autoFocus={false}
      autoComplete="off"
    >
      <input
        className="w-full  px-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        type="text"
        id="search"
        placeholder="Search a place"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          clearTimeout(timer!);
          const newTimer = setTimeout(() => {
            getPlaceDetails(e.target.value);
          }, 400);
          setTimer(newTimer!);
        }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <label htmlFor="search">
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 text-white bg-gray-700 rounded-full p-2 cursor-pointer md:mx-2" />
      </label>
      {search !== "" && active ? <ResultDropDown details={details} /> : null}
    </form>
  );
}
