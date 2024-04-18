import styles from "./styles.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <h3>
            Chandigarh Engineering College
          </h3>
          <i>B.Tech</i>
          <div className={styles.flex}>
            <label>...</label>
            <label>2019 - 23</label>
          </div>
        </div>
        <hr />
        <div className={styles.inner}>
          <h3>Kendriya Vidyalya</h3>

          <i>High School</i>
          <div className={styles.flex}>
            <label>...</label>
            <label>2018 - 19</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
