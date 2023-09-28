import React from "react";
import styles from "./about.module.css";
import { aboutItem } from "@/data/static-data";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{aboutItem.title}</h2>
        <p className={styles.desc}>{aboutItem.description}</p>
      </div>
    </div>
  );
};

export default About;
