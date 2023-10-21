"use client";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { useAppSelector } from "@/lib/redux/store";
import { redirect } from "next/navigation";
export default function SignUp() {
  const [view_password, setViewPassword] = useState({
    first: false,
    second: false,
  });
  const [register_success, setRegisterSucess] = useState(false);
  const [user_form, setUserForm] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");

  if (register_success) {
    redirect(`/auth/form/${user_form.email}`);
  }
  async function handleSubmit() {
    if (user_form.password1 !== user_form.password2) return;
    try {
      setError("");
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: user_form.email,
          password: user_form.password1,
        }),
      });
      const response = await res.json();
      setError(response.message);
      setRegisterSucess(true);
    } catch (err) {
      console.log("Erorr: ", err);
      throw error;
    }
  }
  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className={styles.input__container}>
        <input
          value={user_form.email}
          onChange={(e) =>
            setUserForm((prev) => ({
              email: e.target.value,
              password1: prev.password1,
              password2: prev.password2,
            }))
          }
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className={`${styles.input} ${error === "" ? "" : styles.error}`}
        />
      </div>
      <div className={styles.input__container}>
        <input
          value={user_form.password1}
          onChange={(e) =>
            setUserForm((prev) => ({
              email: prev.email,
              password1: e.target.value,
              password2: prev.password2,
            }))
          }
          type={!view_password.first ? "password" : "text"}
          name="password1"
          id="password1"
          placeholder="password"
          className={`${styles.input} ${
            user_form.password2 === ""
              ? ""
              : user_form.password1 === user_form.password2
              ? styles.matched
              : styles.error
          }`}
          minLength={6}
          required
        />
        <div
          className={styles.visibility__icon__container}
          onClick={() =>
            setViewPassword((prev) => {
              return { first: !prev.first, second: prev.second };
            })
          }
        >
          {view_password.first ? (
            <VisibilityRoundedIcon className={styles.password__visibility} />
          ) : (
            <VisibilityOffRoundedIcon className={styles.password__visibility} />
          )}
        </div>
      </div>
      <div className={styles.input__container}>
        <input
          value={user_form.password2}
          onChange={(e) => {
            setUserForm((prev) => ({
              email: prev.email,
              password1: prev.password1,
              password2: e.target.value,
            }));
          }}
          type={!view_password.second ? "password" : "text"}
          name="password2"
          id="password2"
          placeholder="confirm password"
          className={`${styles.input} ${
            user_form.password2 === ""
              ? ""
              : user_form.password1 === user_form.password2
              ? styles.matched
              : styles.error
          }`}
          minLength={6}
          required
        />
        <div
          className={styles.visibility__icon__container}
          onClick={() =>
            setViewPassword((prev) => {
              return { first: prev.first, second: !prev.second };
            })
          }
        >
          {view_password.second ? (
            <VisibilityRoundedIcon className={styles.password__visibility} />
          ) : (
            <VisibilityOffRoundedIcon className={styles.password__visibility} />
          )}
        </div>
      </div>
      <button className={styles.button}>
        <h1>Sign up</h1>
      </button>
      <h1 className={styles.error__message}>
        {user_form.password1 !== user_form.password2 &&
          "Password does not match"}
        {error && JSON.stringify(error)}
      </h1>
    </form>
  );
}
