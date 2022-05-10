import React ,{useState }from 'react';
import styles from'../css/ChromeCard.module.css';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import styles1 from './css/Explorer.module.css'
import Modal from 'react-modal';



// Error model CSS
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


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
  // overflow: "auto"
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
  // overflow: "auto"
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

const Explorer = (props) => {
 
  // Resize able window attributes
  const [sizewindow, setsizewindow] = useState(true)
   const [width, setwidth] = useState("100%")
   const [height, setheigth] = useState("90vh")
  //  MAximize window function
  const sizeWindow=()=>{
       setsizewindow(!sizewindow) 
       setheigth("90vh")   
      setwidth("100%")
  }
 
 
  //  Error Pop Function
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modelaction=()=>{
    return (
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
                          <div className={styles1.drivediv1}>
                            <img src="/img/Explorer/error.png" style={{width:72,height:72}} />
                            <div className={styles1.drivedivinner} style={{paddingLeft:10}}>
                            <h2 style={{margin:0}}>Restricted Area!</h2> 
                              <div>You are not allowed to do this Action.</div>
                              <button className={styles1.bterror} onClick={closeModal}>close</button>
                            </div>
                          </div>
       
      </Modal>
    )
  }
// Error Pop Function ended

  const iconexpolerer =()=>{
    return (
      <>
      {documentdrivesearchbar(' Abhay > This PC ')}
      <div className={styles1.diskdrivediv}>
      <div className={styles1.diskdrivelistname}>
          <span style={{whiteSpace:'nowrap'}}>Devices and drives (4)</span>
          <hr style={{width:'90%',height:1,marginLeft:10}}/>
      </div>

      <div className={styles1.diskdrivelist}>
          <div onClick={()=>openModal()} className={styles1.drivediv}>
            <img src="/img/Explorer/drivewin.png" style={{width:80}}/>
                   <div className={styles1.drivedivinner}>
                     <span style={{fontSize:18,marginBottom:5}}><b>Local Disk (C:)</b></span>
                   <img src="/img/Explorer/st1.PNG" style={{width:160}}/>
                   </div>
          </div>
          <div className={styles1.drivediv} onClick={()=>documentdriveDOpenfuncion()}>
            <img src="/img/Explorer/drive.png" style={{width:80}}/>
                   <div className={styles1.drivedivinner}>
                     <span style={{fontSize:18,marginBottom:5}}><b>Documents (D:)</b></span>
                   <img src="/img/Explorer/st2.PNG" style={{width:160}}/>
                   </div>
          </div>
          <div className={styles1.drivediv} onClick={()=>documentdriveEOpenfuncion()}>
            <img src="/img/Explorer/drive.png" style={{width:80}}/>
                   <div className={styles1.drivedivinner}>
                     <span style={{fontSize:18,marginBottom:5}}><b>Photos (E:)</b></span>
                   <img src="/img/Explorer/st3.PNG" style={{width:160}}/>
                   </div>
          </div>
          <div onClick={()=>openModal()} className={styles1.drivediv}>
            <img src="/img/Explorer/cddrive.png" style={{width:80}}/>
                   <div className={styles1.drivedivinner}>
                     <span style={{fontSize:18,marginBottom:5}}><b>DVD RW Drive (K:)</b></span>
                     <span style={{fontSize:15,marginBottom:5}}>0 bytes free of 79.6MB</span>
                     <span style={{fontSize:15,marginBottom:5}}>CDFS</span>

                   {/* <img src="/img/Explorer/st3.PNG" style={{width:160}}/> */}
                   </div>
          </div>

            
          
      </div>
 </div>
 </>
    )
  }
  

  const [documentDfunction, setdocumentDfunction] = useState(false)
  // const [documentEfunction, setdocumentEfunction] = useState(false)
  const [showmaindriveview, setshowmaindriveview] = useState(true)
  


  const documentdriveDOpenfuncion = ()=>{
    // setdocumentEfunction(false);
    setshowmaindriveview(false)
    setdocumentDfunction(true);
  }
  const documentdriveEOpenfuncion = ()=>{
    // setdocumentEfunction(true);
    setshowmaindriveview(false)
    setdocumentDfunction(false);
  }
  const documentdriveClosefuncion = ()=>{
    // setdocumentEfunction(false);
    // setdocumentDfunction(false);
    setshowmaindriveview(true)

  }


  const documentdriveDfuncion =()=>{
    return(<>
     {documentdrivesearchbar(' Abhay > This PC > Documents (D:)')}
        <div className={styles1.diskdriveDdiv}>
                <div className={styles1.diskdriveDdivI}>
                    <div className={styles1.diskdriveDdivIname}>
                     
                      <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}><b> Name</b></span>
                    </div>
                    <div className={styles1.diskdriveDdivIname}>
                        <img className={styles1.diskViewerIcons} src="/img/certificate/pdf.png" />
                        <a rel="noreferrer" href="https://gurujikenotes.com/resume/Resume.pdf" target="_blank" download="abhayresume.jpg"><span style={{fontSize:25,marginLeft:5}}> Resume.pdf</span></a>
                    </div>
                    <div className={styles1.diskdriveDdivIname}>
                        <img className={styles1.diskViewerIcons} src="/img/certificate/jpg.png" />
                        <a rel="noreferrer" href="https://poetankita.in/wp-content/c4.jpg" target="_blank" download="python.jpg"><span style={{fontSize:25,marginLeft:5}}> Python.jpg</span></a>
                    </div>
                    <div className={styles1.diskdriveDdivIname}>
                        <img className={styles1.diskViewerIcons} src="/img/certificate/jpg.png" />
                        <a rel="noreferrer" href="https://poetankita.in/wp-content/c3.jpg" target="_blank" download="android.jpg"><span style={{fontSize:25,marginLeft:5}}> Android.jpg</span></a>
                    </div>
                    <div className={styles1.diskdriveDdivIname}>
                        <img className={styles1.diskViewerIcons} src="/img/certificate/jpg.png" />
                        <a rel="noreferrer" href="https://poetankita.in/wp-content/c2.jpg" target="_blank" download="c++.jpg"><span style={{fontSize:25,marginLeft:5}}> C++.jpg</span></a>
                    </div>
                    <div className={styles1.diskdriveDdivIname}>
                        <img className={styles1.diskViewerIcons} src="/img/certificate/jpg.png" />
                        <a rel="noreferrer" href="https://poetankita.in/wp-content/c1.jpg" target="_blank" download="kotlin.jpg"><span style={{fontSize:25,marginLeft:5}}> Kotlin.jpg</span></a>
                    </div>
                   

                      
                 </div>
                 <div className={styles1.diskdriveDdivI}>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}><b> Type</b></span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>Pdf</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>Jpg</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>Jpg</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>Jpg</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>Jpg</span>
                   </div>
                 </div>
                 <div className={styles1.diskdriveDdivI}>
                 <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}><b> Size</b></span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>72 KB</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>67 KB</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>71 KB</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>73 KB</span>
                   </div>
                   <div className={styles1.diskdriveDdivIname}>
                     
                     <span style={{fontSize:25,marginLeft:5,width:'100%',textAlign:'center'}}>110 KB</span>
                   </div>
                 </div>
                
                 
                 
        </div>
        </>

    )
  }
  const documentdrivesearchbar = (e) =>{

    return(
     <div className={styles1.documentdrivesearchbar}>
          <img onClick={()=>documentdriveClosefuncion()} src="/img/chromeimg/left-arrow.png"  style={{width:35,marginLeft:10,padding:5}}/>
          <img src="/img/chromeimg/right-arrow.png"  style={{width:35,marginLeft:10,padding:5,opacity:0.2}}/>
          <input readOnly value={e} type="text" style={{marginLeft:10,height:'5vh',paddingLeft:10,marginTop:2, width:'100%',borderRadius:50,fontSize:20}}/>  
     </div>
    )
  }

  const documentdriveEfuncion =()=>{
    return(
      
      <>
      {documentdrivesearchbar(' Abhay > This PC > Photos (E:)')}
        <div  className={styles1.diskEdrivelist}>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/chromeimg/cosmatic.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/chromeimg/covid.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/chromeimg/educaps.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/chromeimg/gurji.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/chromeimg/PoetAnkita.jpg" className={styles1.imgEdrive}/>
            </div>
           
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/wallpaper/w1.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/wallpaper/w2.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/wallpaper/w3.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/wallpaper/w4.jpg" className={styles1.imgEdrive}/>
            </div>
            <div onClick={()=>openModal()} className={styles1.drivediv}>
                 <img src="/img/Abhay.jpeg" className={styles1.imgEdrive}/>
            </div>
        </div>
         </>

    )
  }

    return (

    
        <div style={sizewindow? popup_box1 :popup_box2} > 
        <Draggable  handle='strong'>
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
                                 
                <img  src="/img/exploler.png"  alt="chrome" id="img_taskbar"/>            
                    <span>
                    &nbsp;&nbsp;Explorer
                    </span>
                </div>
                <strong style={{width:'100%'}}>

            </strong>
                <div className={styles.ChromeCard_bt_div}>
                    <div onClick={() =>props.handleClose('Explorer')} className={styles.ChromeCard_buttons}>
                      <span style={{fontSize:25}}>─</span>
                    </div>
                    <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                        <span style={{fontSize:25}}>☐</span>
                    </div>
                    <div onClick={() =>props.handleClose('Explorer')} className={styles.ChromeCard_buttons_cancel}>
                           <span style={{fontSize:25}}>X</span>
                    </div>
                </div>
           </div>
         {     showmaindriveview?iconexpolerer():documentDfunction?documentdriveDfuncion():documentdriveEfuncion()}
      </div>
      </Resizable>
      </Draggable>
      {modelaction()}
    </div> 
    )
} 

export default Explorer
