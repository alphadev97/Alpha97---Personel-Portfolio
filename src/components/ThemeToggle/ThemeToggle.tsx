"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext)!;

  console.log(theme);

  return (
    <div className={styles.container}>
      <BsFillMoonFill />
      <div className={styles.ball}></div>
      <BsSunFill />
    </div>
  );
};

export default ThemeToggle;
