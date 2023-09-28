import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {/* <Image src={"/public/next.svg"} height={20} width={20} alt="" /> */}
        <h1>Image</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          suscipit magnam nostrum laboriosam, enim nobis repellat iusto alias?
          Doloremque quo similique eveniet mollitia eius impedit nisi placeat!
          Nesciunt, minima tenetur!
        </h2>
      </div>
    </div>
  );
};

export default Hero;
