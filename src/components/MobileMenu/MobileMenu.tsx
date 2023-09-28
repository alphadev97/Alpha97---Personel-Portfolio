"use client";

import React, { useState } from "react";
import styles from "./mobileMenu.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import { navItems } from "@/data/static-data";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={() => setOpen(!open)}>
        <TiThMenuOutline />
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          {navItems &&
            navItems.map((item) => (
              <Link href={item.url} key={item.id} className={styles.navItem}>
                <h2 className={styles.title}>{item.title}</h2>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
