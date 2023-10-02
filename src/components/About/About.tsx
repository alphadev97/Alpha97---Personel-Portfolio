import React from "react";
import styles from "./about.module.css";
import { aboutItem } from "@/data/static-data";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{aboutItem.title}</h2>
        <p className={styles.desc}>{aboutItem.description}</p>
      </div>

      <Link className={styles.btn} href={aboutItem.url}>
        {aboutItem.btnTitle}
      </Link>
    </div>
  );
};

export default About;
