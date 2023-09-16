import styles from "./styles.module.css";
import GradientDiv from "../gradientDiv";

const Project = ({ imgSrc, title, description, codeLink,liveLink, flip = false }) => {
  const Image = () => {
    return (
      <div className={styles.image}>
        <img src={imgSrc} />
      </div>
    );
  };
  return (
    <div
      className={styles.projectHolder}
      style={{ flexDirection: flip ? "row-reverse" : "row" }}
    >
      <img src={imgSrc} alt={title}/>
      <div>
        <h2>{title}</h2>
        {description.map((point,index) => {
          return <p>{index+1}. {point}</p>;
        })}
        <div className={styles.flex}>
          {codeLink && <a className={styles.linkButton} href={codeLink} target="new">Code</a>}
          {liveLink && <a className={styles.linkButton} href={liveLink} target="new">Live</a>}
        </div>
      </div>
      <GradientDiv Content={Image} borderRadius="20px" deg="125deg" />
    </div>
  );
};
export default Project;
