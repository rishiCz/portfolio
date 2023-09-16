import styles from './styles.module.css'

const Education = ()=>{
    return(
        <div className={styles.education}>
            <div>
                <h3>Chandigarh Engineering <br/> College</h3>
                <i>B.Tech</i>
                <div className={styles.flex}>
                    <label>7.8/10</label>
                    <label>2019-23</label>
                </div>
                
            </div>
            <hr/>
            <div>
                <h3>Kendriya Vidyalya No.1 <br/> Jamnagar </h3>
                <i>High School</i>
                <div className={styles.flex}>
                    <label>7.2/10</label>
                    <label>2018-19</label>
                </div>
            </div>
        </div>
    )
}
export default Education