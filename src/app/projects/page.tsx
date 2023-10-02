import Image from "next/image";
import styles from "./project.module.css";
import { projectsItem } from "@/data/static-data";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const ProjectPage = () => {
  const sortedProjects = projectsItem.projects
    .slice()
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link href={"/"} className={styles.back}>
            <BsFillArrowLeftSquareFill />
            <div className={styles.backLink}>Back to Home</div>
          </Link>

          <div className={styles.title}>
            <h1 className={styles.heading}>{projectsItem.title}</h1>
          </div>
        </div>

        <div className={styles.projects}>
          {sortedProjects &&
            sortedProjects.map((project) => (
              <div className={styles.singleProject}>
                <div className={styles.projImg}>
                  <Image
                    src={project.image_url}
                    height={100}
                    width={100}
                    alt=""
                    className={styles.img}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <div className={styles.projInfo}>
                  <p className={styles.date}>
                    {project.date.toString().slice(0, 15)}
                  </p>
                  <div className={styles.projTech}>
                    {project.technology.map((tech) => (
                      <p className={styles.tech}>{tech.title}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
