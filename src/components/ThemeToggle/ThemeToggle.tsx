import React from "react";
import styles from "./themeToggle.module.css";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <BsFillMoonFill />
      <div className={styles.ball}></div>
      <BsSunFill />
    </div>
  );
};

export default ThemeToggle;
