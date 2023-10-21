"use client";
import { FocusEvent, useState } from "react";
import styles from "./Form.module.css";
import { useParams } from "next/navigation";

export default function Form() {
  const [register_form, setRegisterForm] = useState({
    given_name: "",
    family_name: "",
    email: "",
    birth_date: Date.now(),
    gender: "",
  });

  const params = useParams();
  const email = decodeURIComponent(params.email.toString());
  console.log(register_form.gender);

  function setGender(e: FocusEvent<HTMLInputElement, Element>) {
    setRegisterForm((prev) => ({ ...prev, gender: e.target.value }));
  }
  return (
    <>
      <form className={styles.form} autoComplete="off">
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
