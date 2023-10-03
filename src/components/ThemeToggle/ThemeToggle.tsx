"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)!;

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <div
        className={styles.icons}
        style={theme === "dark" ? { color: "#0f172a" } : { color: "white" }}
      >
        <BsFillMoonFill />
      </div>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 5, backgroundColor: "#0f172a" }
            : { right: 5, backgroundColor: "white" }
        }
      ></div>
      <div
        className={styles.icons}
        style={theme === "dark" ? { color: "#0f172a" } : { color: "white" }}
      >
        <BsSunFill />
      </div>
    </div>
  );
};

export default ThemeToggle;
