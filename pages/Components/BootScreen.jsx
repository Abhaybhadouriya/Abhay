import React from 'react'
import styles from './css/BootScreen.module.css'

const BootScreen = () => {
    return (
        <div style={{backgroundColor:'black',height:'100vh',width:'100%',justifyContent:'center',flexDirection:'column',display:'flex'}}>
            <img src="img/bootscreen.jpg" alt="Paris" style={{width:'100vh',height:360,marginTop:15,display:'block',marginLeft:'auto',marginRight:'auto'}}/>
             <div style={{width:'100%',justifyContent:'center',display:'flex'}}> <div className={styles.loader}/></div>
           

        </div>
    )
}

export default BootScreen
