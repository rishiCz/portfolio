import styles from './styles.module.css'

const GradientDiv = ({Content,thick='3px', height='fit-content', width='fit-content', borderRadius='0', deg, perc1='', perc2='', spinDuration, spin=false})=>{
    const divStyle = {
        height:height,
        width:width,
        borderRadius:borderRadius
    }
    deg = deg? deg+',' : ""
    const gradientStyle = {
        background : `linear-gradient(${deg}#5200ff ${perc1}, #ff00b8 ${perc2})`,
        padding : thick,
        borderRadius:borderRadius
    }
    return(
        <div className = {styles.gradientDiv} style = {divStyle}>
            <div className = {styles.gradient} style = {gradientStyle}>
                <Content/>
            </div>
        </div>
    )
}
export default GradientDiv