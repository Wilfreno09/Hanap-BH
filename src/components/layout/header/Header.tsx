"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";

export default function Header() {
  return (
    <header
      className={`absolute w-screen top-3 z-10 flex items-center justify-center bg-transparent sm:shadow-md sm:bg-white sm:top-0 sm:w-screen sm:my-0 sm:mb-10 sm:rounded-none md:mx-0`}
    >
      <div className="flex items-center justify-center border-2 rounded-full px-3 py-1 bg-white drop-shadow-lg sm:border-none sm:drop-shadow-none sm:w-full md:justify-evenly lg:justify-between sm:px-10 ">
        <Logo />
        <Search />
        <div
          className={`hidden relative items-center justify-center md:justify-end  text-gray-500 sm:justify-evenly sm:space-x-5 lg:flex`}
        >
          <AddPlace />
          <Menu />
        </div>
      </div>
    </header>
  );
}
