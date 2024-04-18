import styles from "./styles.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
const hireClick = () =>{
  window.scrollTo(0,document.body.scrollHeight)
}
const HomeMain = () => {
  return (
    <div className={styles.homeMain}>
      <div className={styles.linksHolder}>
        <a href="https://www.linkedin.com/in/rishi-malik-598ab723b/" target="blank">
          <FaLinkedinIn />
          <label>LinkedIn</label>
        </a>
        <hr />
        <a href="https://github.com/rishiCz" target="blank">
          <FaGithub />
          <label>GitHub</label>
        </a>
        <hr />
        <a href="https://drive.google.com/file/d/11vJm55nXXRxvDNdpB3dXdxl8wcS52ohN/view?usp=drive_link" target="blank">
          <MdOutlineContactPage />
          <label>Resume</label>
        </a>
        <hr />
        <a href="https://leetcode.com/Czar_AE/" target="blank">
          <SiLeetcode />
          <label>LeetCode</label>
        </a>
      </div>
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
        <div className={styles.btn} onClick={hireClick}>
          <span>HIRE ME.</span>
        </div>
      </div>
    </div>
  );
};
export default HomeMain;
