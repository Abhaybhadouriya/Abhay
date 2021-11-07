import React ,{useState }from 'react';
import styles from'../css/ChromeCard.module.css';
import { Document, Page } from 'react-pdf';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import styles1 from './css/ChromeCard.module.css'
import ChromeTab from './ChromeTab';

//  Window minimize and maximize css inner box

const style_box1={
  position: "relative",
  width: "100%",
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",
  /* margin-top: calc(100vh - 85vh - 20px); */
  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #999",
  overflow: "auto"
}
const style_box2={
  position: "relative",
  minWidth: 350,
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",
  /* margin-top: calc(100vh - 85vh - 20px); */
  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #999",
  overflow: "auto"
}

//  Window minimize and maximize css outer box

const popup_box1 = {
  position: "fixed",
  width: "100%",
  height: "1vh",
  top: 0,
  left: 0,
}
const popup_box2 = {
  position: "fixed",
  width: 350,
  height: "1vh",
  top: 0,
  left: 0,
}

const ChromeCard = (props) => {
  // Resizeable Windows Attributes 
  const [sizewindow, setsizewindow] = useState(true)
   const [width, setwidth] = useState("100%")
   const [height, setheigth] = useState("90vh")
   
  //  MAximize Window Function

  const sizeWindow=()=>{
       setsizewindow(!sizewindow) 
       setheigth("90vh")   
      setwidth("100%")
  }
  // initilize iframe '' to load nothing at starting
  const [iframeUrl, setiframeUrl] = React.useState('')
  // hide chrmoe tab at starting
  const [showChromeTab, setshowChromeTab] = useState(false)
  // show chrome function call
  const showChromeTabfun =(e)=>{
      setshowChromeTab(!showChromeTab)
      // set link which need to be displayed in iframe after chrome opened
      setiframeUrl(e.target.value)
  }
  // hide chrome tab function
  const backChromeTabfun =(e)=>{
    setshowChromeTab(!showChromeTab)
    
}
   


  const showMainChromeTab = ()=>{
    return (
<div className={styles1.carddiv}>
      
      <div style={{width:'100%',justifyContent:'center',display:'flex',padding:10}}>
          <span style={{fontSize:25,alignItems:'center',fontFamily:'Times, "Times New Roman", Georgia, serif'}}>Websites Developed by Me</span>
          </div>
  
      <div className={styles1.card}>
         
         <div className={styles1.imgdiv}>
              <img src="/img/chromeimg/cosmatic.jpg" style={{width:'100%',borderRadius:10,boxShadow:'2px 6px 4px 4px rgba(0.2,0.5,0,0.2)'}} alt="imgbrowser" />
              <span style={{fontSize:25,fontStyle:'bold'}}>Comatic Services</span>
              <ul>
                <li >COSMATIC SERVICES is a car servicing portal provides
                      services like Teflon polish, Rubbing Polish etc. Here User can book there slot for servicing,user can manage there order.</li>
                      <li> Technologies :-<b> MERN stack, Hostinger, Github, Heroku, Vercel.</b></li>
                      <li> Role :- <b>Web developer, Database Manager, Social Media Manager</b></li>
  
              </ul>
              <button className={styles1.btbrowser}  onClick={(e)=>showChromeTabfun(e)}  value="https://gurujikenotes.com/CosmaticServices/">Click to View</button>
         </div>
         <div className={styles1.imgdiv}>
              <img src="/img/chromeimg/gurji.jpg" style={{width:'100%',borderRadius:10,boxShadow:'2px 6px 4px 4px rgba(0.2,0.5,0,0.2)'}} alt="imgbrowser" />
              <span style={{fontSize:25,fontStyle:'bold'}}>Gurujikenotes.com</span>
                <ul> 
                  <li>Got <b>45,000+ visitors</b> within a month of launch. It provide
                    notes , videos lectures and minor projects. It is a
                    community type website. Currently we are getting about 
                    <b> 20-25K visitors</b> per month.</li>
                    <li> Technology:- <b>PHP, JavaScript,Ajax, Firebase, MySQL and
                    many more.</b></li>
                     <li>Role :- <b>Full Stack Developer </b></li>
                  </ul>
              <button className={styles1.btbrowser}  onClick={(e)=>showChromeTabfun(e)}  value="https://gurujikenotes.com/">Click to View</button>
         </div>
         <div className={styles1.imgdiv}>
              <img src="/img/chromeimg/PoetAnkita.jpg" style={{width:'100%',borderRadius:10,boxShadow:'2px 6px 4px 4px rgba(0.2,0.5,0,0.2)'}} alt="imgbrowser" />
              <span style={{fontSize:25,fontStyle:'bold'}}>Poetankita.in</span>
              <ul>
                <li>Its a Blogging website for my sister to post stories, poetry, and quotes. Here she post variety of content on different different topics such as poetry,story and blogs in Hindi and English </li>
                  <li>Technology:- <b>Wordpress </b></li>
                <li>Role:- <b>Developer , Content manager and Social Media Manager</b></li>
              </ul>
              <button className={styles1.btbrowser}  onClick={(e)=>showChromeTabfun(e)}  value="https://poetankita.in/">Click to View</button>
         </div>
         <div className={styles1.imgdiv}>
              <img src="/img/chromeimg/educaps.jpg" style={{width:'100%',borderRadius:10,boxShadow:'2px 6px 4px 4px rgba(0.2,0.5,0,0.2)'}} alt="imgbrowser" />
              <span style={{fontSize:25,fontStyle:'bold'}}>Educapsindia.in</span>
              <ul>
                <li>PHP/Java servlet developer at Educapsindia.com a education based startup. EduCap is a leading firm, providing educational training in PAN India in the field of advanced technologies.</li>
                <li>Technology:- <b>PHP, JavaScript,Ajax, MySQL, Firebase</b></li>
                <li>Role:- <b> Web Developer and Database Administrator</b></li>
              </ul>
              <button className={styles1.btbrowser}  onClick={(e)=>showChromeTabfun(e)}  value="https://educapsindia.com/">Click to View</button>
         </div>
         <div className={styles1.imgdiv}>
              <img src="/img/chromeimg/covid.jpg" style={{width:'100%',borderRadius:10,boxShadow:'2px 6px 4px 4px rgba(0.2,0.5,0,0.2)'}} alt="imgbrowser" />
              <span style={{fontSize:25,fontStyle:'bold'}}>Covid Tracker</span>
              <ul>
                <li>Covid-19 live tracker. Display Corona case of States and
                    District wise in different categories like <b> Active, Recovered, Confirmed,Deaths and No of tests
                          conducted. It fetches data from covid19india.org</b></li>
                          <li>Technology:- <b>PHP, JavaScript,HTML,CSS,Web scraping</b></li>
                          <li> Role :- <b>Web developer</b></li>
              </ul>
              <button value="http://covidtracker.gurujikenotes.com/" onClick={(e)=>showChromeTabfun(e)} className={styles1.btbrowser}>Click to View</button>
         </div>
      </div>
       
     </div>
    )
  }
  return(
    <div style={sizewindow? popup_box1 :popup_box2} > 
    <Draggable  >
    <Resizable size={{ width:width, height: height }}  
     onResizeStop={(e, direction, ref, d) => {
        setheigth({
          height: height + d.height,
        });
        setwidth({
          width: width + d.width,

        })
      }}>

     <div  style={ sizewindow? style_box1 :style_box2}>
       <div className={styles.ChromeCard_navbar} style={{backgroundColor:props.themecolor}}> 
            <div className={styles.ChromeCard_Name_div}>
                              
                <img  src="/img/chromaaa.png"  alt="chrome" id="img_taskbar"/>            
                <span>
                &nbsp;&nbsp;Chrome  
                </span>
            </div>
            <div className={styles.ChromeCard_bt_div}>
                <div onClick={() =>props.handleClose('Chrome')} className={styles.ChromeCard_buttons}>
                  <span style={{fontSize:25}}>─</span>
                </div>
                <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                    <span style={{fontSize:25}}>☐</span>
                </div>
                <div onClick={() =>props.handleClose('Chrome')} className={styles.ChromeCard_buttons_cancel}>
                       <span style={{fontSize:25}}>X</span>
                </div>
            </div>
       </div>
       {/* cardiv box div started here */}
       {/* onlicking the click to view main tab hides and chomre iframe opened */}
        {showChromeTab?<ChromeTab url={iframeUrl} backChromeTabfun={backChromeTabfun} functionback={showChromeTabfun}/>:showMainChromeTab()}
         {/* box div ended here */}
  </div>
  </Resizable>
  </Draggable>
</div> 
  )


} 

export default ChromeCard