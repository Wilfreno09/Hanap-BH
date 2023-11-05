import NotLoggedInDropDown from "./NotLoggedInDropDown";
import LoggedInDropDown from "./LoggedInDropDown";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function MenuDropDown() {
  const session = useSession();
  const section_ref = useRef<HTMLTableSectionElement>(null);
  const path_name = usePathname();
  const router = useRouter();

  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      if (!section_ref.current?.contains(e.target as Node)) {
        router.replace(path_name);
      }
    }
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  const section_mobile =
    "fixed w-screen bg-white rounded-lg z-20 flex flex-col border-2";
  const section_pc =
    "sm:w-1/3 sm:right-4 sm:shadow-lg sm:top-16 mt-1 md:right-8 lg:right-12 lg:w-1/5";
  return (
    <section className={`${section_mobile} ${section_pc}`} ref={section_ref}>
      {session.status === "authenticated" ? (
        <LoggedInDropDown />
      ) : (
        <NotLoggedInDropDown />
      )}
    </section>
  );
}
