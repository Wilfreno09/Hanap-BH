import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
export default function AddPlace() {
  const link_mobile = " flex items-center space-x-2 whitespace-nowrap";
  const link_pc = "lg:inline-flex";
  const p_mobile = " ";
  const p_pc = "";
  const icon_mobile = " h-5 text-gray-950";
  const icon_pc = "lg:h-4";
  return (
    <Link href="/test" className={`${link_mobile} ${link_pc}`}>
      <p className={`${p_mobile} ${p_pc}`}>Add Your boarding House</p>
      <PlusIcon className={`${icon_mobile} ${icon_pc}`} />
    </Link>
  );
}
