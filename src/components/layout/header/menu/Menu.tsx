"use client";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
export default function Menu() {
  const path_name = usePathname();
  const search_params = useSearchParams();
  const isActive = search_params.get("open_menu");
  const menu_mobile =
    "flex items-center rounded-full cursor-pointer hover:shadow-lg ";
  const menu_pc = "sm:space-x-2 sm:border-2 sm:p-2";
  const menu_icon_mobile = "hidden h-6";
  const menu_icon_pc = "sm:inline-flex";
  const user_icon_mobile = "h-10";
  const user_icon_pc = "sm:h-8";

  return (
    <Link
      href={`${path_name}?open_menu=true`}
      as={`${path_name}?open_menu=true`}
      className={`${menu_mobile} ${menu_pc} ${isActive ? "shadow-lg" : ""}`}
    >
      <Bars3Icon className={`${menu_icon_mobile} ${menu_icon_pc}`} />
      <UserCircleIcon className={`${user_icon_mobile} ${user_icon_pc}`} />
    </Link>
  );
}
