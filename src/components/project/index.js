import styles from "./styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Project = ({
  imgSrc,
  title,
  description,
  codeLink,
  liveLink,
  flip = false,
}) => {
  const imageRef = useRef(null);
  const backRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 1", "1.33 1"],
  });
  const backTransform = useTransform(scrollYProgress,[0.3,1],["40%","-40%"])
  const opacityTransform = useTransform(scrollYProgress,[0,0.6],[0, 1])
  const backOpacityTransform = useTransform(scrollYProgress,[0,1],[0.6, 0])
  const imageTransform = useTransform(scrollYProgress,[0,0.6],[flip?-200:200,0])
  const textTransform = useTransform(scrollYProgress,[0,0.6],[flip?200:-200,0])
  const filter = useTransform(opacityTransform, v => `blur(${v*25 +2}px)`);
  const Image = () => {
    
    return (
      <motion.div
        className={styles.image}
        style={{ opacity: opacityTransform,  y:backTransform}}
      >
        <img src={imgSrc} />
      </motion.div>
    );
  };
  
  return (
    <motion.div
      ref={imageRef}
      className={styles.projectHolder}
      style={{ flexDirection: flip ? "row-reverse" : "row"}}
    >
      <motion.img src={imgSrc} alt={title} style={{opacity: backOpacityTransform,filter}} />
      <motion.div style={{y:backTransform}}>
        <h2>{title}</h2>
        {description.map((point, index) => {
          return (
            <p>
              {index + 1}. {point}
            </p>
          );
        })}
        <div className={styles.flex}>
          {codeLink && (
            <a className={styles.linkButton} href={codeLink} target="new">
              Code
            </a>
          )}
          {liveLink && (
            <a className={styles.linkButton} href={liveLink} target="new">
              Live
            </a>
          )}
        </div>
      </motion.div>
      <Image/>
    </motion.div>
  );
};
export default Project;
