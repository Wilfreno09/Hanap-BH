"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between sm:justify-evenly  sm:space-x-5 shadow-md px-5 py-3 md:px-10 ">
      <Logo />
      <Search />
      <div className="flex items-center justify-end space-x-3 text-gray-500">
        <AddPlace />
        <Menu />
      </div>
    </header>
  );
}
