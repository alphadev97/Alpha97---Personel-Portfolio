import { navItems } from "@/data/static-data";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Alpha97</h1>
      {navItems &&
        navItems.map((item) => (
          <Link href={item.url} key={item.id} className={styles.navItem}>
            <h2 className={styles.title}>{item.title}</h2>
          </Link>
        ))}
      <ThemeToggle />
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
