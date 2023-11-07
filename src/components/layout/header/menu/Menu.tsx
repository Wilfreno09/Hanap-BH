"use client";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
export default function Menu() {
  const path_name = usePathname();
  const search_params = useSearchParams();
  const isActive = search_params.get("open_menu");

  return (
    <Link
      href={`${path_name}?open_menu=true`}
      as={`${path_name}?open_menu=true`}
      className={` hidden lg:flex items-center rounded-full cursor-pointer hover:shadow-lg sm:space-x-2 sm:border-2 sm:p-2 ${
        isActive ? "shadow-lg" : ""
      }`}
    >
      <Bars3Icon className={`hidden h-6 sm:inline-flex`} />
      <UserCircleIcon className={`h-10 sm:h-8`} />
    </Link>
  );
}
