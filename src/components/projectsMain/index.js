import Project from "../project";
import styles from "./styles.module.css";
import p1 from "../../assets/p1.png";
import projectsJson from "../../assets/projectData.js";

const ProjectsMain = () => {
  const projectData = projectsJson.project;

  const imgSrc = p1;
  const title = "World GDP";
  const description = [
    `A web page that shows the GDP of the world`,
    `Understand the growth of a country by looking GDP trends of past years`,
    "Visualize and compare GDPs of neighboring countries",
  ];
  const liveLink = "https://rishicz.github.io/world-data/";
  return (
    <div className={styles.projectsMain}>
      <h1>Projects</h1>
      {projectData.map((project,index) => {
        return (
          <Project
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
