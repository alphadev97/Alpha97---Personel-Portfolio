import Image from "next/image";
import styles from "./project.module.css";
import { projectsItem } from "@/data/static-data";

const ProjectPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>{projectsItem.title}</h1>
        </div>

        <div className={styles.projects}>
          {projectsItem &&
            projectsItem.projects.map((project) => (
              <div className={styles.singleProject}>
                <div className={styles.projImg}>
                  <Image
                    src={project.image_url}
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className={styles.projectContent}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <div className={styles.projInfo}>
                  <p>{project.date.toString().slice(0, 15)}</p>
                  <div className={styles.projTech}>
                    {project.technology.map((tech) => (
                      <p>{tech.title}</p>
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
