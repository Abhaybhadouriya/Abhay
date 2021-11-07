import React from 'react'
import styles from './css/BootScreen.module.css'

const LoginScreen = () => {
    return (
        <div className={styles.loginscreenmain}>
            <div className={styles.loginscreenin1}>
                <div  className={styles.loginscreenin2}>

                      <img src="/img/windows/user.png" style={{width:128,height:128}}/>
                    </div>
                    <div  className={styles.loginscreenin2}><span style={{fontSize:25,fontWeight:500}}> Abhay PC</span>
                        </div>
                        <div  className={styles.loginscreenin2}>
                        <span style={{fontSize:20}}>
                        Welcome Guest</span>
                        </div>

            </div>
            
        </div>
    )
}

export default LoginScreen
