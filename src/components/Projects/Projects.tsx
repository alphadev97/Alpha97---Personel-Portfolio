import React from "react";
import styles from "./projects.module.css";
import { projectsItem } from "@/data/static-data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{projectsItem.title}</h2>
      </div>

      <div className={styles.projectCard}>
        <Image
          className={styles.image}
          src={"/temp.jpg"}
          width={600}
          height={450}
          alt=""
        />
        <div className={styles.projectContent}>
          <h2 className={styles.projectTitle}>
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className={styles.projectDesc}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit semper
            tellus augue cubilia, nullam est conubia ornare. Pretium vulputate
            lectus nisl vitae ultrices eget sociosqu fringilla morbi euismod
            lacinia parturient,
          </p>
          <h5 className={styles.projectDate}>Date: 20.20.20</h5>
          <h4 className={styles.projectTech}>
            <b>Technology</b>: WordPress, Timber, WordPress Multisite,
            Gutenberg, JavaScript
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
