import Image from "next/image";
import offline from "../../../../public/laptop-xmark-alt-svgrepo-com.svg";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
export default function Offline() {
  const path_name = usePathname();
  const router = useRouter();
  return (
    <main className="text-gray-900 dark:text-white">
      <section className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="realtive aspect-square h-20 w-auto lg:h-20">
          <Image src={offline} alt="offline" className="object-contain" />
        </div>
        <div className="flex flex-col items-center justify-center text-lg">
          <p>You are Offline</p>
          <button
            onClick={() => router.push(path_name)}
            className="flex items-center justify-center p-2 border text-white bg-gray-900 rounded-lg text-base my-3 hover:scale-105 transition transform duration-200 ease-in-out"
          >
            Refresh
            <ArrowPathIcon className="h-4 mx-1" />
          </button>
        </div>
      </section>
      s
    </main>
  );
}
