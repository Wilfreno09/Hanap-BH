"use client";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
export default function Menu() {
  const [active, setActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setActive(false);
      }
    }
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  return (
    <>
      <div
        className="flex items-center justify-center border-2 sm:space-x-2  sm:p-1 rounded-full cursor-pointer hover:shadow-sm "
        onClick={() => setActive(true)}
        ref={menuRef}
      >
        <Bars3Icon className="hidden sm:inline-flex h-6" />
        <UserCircleIcon className="h-10 md:h-8" />
      </div>
    </>
  );
}
