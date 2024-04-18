import { useEffect, useRef, useState } from "react";
import AboutMain from "../../components/aboutMain";
import HomeMain from "../../components/homeMain";
import Logo from "../../components/logo";
import NavBar from "../../components/navBar";
import ProjectsMain from "../../components/projectsMain";
import ContactMain from "../../components/contactMain";
import ChallengeMain from "../../components/challengeMain";
import styles from "./styles.module.css";
import Skills from "../../components/skills";

const Home = () => {
  const [activeNav, setActiveNav] = useState(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsRef2 = useRef(null);
  const contactRef = useRef(null);
  const refList = [homeRef, aboutRef, projectsRef, contactRef];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === homeRef.current) setActiveNav("home");
            if (entry.target === aboutRef.current) setActiveNav("about");
            if (entry.target === projectsRef.current) setActiveNav("projects");
            if (entry.target === projectsRef2.current) setActiveNav("projects");
            if (entry.target === contactRef.current) setActiveNav("contact");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(projectsRef.current);
    observer.observe(projectsRef2.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  });
  return (
    <>
      <div className={styles.upper}>
        <Logo />
        <NavBar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          refList={refList}
        />
      </div>
      <div>
        <div ref={homeRef} className={styles.mainHolder}>
          <HomeMain />
        </div>
        <Skills/>
        <div ref={aboutRef} >
          <AboutMain />
        </div>
        <div style={{ height: "fit-content" }}>
          <div ref={projectsRef} />
          <ProjectsMain />
        </div>
        <div ref={projectsRef2} className={styles.projectEnd}>
            <ChallengeMain/>
        </div>
        <div ref={contactRef} className={styles.mainHolder}>
          <ContactMain/>
        </div>
      </div>
    </>
  );
};
export default Home;
