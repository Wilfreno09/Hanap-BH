import Link from "next/link";
import logoImg from "../../../../public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      as="/"
      className="relative flex items-center justify-center space-x-4 cursor-pointer my-auto"
    >
      <Image src={logoImg} alt="Logo" className="h-8 md:h-10 w-auto" />
      <h1 className="hidden sm:inline-flex text-gray-800 text-2xl font-bold italic whitespace-nowrap">
        Hanap-BH
      </h1>
    </Link>
  );
}
