import styles from "./styles.module.css";

const ContactMain = () => {
  return (
    <div className={styles.contactMain}>
      <h1>Contact Me</h1>
      <div>
        <h3> Recruiter / Student / Professional? <br></br>I would love to hear your feedback and suggestions</h3>
      </div>
      <div className={styles.tagHolder}>
        <div className={styles.tagsName}>
          <label>Email</label>
          <label>Phone</label>
          <label>LinkedIn</label>
        </div>
        <div className={styles.tagsValue}>
          <label>rishimalik97@gmail.com</label>
          <label>+91 93286 33053</label>
          <label>linkedin.com/in/rishiCz</label>
        </div>
      </div>
    </div>
  );
};
export default ContactMain;
