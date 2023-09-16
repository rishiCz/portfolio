import styles from "./styles.module.css";

const Expeience = () => {
  return (
    <div className={styles.experience}>
      <div>
        <div className={styles.flex}>
          <h3>R.S.L</h3>
          <label>Jan 23 - May 23</label>
        </div>
        <i>Software Developer</i>
        <div className={styles.skills}>
          <a href="https://emberjs.com/" target="blank">EmberJs</a>
          <a href="https://www.javascript.com/" target="blank">JavaScript</a>
          <a href="https://html.com/" target="blank">HTML</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank">CSS</a>
        </div>
        <p>
          Developed visually engaging front-end components to enhance user
          experience and aesthetics.
        </p>
        <p>
          Leveraged Ember.js to create dynamic and interactive web
          applications during training.
        </p>
        <p>
          Implemented API calls for seamless integration of back-end services
          in Ember-based and non-Ember web apps.
        </p>
        <p>
          Successfully architected a small test web project, showcasing strong
          design and scalability skills.
        </p>
        <p>
          Ensured accessibility compliance to improve SEO and create an
          inclusive web environment.
        </p>
      </div>
      <hr />
      <div>
        <div className={styles.flex}>
          <h3>VThrive Solutions</h3>
          <label>Sept 23 - Present</label>
        </div>
        <i>Associate Oracle Consultant</i>
      </div>
    </div>
  );
};
export default Expeience;
