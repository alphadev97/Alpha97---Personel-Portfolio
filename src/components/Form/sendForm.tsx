"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.css";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_n20q0jh",
          "template_e44b9pj",
          form.current,
          "QU0JFoVrzcaw2PnXN"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(form);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className={styles.send}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="from_name" />

        <input type="email" name="email_id" />

        <textarea name="message" cols={30} rows={10} />
        <input type="submit" value="Send" className={styles.submitBtn} />
      </form>
    </div>
  );
};
