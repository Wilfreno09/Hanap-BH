"use client";
import {
  MapIcon,
  QueueListIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path_name = usePathname();
  return (
    <section className="absolute bottom-0 w-full h-16 flex items-center justify-center space-x-10 sm:hidden border shadow-lg z-10">
      <Link
        className="hover:bg-gray-200 rounded-lg flex flex-col items-center justify-center"
        href="/"
        as="/"
      >
        <QueueListIcon
          className={`h-8 m-1 mx-5 ${
            path_name === "/" ? "text-gray-900" : "text-gray-300"
          }`}
        />
        <p className="text-xs text-gray-700">List</p>
      </Link>
      <Link
        className="hover:bg-gray-200 rounded-lg flex flex-col items-center justify-center"
        href="/map"
        as="/map"
      >
        <MapIcon
          className={`h-8 m-1 mx-5 ${
            path_name === "/map" ? "text-gray-900" : "text-gray-300"
          }`}
        />
        <p className="text-xs text-gray-700">Map</p>
      </Link>
      <Link
        className="hover:bg-gray-200 rounded-lg flex flex-col items-center justify-center"
        href={`${path_name}?open_menu=true`}
      >
        <UserCircleIcon
          className={`h-8 m-1 mx-5 ${
            path_name === "/" ? "text-gray-900" : "text-gray-300"
          }`}
        />
        <p className="text-xs text-gray-700">Signup</p>
      </Link>
    </section>
  );
}
