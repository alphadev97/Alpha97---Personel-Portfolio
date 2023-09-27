import React from "react";
import styles from "./themeToggle.module.css";
import { BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  return (
    <div className={styles.theme}>
      <BsFillMoonFill />
    </div>
  );
};

export default ThemeToggle;
