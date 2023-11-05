import Link from "next/link";
export default function NotLoggedInDropDown() {
  const link_mobile = "hover:bg-slate-100 px-5 py-3 text-sm";
  const link_pc = "";
  return (
    <>
      <Link
        className={`${link_mobile} ${link_pc} text-base`}
        href="/auth/login"
        as="/auth/login"
      >
        <p>
          <b>Sign up</b>
        </p>
      </Link>
      <Link className={`${link_mobile} ${link_pc}`} href="/auth/signup">
        <p>Log in</p>
      </Link>
      <hr style={{ margin: "10px 0" }} />
      <Link className={`${link_mobile} ${link_pc}`} href="/test">
        <p>Add Your Bouarding House</p>
      </Link>
      <Link className={`${link_mobile} ${link_pc}`} href="/test">
        <p>FAQ</p>
      </Link>
      <Link className={`${link_mobile} ${link_pc}`} href="/test">
        <p>Terms of Service</p>
      </Link>
    </>
  );
}
