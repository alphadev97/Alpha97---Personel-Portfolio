import React from "react";
import styles from "./projects.module.css";
import { projectsItem } from "@/data/static-data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  // Sort projects by date in descending order (latest first)
  const sortedProjects = projectsItem.projects
    .slice()
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  // Select the first 3 projects (latest 3)
  const latestProjects = sortedProjects.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{projectsItem.title}</h2>
      </div>

      {latestProjects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <Image
            className={styles.image}
            src={project.image_url}
            width={300}
            height={150}
            alt=""
          />
          <div className={styles.projectContent}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDesc}>{project.description}</p>
            <h5 className={styles.projectDate}>
              Date: {project.date.toString().slice(0, 15)}
            </h5>
            <h4 className={styles.projectTech}>
              {" "}
              {project.technology.map((tech) => (
                <p className={styles.tech}>{tech.title}</p>
              ))}
            </h4>
          </div>
        </div>
      ))}

      <div className={styles.button}>
        <Link className={styles.btn} href={projectsItem.url}>
          {projectsItem.btnTitle}
        </Link>
      </div>
    </div>
  );
};

export default Projects;
