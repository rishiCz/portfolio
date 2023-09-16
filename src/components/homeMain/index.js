import styles from "./styles.module.css";

const HomeMain = () => {
  return (
    <div className={styles.homeMain}>
      <h1>
        Hello, I'm <label className={styles.gradient}>Rishi</label>
        <br /> from India
      </h1>
      <div className={styles.subHead}>
        <label>{"< "}</label>
        <p>
          I'VE BEEN KNOWN TO TURN COFFEE INTO CODE,
          <br />
          AND I PROMISE MY ERROR MESSAGES ARE FUNNIER
          <br />
          THAN YOUR AVERAGE JOKES
          <label> {" />"}</label>
        </p>
        <div className={styles.btn}>
          <span>HIRE ME.</span>
        </div>
      </div>
    </div>
  );
};
export default HomeMain;
