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
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["0 1", "1.33 1"]
  });
  const backTransform = useTransform(scrollYProgress,[0.3,1],["40%","-40%"])
  const gradTransform = useTransform(scrollYProgress,[0.3,1],['0%','-100%'])
  const pGradTransform = useTransform(scrollYProgress,[0.4,0.6],['-100%','0%'])
  const opacityTransform = useTransform(scrollYProgress,[0,0.6],[0, 1])
  const backOpacityTransform = useTransform(scrollYProgress,[0,1],[0.6, 0])
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
      ref={myRef}
      className={styles.projectHolder}
      style={{ flexDirection: flip ? "row-reverse" : "row"}}
    >
      <motion.img src={imgSrc} alt={title} style={{opacity: backOpacityTransform,filter}} />
      <motion.div style={{y:backTransform}}>
        <motion.h2 style={{backgroundPositionX: gradTransform}}>{title} |</motion.h2>
        {description.map((point, index) => {
          return (
            <motion.p key={index} style={{backgroundPositionX: pGradTransform, backgroundSize: `${200+index*30}%`}}>
               {point}
            </motion.p>
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
