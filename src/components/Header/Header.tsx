import { navItems } from "@/data/static-data";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <div className={styles.header}>
      {navItems &&
        navItems.map((item) => (
          <Link href={item.url} key={item.id}>
            <h2 className={styles.title}>{item.title}</h2>
          </Link>
        ))}
      <ThemeToggle />
    </div>
  );
};

export default Header;