import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { heroItem } from "@/data/static-data";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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
        <Link className={styles.btnPrimary} href={heroItem.contact.url}>
          {heroItem.contact.title}
        </Link>
        <Link
          target="_blank"
          className={styles.btnSecondary}
          href={heroItem.cv.url}
        >
          {heroItem.cv.title}
        </Link>
        <div className={styles.social}>
          <Link className={styles.socialLink} href={heroItem.iconOne.url}>
            <FiGithub />
          </Link>
          <Link className={styles.socialLink} href={heroItem.iconOne.url}>
            <FiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
