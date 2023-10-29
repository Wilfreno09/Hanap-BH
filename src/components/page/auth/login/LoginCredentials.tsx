import { OtherHouses } from "@mui/icons-material";
import styles from "./LoginCredentials.module.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { signIn } from "next-auth/react";

import { FormEvent, useState } from "react";
import { useAppSelector } from "@/lib/redux/store";

export default function LoginCredentials() {
  const [view_pass, setViewPass] = useState<boolean>(false);
  const [login_form, setLoginForm] = useState({
    user: "",
    password: "",
  });
  const [error, setError] = useState({
    status: "",
    message: "",
  });
  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const sign_in = await signIn("credentials", {
        ...login_form,
        redirect: false,
      });
      if (sign_in?.error) {
        if (sign_in.error === "0") {
          setError({
            message: "Please input your Credentials",
            status: sign_in.error,
          });
        }
        if (sign_in.error === "1") {
          setError({
            message: "Please input your Email or Username",
            status: sign_in.error,
          });
        }
        if (sign_in.error === "2") {
          setError({
            message: "Please input your Password",
            status: sign_in.error,
          });
        }
        if (sign_in.error === "400") {
          setError({
            message: "User not Found",
            status: sign_in.error,
          });
        }
        if (sign_in.error === "401") {
          setError({
            message: "Password Incorrect",
            status: sign_in.error,
          });
        }
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <form autoComplete="off" className={styles.form} onSubmit={submitForm}>
      <div
        className={`${styles.user} ${
          error?.status === "0" ||
          error.status === "1" ||
          error.status === "400"
            ? styles.input__error
            : ""
        }`}
      >
        <label htmlFor="user">
          <AccountCircleSharpIcon className={styles.input__icon} />
        </label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Email / Username"
          value={login_form.user}
          onChange={(e) =>
            setLoginForm((prev) => ({ ...prev, user: e.target.value }))
          }
        />
      </div>
      <div
        className={`${styles.password} ${
          error?.status === "0" || error.status === "2" || error.status == "401"
            ? styles.input__error
            : ""
        }`}
      >
        <label htmlFor="password">
          <LockSharpIcon className={styles.input__icon} />
        </label>
        <input
          type={view_pass ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Password"
          value={login_form.password}
          onChange={(e) =>
            setLoginForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {view_pass ? (
          <VisibilityOffRoundedIcon
            onClick={() => setViewPass(false)}
            className={styles.password__visibility}
          />
        ) : (
          <VisibilityRoundedIcon
            onClick={() => setViewPass(true)}
            className={styles.password__visibility}
          />
        )}
      </div>
      {error.message !== "" ? (
        <h1 className={styles.error}>{error.message}</h1>
      ) : null}
      <button className={styles.login__button}>
        <h3>Login</h3>
      </button>
    </form>
  );
}
