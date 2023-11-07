import EmailForm from "./EmailForm";
import Image from "next/image";
import logoImg from "../../../../../public/logo.png";
import FbLogin from "./FbLogin";
export default function Login() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center py-4 font-bold">
        <h1 className="text-md">Sign up or Log in</h1>
        <hr className="w-full h-px my-5" />
        <div className="relative flex items-center justify-center my-10 flex-col space-y-5">
          <Image
            src={logoImg}
            alt="logo"
            objectFit="contained"
            className="h-20 w-auto"
          />
          <p className="text-lg">Welcome to Hanap-BH</p>
        </div>
      </section>
      <EmailForm />
      <section className="w-full my-10 h-2 flex items-center justify-evenly">
        <hr className="w-5/12 h-0.5 bg-gray-300 " />
        <p>
          <strong>or</strong>
        </p>
        <hr className="w-5/12 h-0.5 bg-gray-300" />
      </section>
      <FbLogin />
    </div>
  );
}
