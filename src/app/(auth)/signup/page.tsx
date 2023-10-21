import Auth from "@/components/page/auth/Auth";
import AuthExit from "@/components/page/auth/AuthExit";
import AuthLogo from "@/components/page/auth/AuthLogo";
import SignUp from "@/components/page/auth/signup/SignUp";

export default function page() {
  return (
    <>
      <Auth>
        <AuthExit>{"< Back"}</AuthExit>
        <AuthLogo />
        <SignUp />
      </Auth>
    </>
  );
}
