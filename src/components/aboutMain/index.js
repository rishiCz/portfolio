import Education from "../education";
import Expeience from "../experience";
import GradientDiv from "../gradientDiv";
import styles from "./styles.module.css";

const AboutMain = () => {
  return (
    <div className={styles.aboutMain}>
      <h1>About Me</h1>
      <div className={styles.flex}>
        <div>
          <label>EDUCATION</label>
          <GradientDiv
            Content={Education}
            width="100%"
            deg={"0deg"}
            perc1="10%"
            borderRadius="20px"
          />
        </div>
        <div>
          <label>EXPERIENCE</label>
          <GradientDiv
            Content={Expeience}
            width="100%"
            perc2="150%"
            borderRadius="20px"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMain;
