import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { heroItem } from "@/data/static-data";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={heroItem.image_url}
        height={100}
        width={100}
        alt=""
      />

      <p className={styles.desc}>
        <b>{heroItem.name}</b>. I'm a <b>{heroItem.designation}</b> with{" "}
        <b>{heroItem.experience}</b> of experience. I enjoy building sites &
        apps, My focus is <b>{heroItem.focus}</b>.
      </p>
    </div>
  );
};

export default Hero;
