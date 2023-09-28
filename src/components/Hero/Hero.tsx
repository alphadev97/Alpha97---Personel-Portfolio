import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { heroItem } from "@/data/static-data";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

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

      <div className={styles.connect}>
        <Link className={styles.btn} href={heroItem.contact.url}>
          {heroItem.contact.title}
        </Link>
        <Link className={styles.btn} href={heroItem.cv.url}>
          {heroItem.cv.title}
        </Link>
        <Link className={styles.social} href={heroItem.iconOne.url}>
          <FaGithubSquare />
        </Link>
        <Link className={styles.social} href={heroItem.iconOne.url}>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
