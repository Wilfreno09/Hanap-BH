"use client";
import { FocusEvent, FormEvent, useState } from "react";
import styles from "./Form.module.css";
import { redirect, useParams } from "next/navigation";
import { useAppSelector } from "@/lib/redux/store";

export default function Form() {
  const [register_form, setRegisterForm] = useState({
    given_name: "",
    family_name: "",
    email: "",
    birth_date: Date.now(),
    gender: "",
  });
  const [user_update_sucess, setUserUpdateSuccess] = useState(false);
  const redirect_url = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );
  const params = useParams();
  const email = decodeURIComponent(params.email.toString());
  console.log(register_form.gender);

  if (user_update_sucess) {
    redirect(redirect_url);
  }

  function setGender(e: FocusEvent<HTMLInputElement, Element>) {
    setRegisterForm((prev) => ({ ...prev, gender: e.target.value }));
  }
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register_form),
      });

      setUserUpdateSuccess(response.ok);
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
      <form className={styles.form} autoComplete="off" onSubmit={submitForm}>
        <div className={styles.name}>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />

          <input
            type="text"
            name="family_name"
            id="family_name"
            placeholder="Family Name"
          />
        </div>
        <input type="email" className={styles.email} disabled value={email} />
        <input type="date" name="birthdate" id="birthdate" />
        <div className={styles.gender}>
          <input
            type="radio"
            name="male"
            id="male"
            value="male"
            checked={register_form.gender === "male"}
            onChange={setGender}
          />
          <label htmlFor="male">
            <h1>Male</h1>
          </label>
          <input
            type="radio"
            name="female"
            id="female"
            value="female"
            checked={register_form.gender === "female"}
            onChange={setGender}
          />
          <label htmlFor="female">
            <h1>Female</h1>
          </label>
          <input
            type="radio"
            name="other"
            id="other"
            value="other"
            checked={register_form.gender === "other"}
            onChange={setGender}
          />
          <label htmlFor="other">
            <h1>Other</h1>
          </label>
        </div>
        {register_form.gender === "other" && (
          <input
            type="text"
            name="specify"
            id="specify"
            placeholder="Specify"
          />
        )}
        <button className={styles.button}>
          <h1>Register</h1>
        </button>
      </form>
    </>
  );
}
