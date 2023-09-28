import React from "react";
import styles from "./projects.module.css";
import { projectsItem } from "@/data/static-data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{projectsItem.title}</h2>
      </div>

      <div className={styles.projectCard}>
        <Image src={"/temp.jpg"} width={600} height={500} alt="" />
        <div className={styles.projectContent}>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit semper
            tellus augue cubilia, nullam est conubia ornare. Pretium vulputate
            lectus nisl vitae ultrices eget sociosqu fringilla morbi euismod
            lacinia parturient,
          </p>
          <h5>Date: 20.20.20</h5>
          <h4>
            Technology: WordPress, Timber, WordPress Multisite, Gutenberg,
            JavaScript
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
