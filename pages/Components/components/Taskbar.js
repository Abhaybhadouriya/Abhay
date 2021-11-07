import React from 'react'
import styles from '../../../styles/taskBar.module.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Image from 'next/image'
import Tooltip from 'react-bootstrap/Tooltip'

const Taskbar = (props) => {
    
    
   
    const newCurrentDate = new Date().toLocaleDateString()
    const [Seconds,setSeconds] = React.useState()
    React.useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
      
        <div className={styles.taskBar} id="taskBar">
            <div className={styles.img_div}>        
                <img onClick={() =>props.es6Function('Windows')} className={styles.img_taskbar} src="/img/win.png"  alt="windows" id="img_taskbar"/>   
                <img onClick={()=>{props.es6Function('Chrome')}} className={styles.img_taskbar} src="/img/chromaaa.png"  alt="chrome" id="img_taskbar"/>             
                <img onClick={()=>{props.es6Function('Explorer')}} className={styles.img_taskbar} src="/img/exploler.png"  alt="exploler" id="img_taskbar"/>             
                <img onClick={()=>{props.es6Function('Word')}} className={styles.img_taskbar} src="/img/word.png"  alt="word" id="img_taskbar"/>             
                <img onClick={()=>{props.es6Function('Setting')}} className={styles.img_taskbar} src="/img/setinga.png"  alt="setting" id="img_taskbar"/>
                <img onClick={()=>{props.es6Function('About')}} className={styles.img_taskbar} src="/img/about.jpg"  alt="setting" id="img_taskbar"/>
            
            </div>
                         
            <div className={styles.time_div}>
            <div className={styles.icon_div}>
                <img onClick={()=>{alert("wifi")}} className={styles.icon_taskbar} src="/img/wifi.png"  alt="wifi" id="img_taskbar"/>   
                <img onClick={()=>{alert("speaker")}} className={styles.iconbattery_taskbar} src="/img/speaker.png"  alt="speaker" id="img_taskbar"/>             
                <img onClick={()=>{alert("battery")}} className={styles.iconbattery_taskbar} src="/img/battery.png"  alt="battery" id="img_taskbar"/>             
                
            </div>
                <div className={styles.time_tasbar} id="time_tasbar"> 
                  
                       <span style={{fontFamily:'monospace',fontWeight:10,marginRight:5,marginTop:5}}>  { newCurrentDate }</span>
                       <span style={{fontFamily:'monospace',fontWeight:10,marginRight:5,marginBottom:5}}>  {Seconds}</span>
                   
                </div>
            </div>
            
            
        </div>
      
      
    )
}

export default Taskbar
