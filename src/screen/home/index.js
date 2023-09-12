import Logo from '../../components/logo'
import NavBar from '../../components/navBar'
import styles from './styles.module.css'

const Home = ()=>{
    return(
        <div className={styles.upper}>
            <Logo/>
            <NavBar/>
        </div>
    )
}
export default Home