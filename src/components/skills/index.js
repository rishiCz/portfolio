import { useState } from "react";
import styles from "./styles.module.css";
import { skillData } from "../../assets/skillData";

const Skills = () => {
  
  const Skill = ({ Icon, highlightColor, defaultColor = "grey", name, rating }) => {
    const [isHover, setHover] = useState(false);
    const style = {
      color: isHover ? highlightColor : defaultColor,
    };
    return (
      <div className={styles.skill}>
        <div className={styles.rating}>
          <div className={styles.outer}>
            <div className={styles.inner} style={{width:`${rating*10}%`}} />
          </div>
        <label>{rating}</label> / 10
        </div>
        <Icon
          className={styles.icon}
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <label>{name}</label>
      </div>
    );
  };

  return (
    <div className={styles.skills}>
      {skillData.map((data) => (
        <Skill highlightColor={data.color} Icon={data.icon} name={data.name} rating={data.rating} />
      ))}
    </div>
  );
};
export default Skills;
