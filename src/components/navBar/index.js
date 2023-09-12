import styles from './styles.module.css'

const NavBar = ()=>{
    return(
        <div className={styles.navBar}>
            <button>Home</button>
            <button>About</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    )
}
export default NavBar