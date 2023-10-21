import Modal from "@/components/modal/Modal";
import Auth from "@/components/page/auth/Auth";
import AuthExit from "@/components/page/auth/AuthExit";
import AuthLogo from "@/components/page/auth/AuthLogo";
import Login from "@/components/page/auth/login/Login";

export default function page() {
  return (
    <Modal>
      <Auth>
        <AuthExit>x</AuthExit>
        <AuthLogo />
        <Login />
      </Auth>
    </Modal>
  );
}
