import styles from "./styles.module.css";

const NavBar = ({ activeNav, setActiveNav, refList }) => {
  const [homeRef, aboutRef, projectsRef, contactRef] = refList;
  const handleClick = (nav) => {
    if (nav === "home")
       homeRef.current.scrollIntoView({block:'start' });
    if (nav === "about")
      aboutRef.current.scrollIntoView({ block:'start' });
    if (nav === "projects")
      projectsRef.current.scrollIntoView({ block:'start' });
    if (nav === "contact")
      contactRef.current.scrollIntoView({ block:'start' });
    setActiveNav(nav);
  };
  const style = {
    color: '#c72050',
    borderBottom: `5px solid`,
    marginTop: "0",
  };
  return (
    <div className={styles.navBar}>
      <button
        style={activeNav === "home" ? style : {}}
        onClick={() => handleClick("home")}
      >
        Home
      </button>
      <button
        style={activeNav === "about" ? style : {}}
        onClick={() => handleClick("about")}
      >
        About
      </button>
      <button
        style={activeNav === "projects" ? style : {}}
        onClick={() => handleClick("projects")}
      >
        Projects
      </button>
      <button
        style={activeNav === "contact" ? style : {}}
        onClick={() => handleClick("contact")}
      >
        Contact
      </button>
    </div>
  );
};
export default NavBar;
