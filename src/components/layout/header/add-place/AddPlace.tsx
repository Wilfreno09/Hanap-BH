import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
export default function AddPlace() {
  return (
    <Link href="/test" className="hidden md:inline-flex items-center space-x-2">
      <p className="">Add Your boarding House</p>
      <PlusIcon className="h-4 text-gray-950" />
    </Link>
  );
}
