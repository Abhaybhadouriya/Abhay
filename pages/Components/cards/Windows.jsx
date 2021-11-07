import React ,{useState }from 'react';
import styles from'../css/ChromeCard.module.css';
import { Document, Page } from 'react-pdf';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactCalculator } from "simple-react-calculator";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Modal from 'react-modal';
import { Calculator } from 'react-mac-calculator'


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
}
const popup_box2 = {
  position: "fixed",
  width: 350,
  height: "1vh",
  top: 0,
  left: 0,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding:0,
    maxWidth:700,
    minWindow:'fit-content'   ,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight:'fit-content'
  },
};

const Windows = (props) => {
  //  Date Function
  const [valueDate, onChangeDate] = useState(new Date());
   
  //  Clock Function 
  const [valueTime, setValueTime] = useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(
      () => setValueTime(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
   

  //  Error Pop Function
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showValueinModel, setshowValueinModel] = React.useState('')
  function openModal(e) {
    setIsOpen(true);
    if(e==='clock') setshowValueinModel('clock')
    if(e==='calculator') setshowValueinModel('calculator')
    if(e==='calendar') setshowValueinModel('calendar')

    // setshowValueinModel(e)
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
                          <div style={{flexDirection:'column',display:'flex',width:'100%'}}>
                          <div style={{flexDirection:'row',display:'flex',width:'100%',backgroundColor:props.themecolor,marginBottom:10}}>
                            <div style={{flexDirection:'row',display:'flex',width:'50%',paddingRight:5}}><span style={{fontSize:15,textTransform:'capitalize',paddingLeft:10}}>{showValueinModel}</span></div>
                            <div style={{flexDirection:'row-reverse',display:'flex',width:'50%'}}>
                            <button onClick={closeModal} style={{border:'none',backgroundColor:'red',color:'white',fontSize:20,margin:1}}>&nbsp; X &nbsp;</button>
                            </div>
                        
                          </div>
                          <div style={{padding:15}}>
                          { showValueinModel==='clock' ? <Clock value={valueTime}/> : <></>}
                          { showValueinModel==='calendar' ? <Calendar onChange={onChangeDate} value={valueDate} /> : <></>}
                          { showValueinModel==='calculator' ?<Calculator /> : <></>}
                          </div>
                             
                            
                          </div>
      
      </Modal>
      
    )
  }
// Error Pop Function ended


  const [sizewindow, setsizewindow] = useState(true)
   const [width, setwidth] = useState("100%")
   const [height, setheigth] = useState("90vh")
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const sizeWindow=()=>{
       setsizewindow(!sizewindow) 
       setheigth("90vh")   
      setwidth("100%")
  }
  const minWindow=()=>{

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
                                 
                <img  src="/img/win.png"  alt="chrome" id="img_taskbar"/>            
                    <span>
                    &nbsp;&nbsp;Windows
                    </span>
                </div>
                <div className={styles.ChromeCard_bt_div}>
                    <div onClick={() =>{props.handleClose('Windows')}} className={styles.ChromeCard_buttons}>
                      <span style={{fontSize:25}}>─</span>
                    </div>
                    <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                        <span style={{fontSize:25}}>☐</span>
                    </div>
                    <div onClick={() =>props.handleClose('Windows')} className={styles.ChromeCard_buttons_cancel}>
                           <span style={{fontSize:25}}>X</span>
                    </div>
                </div>
           </div>
        <div style={{overflow:'auto',height:'85vh'}}>
        {/* <Calendar
        onChange={onChange}
        value={value}
      /> */}
{/* <ReactCalculator /> */}
        <div style={{width:'100%',justifyContent:'center',display:'flex',color:'rgb(43, 40, 40)'}}>
        <span style={{width:'100%',textAlign:'center',fontSize:25}}>Accessories</span>
        </div>
       <div style={{justifyContent:'center',color:'rgb(43, 40, 40)',display:'flex',flexWrap:'wrap',width:'100%',marginTop:15,padding:10}}>
          
          <div onClick={()=>openModal('clock')} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/windows/clock.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Clock</span>
              </div>

          </div>
          <div onClick={()=>openModal('calculator')} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/windows/calculator.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Calculator</span>
              </div>

          </div>
          <div onClick={()=>openModal('calendar')} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/windows/calendar.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Calendar</span>
              </div>

          </div>
          <div onClick={() =>{props.handleClose('Windows'),props.openotherTab('Explorer')}} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/exploler.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex',marginTop:20}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Explorer</span>
              </div>

          </div>
          
          <div onClick={() =>{props.handleClose('Windows'),props.openotherTab('Setting')}} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/setinga.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Setting</span>
              </div>

          </div>
          
          <div onClick={() =>{props.handleClose('Windows'),props.openotherTab('Word')}} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/word.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Wordpad</span>
              </div>

          </div>
          <div onClick={() =>{props.handleClose('Windows'),props.openotherTab('Chrome')}} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/chromaaa.png" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>Chrome</span>
              </div>

          </div>
          
          <div onClick={() =>{props.handleClose('Windows'),props.openotherTab('About')}} style={{margin:10,border:'1px solid rgb(189, 184, 184)',borderRadius:10,padding:10,flexDirection:'column',width:160,display:'flex',cursor:'pointer'}}>
              <img src="/img/about.jpg" style={{width:'100%'}}/>
              <div style={{width:'100%',justifyContent:'center',display:'flex'}}>
                <span style={{fontSize:25,width:'100%',textAlign:'center'}}>About</span>
              </div>

          </div>
          
          
           
      </div>
       </div>
      </div>
      </Resizable>
      </Draggable>
      {/* Need to all this model class */}
      
      {modelaction()}
    </div> 
    )
} 

export default Windows
