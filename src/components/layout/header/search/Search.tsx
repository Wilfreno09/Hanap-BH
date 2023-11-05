"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [active, setActive] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  async function getAutocomplete() {
    try {
      const result = await fetch("/api/map/autocomplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: search }),
      });

      const { data } = await result.json();
      setResults(data);
    } catch (error) {
      throw error;
    }
  }
  const form_mobile = "flex flex-grow items-center rounded-full p-2 px-2";
  const form_pc = "sm:border-2  sm:shadow-sm sm:grow-0 w-6/12";
  const input_mobile =
    "w-full px-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 ";
  const input_pc = "";
  const icon_mobile =
    " hidden h-8 text-gray-700 rounded-full p-2 cursor-pointer md:mx-2";
  const icon_pc = "sm:inline-flex sm:bg-gray-700 sm:text-white ";
  return (
    <form
      className={`${form_mobile} ${form_pc}`}
      autoFocus={false}
      autoComplete="off"
    >
      <input
        className={`${input_mobile} ${input_pc}`}
        type="text"
        id="search"
        placeholder="Search a place"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          clearTimeout(timer!);
          const newTimer = setTimeout(() => {
            getAutocomplete();
          }, 300);
          setTimer(newTimer!);
        }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <label htmlFor="search">
        <MagnifyingGlassIcon className={`${icon_mobile} ${icon_pc}`} />
      </label>
      {/* <ResultDropDown /> */}
    </form>
  );
}
