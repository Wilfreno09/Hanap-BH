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
  return (
    <form
      className={`flex grow items-center rounded-full py-2 px-2 sm:border-2  sm:shadow-sm sm:grow-0 w-6/12`}
      autoFocus={false}
      autoComplete="off"
    >
      <input
        className={`w-full px-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 `}
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
      <label htmlFor="search" className="rounded-full md:bg-gray-900 md:mx-px">
        <MagnifyingGlassIcon
          className={`h-6 text-gray-500  cursor-pointer  md:text-white md:m-1 `}
        />
      </label>
      {/* <ResultDropDown /> */}
    </form>
  );
}
