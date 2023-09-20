import Education from "../education";
import Expeience from "../experience";
import styles from "./styles.module.css";

const AboutMain = () => {
  return (
    <div className={styles.aboutMain}>
      <h1>About Me</h1>
      <div className={styles.flex}>
        <div className={styles.gradient1}>
          <label>EDUCATION</label>
            <Education/>
        </div>
        <div className={styles.gradient2}>
          <label>EXPERIENCE</label>
            <Expeience/>
        </div>
      </div>
    </div>
  );
};
export default AboutMain;
