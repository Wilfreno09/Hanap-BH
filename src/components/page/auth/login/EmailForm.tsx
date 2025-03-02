"use client";
import { useAppSelector } from "@/lib/redux/store";
import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import loadingSVG from "../../../../../public/loading-transparent.svg";
import Image from "next/image";
export default function EmailForm() {
  const router = useRouter();
  const last_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );
  const dialog_ref = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [error_msg, setErrorMsg] = useState({
    email: "",
    code: "",
  });
  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@") || email === "") {
      setErrorMsg((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/email/code-sender", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const response = await res.json();
      console.log("REsponse: ", response);
      if (res.status === 200) {
        setLoading(false);
        dialog_ref.current?.showModal();
        return;
      }
      setErrorMsg(response.error);
    } catch (error) {
      throw error;
    }
  }
  async function codeVerifier(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("/api/email/code-vefifier", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if (res.status === 200) {
        router.replace(last_route);
      }
      const response = await res.json();
      setErrorMsg((prev) => ({ ...prev, code: response.msg }));
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
      <form
        className=" flex flex-col mx-10 rounded-lg border shadow-md border-gray-200"
        onSubmit={submitForm}
      >
        <input
          type="email"
          placeholder="Email"
          className="h-16 px-5 rounded-t-lg outline-none text-lg text-gray-800 font-medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={` relative flex items-center justify-center space-x-5  h-12  rounded-b-lg bg-gray-400 text-white  hover:text-gray-900`}
        >
          {loading ? (
            <Image
              src={loadingSVG}
              alt="loading..."
              className="h-10 w-auto object-contain"
            />
          ) : (
            <>
              <p className="text-lg font-semibold ">Sign up</p>
              <ArrowLongRightIcon className="h-6" />
            </>
          )}
        </button>
      </form>
      {error_msg?.email !== "" ? (
        <p className="text-red-500 font-bold text-sm my-5 mx-auto">
          {error_msg?.email}
        </p>
      ) : null}
      <dialog
        ref={dialog_ref}
        id="sign-up"
        className=" p-5 rounded-lg  shadow-lg border-gray-500"
      >
        <div className="flex flex-col  space-y-4">
          <XMarkIcon
            className="h-5 text-gray-500 self-end hover:text-gray-950 hover:cursor-pointer"
            onClick={() => dialog_ref.current?.close()}
          />
          <section className="flex flex-col text-sm space-y-5">
            <p>a mail has been sent to your email address</p>
            <strong className="self-center">{email}</strong>
            <p>provide the code below to verify :</p>
          </section>
          <form autoComplete="off" className="flex flex-col space-y-4">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              placeholder="Code here"
              className="w-full h-10 px-5 border border-gray-200 rounded-lg outline-gray-800"
            />
            <button className="self-center border-gray-300 bg-gray-200 shadow:sm rounded-lg w-2/3 p-2 hover:shadow-lg hover:border-gray-900 ">
              {loading ? (
                <Image src={loadingSVG} alt="loading.." />
              ) : (
                <p> verify</p>
              )}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
