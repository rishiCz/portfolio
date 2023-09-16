import AboutMain from '../../components/aboutMain'
import HomeMain from '../../components/homeMain'
import Logo from '../../components/logo'
import NavBar from '../../components/navBar'
import ProjectsMain from '../../components/projectsMain'
import styles from './styles.module.css'

const Home = ()=>{
    return(
        <>
        <div className={styles.upper}>
            <Logo/>
            <NavBar/>
        </div>
        <div>
            <div className={styles.mainHolder}><HomeMain/></div>
            <div className={styles.mainHolder}><AboutMain/></div>
            <ProjectsMain/>
        </div>
        </>
    )
}
export default Home