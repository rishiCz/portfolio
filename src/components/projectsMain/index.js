import Project from "../project";
import styles from "./styles.module.css";
import projectsJson from "../../assets/projectData.js";
import { useRef } from "react";

const ProjectsMain = () => {
  const projectData = projectsJson.project;

  return (
    <div className={styles.projectsMain}>
      <h1>Projects</h1>
      {projectData.map((project,index) => {
        return (
          <Project
            key={index}
            imgSrc={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
            flip = {index % 2 != 0}
          />
        );
      })}
    </div>
  );
};
export default ProjectsMain;
