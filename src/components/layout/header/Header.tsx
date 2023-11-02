"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AddPlace from "./add-place/AddPlace";
import Search from "./search/Search";
import Menu from "./menu/Menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3 md:px-10 ">
      <Logo />
      <Search />
      <div className="flex items-center justify-end space-x-5 text-gray-500">
        <AddPlace />
        <Menu />
      </div>
    </header>
  );
}
