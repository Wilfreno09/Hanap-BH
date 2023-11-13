"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";

export default function Header() {
  return (
    <header
      className={`fixed top-0 mx-5 my-4 z-10 flex items-center justify-evenly bg-white shadow-md border-2 py-1 px-5 rounded-full sm:bg-white sm:border-none sm:rounded-none sm:m-0 sm:shadow-md sm:justify-between md:px-10`}
    >
      <Logo />
      <Search />
      <div
        className={`relative flex items-center justify-center md:justify-end  text-gray-500 sm:justify-evenly sm:space-x-5`}
      >
        <AddPlace />
        <Menu />
      </div>
    </header>
  );
}
