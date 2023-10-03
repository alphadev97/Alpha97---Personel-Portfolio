import React from "react";
import styles from "./projects.module.css";
import { projectsItem } from "@/data/static-data";
import Image from "next/image";
import Link from "next/link";
import { BsCodeSquare } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

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
          <Link href={project.projectLink}>
            <Image
              className={styles.image}
              src={project.image_url}
              width={400}
              height={250}
              alt=""
            />
          </Link>

          <div className={styles.projectContent}>
            <Link href={project.projectLink}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
            </Link>
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
            <div className={styles.code}>
              <Link href={project.projectLink} className={styles.codeLink}>
                <TbWorldWww />
              </Link>
              <Link href={project.github} className={styles.codeLink}>
                <BsCodeSquare />
              </Link>
            </div>
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
