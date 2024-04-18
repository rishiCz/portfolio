import styles from "./styles.module.css";

const Expeience = ({data}) => {
  const {title,designation,date,skills,points} = data
  return (
    <div className={styles.experience}>
      <div>
        <div className={styles.flex}>
          <h3>{title}</h3>
          <label>{date}</label>
        </div>
        <i>{designation}</i>
        <div className={styles.skills}>
          {skills.map(skill=>(<label>{skill}</label>))}
        </div>
        {points.map((point,ind)=> <p>{point}</p>)}
      </div>
      <hr />
    </div>
  );
};
export default Expeience;
