import { skillsItem } from "@/data/static-data";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>My Skills</h1>
      </div>
      <div className={styles.skills}>
        {skillsItem &&
          skillsItem.map((skill) => (
            <div className={styles.skill}>{skill.title}</div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
