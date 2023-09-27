import { navItems } from "@/data/static-data";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      {navItems &&
        navItems.map((item) => (
          <Link href={item.url} key={item.id}>
            <h2 className={styles.title}>{item.title}</h2>
          </Link>
        ))}
      <div className={styles.theme}>
        <BsFillMoonFill />
      </div>
    </div>
  );
};

export default Header;
