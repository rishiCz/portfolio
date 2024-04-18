import Education from "../education";
import Expeience from "../experience";
import styles from "./styles.module.css";

const AboutMain = () => {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.flex}>
        <div >
          <label>Education</label>
            <Education/>
        </div>
        <div >
          <label>Experience</label>
            <Expeience/>
        </div>
      </div>
    </div>
  );
};
export default AboutMain;
