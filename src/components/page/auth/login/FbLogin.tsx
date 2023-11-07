import Image from "next/image";
import fbImg from "../../../../../public/icons8-facebook-f.svg";

export default function FbLogin() {
  return (
    <button className="flex items-center justify-center border rounded-lg w-10/12 mx-auto shadow-md py-2 space-x-5">
      <div className="relative">
        <Image
          src={fbImg}
          alt="facebook"
          objectFit="contain"
          className="h-10 w-auto text-white"
        />
      </div>
      <p>Log in with Facebook</p>
    </button>
  );
}
