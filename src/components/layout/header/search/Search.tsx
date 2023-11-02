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
      className="flex items-center border-2 rounded-full px-2 md:shadow-sm py-2 "
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
            getAutocomplete();
          }, 300);
          setTimer(newTimer!);
        }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <label htmlFor="search">
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 text-white bg-gray-700 rounded-full p-2 cursor-pointer md:mx-2" />
      </label>
      {/* <ResultDropDown /> */}
    </form>
  );
}
