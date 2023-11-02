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
        className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-sm "
        onClick={() => setActive(true)}
        ref={menuRef}
      >
        <Bars3Icon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </>
  );
}
