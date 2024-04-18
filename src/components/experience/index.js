import styles from "./styles.module.css";
import expierenceData from "../../assets/exprerienceData";
import ExpeienceCard from "./experienceCard";

const Expeience = () => {
  // const expierenceData = []
  console.log(expierenceData)
  return (
    <div className={styles.experienceHolder}>
      {expierenceData.map(data=><ExpeienceCard data = {data}/>)}
    </div>
  );
};
export default Expeience;
