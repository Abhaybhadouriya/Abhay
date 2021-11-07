import React from 'react'
import styles from './css/ChromeTab.module.css'

const ChromeTab = (props) => {

    // defining url hook to load
    const [iframeUrl, setiframeUrl] = React.useState('')
    //  on page load first load the url and set it to iframeUrl to load this link
    React.useEffect(() => {
        setiframeUrl(props.url)
    }, [])

    return (
        <div className={styles.OuterDivTab}>
            <div className={styles.searchbar}>
                {/* PAge back click */}
               <img onClick={()=>props.backChromeTabfun()} src="/img/chromeimg/left-arrow.png"  style={{width:35,marginLeft:10,padding:5}}/>
               <img onClick={()=>props.backChromeTabfun()}src="/img/chromeimg/right-arrow.png"  style={{width:35,marginLeft:10,padding:5}}/>
               {/* REfresh the fucking page */}
               <img onClick={()=>{document.getElementById('browseriframe').src = document.getElementById('browseriframe').src;}} src="/img/chromeimg/reset.png"  style={{width:40,marginLeft:10,padding:5}}/>
               <img onClick={()=>props.backChromeTabfun()} src="/img/chromeimg/home.png"  style={{width:40,marginLeft:10,padding:5}}/>
               <div id="input_container" style={{position:'relative',width:'100%',marginRight:20}}>              
                     <input readOnly value={iframeUrl} type="text" style={{marginLeft:10,height:'5vh',paddingLeft:50,marginTop:2, width:'100%',borderRadius:50,fontSize:20}}/>
                     <img src="/img/chromeimg/shield.png"  style={{width:40,height:35,padding:5,position:'absolute',left:5,bottom:5,marginLeft:10}}/>

               </div>
            </div>
            
            <iframe id="browseriframe" src={iframeUrl} style={{maxWidth:'100%',height:'90vh'}}/>
        </div>
    )
}

export default ChromeTab
