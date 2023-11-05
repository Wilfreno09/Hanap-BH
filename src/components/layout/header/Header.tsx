"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";

export default function Header() {
  const header_mobile =
    "sticky top-0 z-10 flex items-center justify-evenly bg-transparent shadow-sm m-5 border-2 p-3 rounded-full";
  const header_pc =
    "sm:bg-white sm:border-none sm:rounded-none sm:m-0 sm:bg-white sm:shadow-md sm:justify-between  md:px-10";

  const right_mobile =
    "relative flex items-center justify-center md:justify-end  text-gray-500 ";
  const right_pc = "sm:justify-evenly sm:space-x-5";
  return (
    <header className={`${header_mobile} ${header_pc}`}>
      <Logo />
      <Search />
      <div className={`${right_mobile} ${right_pc}`}>
        <AddPlace />
        <Menu />
      </div>
    </header>
  );
}
