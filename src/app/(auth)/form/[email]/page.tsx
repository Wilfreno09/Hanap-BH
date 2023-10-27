import Auth from "@/components/page/auth/Auth";
import AuthLogo from "@/components/page/auth/AuthLogo";
import Form from "@/components/page/auth/form/Form";

export default function page() {
  return (
    <>
      <Auth>
        <AuthLogo />
        <Form />
      </Auth>
    </>
  );
}
