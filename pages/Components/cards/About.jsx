import React ,{useState }from 'react';
import styles from'../css/ChromeCard.module.css';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import styles1 from './css/About.module.css'
import 'font-awesome/css/font-awesome.min.css';


//  Window minimize and maximize css inner box

const style_box1={
  position: "relative",
  width: "100%",
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",
  
  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #999",
  overflow: "auto"
}
const style_box2={
  position: "relative",
  minWidth:350,
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",
 
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
  color: 'rgb(79, 81, 83)',
  textDecoration: 'solid',
}
const popup_box2 = {
  position: "fixed",
  width: 350,
  height: "1vh",
  top: 0,
  left: 0,
  color: 'rgb(79, 81, 83)',
  textDecoration: 'solid',
}

const About = (props) => {
 

  //Resizeable Window Attributes
  const [sizewindow, setsizewindow] = useState(true)
   const [width, setwidth] = useState("100%")
   const [height, setheigth] = useState("90vh")
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // Maximize window Attribute
  const sizeWindow=()=>{
       setsizewindow(!sizewindow) 
       setheigth("90vh")   
      setwidth("100%")
  }
  
 
  

    return (

    
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
                                 
                <img  src="/img/about.jpg"  alt="chrome" id="img_taskbar"/>            
                    <span>
                    &nbsp;&nbsp;About
                    </span>
                </div>
                <div className={styles.ChromeCard_bt_div}>
                    <div onClick={() =>props.handleClose('About')} className={styles.ChromeCard_buttons}>
                      <span style={{fontSize:25}}>─</span>
                    </div>
                    <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                        <span style={{fontSize:25}}>☐</span>
                    </div>
                    <div onClick={() =>props.handleClose('About')} className={styles.ChromeCard_buttons_cancel}>
                           <span style={{fontSize:25}}>X</span>
                    </div>
                </div>
           </div>
        <div className={styles1.aboutmainDiv}>
          <div className={styles1.nameDetaildiv}>
                  <div className={styles1.aboutboxgap} />
                  <div className={styles1.aboutphotodiv}>
                    <img src="/img/aboutimg/pic.jpeg" className={styles1.aboutphototag}/>
                    <div className={styles1.aboutphotodivtext}>
                      <h1 style={{fontSize:35,color:'#1f1e1e',fontWeight:700,marginLeft:'10px'}}><b>ABHAY BHADOURIYA </b></h1>
                      <span style={{textTransform:'uppercase',fontWeight:500,fontSize:20,marginLeft:'10px',color:'#1f1e1e'}}>CS student trying to best</span>
                      <a href="#whyme"><div className={styles1.whyhireme}>
                        Why Hire Me?
                      </div></a>
                      </div>
                    </div>
               
          </div>
          <div className={styles1.whymeDetaildiv} id="whyme">
                 <div style={{width:'100%',flexDirection:'column',display:'flex',marginBottom:20}}>
                     <span style={{fontSize:35,textAlign:'center'}}>ABOUT </span><br/>
                     <span  style={{fontSize:20,textAlign:'center',marginLeft:20,marginRight:20,marginTop:20}}>Experienced Web Developer with a strong background in developing award-winning strategies for a diverse clientele. 2+ years of freelanceing experience includes working on different technologies,frameworks and projects. Strong skills include Database management and MySQL,React JS,Firebase, Data Structures, Algorithms ,HTML,CSS and Java .If I’ll be hired by you then it would be a great pleasure for me. I’m currently looking for opportunities. To get in touch mail me</span><br/>
                     <a  style={{fontSize:18,color:'blue',textAlign:'center'}} href="mailto:abhaybhadouriya1012@gmail.com">here.</a>
                     </div>
                   <div style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:10}}>
                     <span style={{fontSize:35}}>I Knows About</span>
                     </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/1.png" />
                    <span>React Js</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/2.png" />
                    <span>Next Js</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/3.png" />
                    <span>CSS</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/4.png" />
                    <span>HTML</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/5.png" />
                    <span>JavaScript</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/6.png" />
                    <span>Java</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/7.png" />
                    <span>C</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/8.png" />
                    <span>C++</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/9.png" />
                    <span>Python</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/10.png" />
                    <span>PhP</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/11.png" />
                    <span>Firebase</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/12.png" />
                    <span>Vercel</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/13.png" />
                    <span>Github</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/14.png" />
                    <span>Wordpress</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/15.png" />
                    <span>MySQL</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/16.png" />
                    <span>Heroku</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/17.png" />
                    <span>Node Js</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/18.png" />
                    <span>Ajax</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/19.png" />
                    <span>Operating <br/>Systems</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/20.png" />
                    <span>Android <br/> Studio</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/21.png" />
                    <span>DBMS</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/22.png" />
                    <span>Data <br/> Structures</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/23.png" />
                    <span>Algorithms</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/24.png" />
                    <span>Computer <br/> Networks</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/25.png" />
                    <span>Hostinger <br/> <span style={{fontSize:12}}>(For Hostings)</span></span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/26.png" />
                    <span>VS Code <br/>IDE</span>
                  </div><div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/27.png" />
                    <span>Eclipse <br/>IDE</span>
                  </div>
                  <div className={styles1.whymeDetaildivinner}>
                    <img className={styles1.whymeDetaildivinnerimg} src="/img/aboutimg/28.png" />
                    <span>NetBeans <br/> IDE</span>
                  </div>
                  <div style={{width:'100%',flexDirection:'column',display:'flex',marginBottom:20}}>
                     <span style={{fontSize:35,textAlign:'center'}}>USEFULL LINKS </span><br/>
                     <div style={{width:'100%',display:'flex',justifyContent:'center',marginBottom:20}}>
                      <a  rel="noreferrer"  href="https://www.linkedin.com/in/abhay-bhadouriya-51141217b/" target='_blank'><i  style={{fontSize:30,margin:10,cursor:'pointer',color:'black'}}className="fa fa-linkedin" aria-hidden="true"></i></a>
                      <a  rel="noreferrer"  href="https://github.com/Abhaybhadouriya" target='_blank'><i style={{fontSize:30,margin:10,cursor:'pointer',color:'black'}} className="fa fa-github" aria-hidden="true"></i></a>
                      <a rel="noreferrer"    style={{fontSize:18,color:'blue',textAlign:'center'}} href="mailto:abhaybhadouriya1012@gmail.com"><i style={{fontSize:30,margin:10,cursor:'pointer',color:'black'}} className="fa fa-envelope" aria-hidden="true"></i></a>

                       </div>
                   </div>
                  
                  
          </div>
             

       </div>
      </div>
      </Resizable>
      </Draggable>
    </div> 
    )
} 

export default About
