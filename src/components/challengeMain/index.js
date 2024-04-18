import styles from "./styles.module.css";
import {useState} from 'react';

const ChallengeMain = () => {
    const [childStyle,setChildStyle] = useState({})
    const [parentStyle,setParentStyle] = useState({})
    const hyphenToCamelCase=(inputString)=> {
        return inputString.replace(/-([a-z])/g, function(match, letter) {
          return letter.toUpperCase();
        });
      }
    const getStyleFromText = (text)=>{
        const style ={}
        const lines = text.split(';')
        lines.forEach((line,index) => {
            const pair = line.split(':')
            if (pair[0] && pair[1] && index!= lines.length-1){
                pair[0] = pair[0].replace(/[\s\n]/g, "")
                pair[1] = pair[1].replace(/[\s\n]/g, "")
                pair[0] = hyphenToCamelCase(pair[0])
                style[pair[0]]=pair[1]
            }
                
        });
        console.log(style)
        return style;
    }
    const handlechildInput = (event)=>{
        const text = event.target.value
        const style = getStyleFromText(text)
        setChildStyle(style)

    }
    const handleparentInput = (event)=>{
        const text = event.target.value
        const style = getStyleFromText(text)
        setParentStyle(style)
        
    }
  return (
    <div className = {styles.challengeMain}>
      <h1>Take a Break</h1>
      <h2>Try to center this Div</h2>
      <div className={styles.security}>
        <div className={styles.parent} style={parentStyle}>
          <div className={styles.child} style={childStyle}>Div</div>
        </div>
      </div>
      <div className={styles.inputHolder}>
        <div className={styles.parentInputDiv}>
          <p>.parent{" {"}</p>
          <textarea className={styles.parentInput} placeholder="//Write Your Code Here" onChange = {handleparentInput}/>
          <p>{"}"}</p>
        </div>
        <div className={styles.childInputDiv}>
          <p>.child{" {"}</p>
          <textarea className={styles.childInput} placeholder="//Write Your Code Here" onChange = {handlechildInput}/>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
};
export default ChallengeMain;
