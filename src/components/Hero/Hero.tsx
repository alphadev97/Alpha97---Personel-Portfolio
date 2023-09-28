import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { heroItem } from "@/data/static-data";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={"/alpha97.jpeg"}
        height={100}
        width={100}
        alt=""
      />
      <h2
        className={styles.desc}
      >{`${heroItem.name}. I'm a ${heroItem.designation} with  ${heroItem.experience} of experience. I enjoy building sites & apps, My focus is ${heroItem.focus}`}</h2>
    </div>
  );
};

export default Hero;
