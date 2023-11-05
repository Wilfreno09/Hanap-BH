import Link from "next/link";
import logoImg from "../../../../public/logo.png";
import Image from "next/image";

export default function Logo() {
  const link_mobile =
    "relative flex items-center justify-center cursor-pointer";
  const link_pc = "sm:space-x-4";
  const image_mobile = "h-8  w-auto";
  const image_pc = "sm:h-10";
  const h1_mobile =
    "hidden  text-gray-800 text-base md:text-2xl font-bold italic ";
  const h1_pc = "sm:inline-flex";
  return (
    <Link href="/" as="/" className={`${link_mobile} ${link_pc}`}>
      <Image
        src={logoImg}
        alt="Logo"
        className={`${image_mobile} ${image_pc}`}
      />
      <h1 className={`${h1_mobile} ${h1_pc}`}>Hanap-BH</h1>
    </Link>
  );
}
