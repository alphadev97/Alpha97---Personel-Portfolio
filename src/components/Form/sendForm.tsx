"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.css";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            toast.success("Form Submitted Successfully!");
            console.log(result.text);
            setFormData({
              from_name: "",
              email_id: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Something Went Wrong!");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className={styles.send}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email_id"
          placeholder="Your Email Address"
          value={formData.email_id}
          onChange={handleInputChange}
        />

        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <input type="submit" value="Send" className={styles.submitBtn} />
      </form>
    </div>
  );
};
