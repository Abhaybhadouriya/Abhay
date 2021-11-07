import React from 'react'
import styles from './css/MainScreen.module.css'
import Taskbar from './components/Taskbar'
import ChromeCard from './cards/ChromeCard'
import Wordpad from './cards/Wordpad'
import Settings from './cards/Settings'
import About from './cards/About'
import Windows from './cards/Windows'
import Explorer from './cards/Explorer'
const MainScreen = () => {
    const [isOpenChrome, setIsOpenChrome] = React.useState(false);
    const [isOpenWordpad, setIsOpenWordpad] = React.useState(false);
    const [isOpenSetting, setIsOpenSetting] = React.useState(false);
    const [isOpenWindows, setIsOpenWindows] = React.useState(false);
    const [isOpenExploler, setIsOpenExplorer] = React.useState(false);
    const [isOpenAbout,setIsOpenAbout] = React.useState(false);


  
  const togglePopup = (value) => {
    if(value === 'Windows'){setIsOpenWindows(!isOpenWindows)}
    if(value === 'Chrome'){setIsOpenChrome(!isOpenChrome)}
    if(value === 'Word'){setIsOpenWordpad(!isOpenWordpad)}
    if(value === 'Setting'){setIsOpenSetting(!isOpenSetting)}
    if(value === 'Explorer'){setIsOpenExplorer(!isOpenExploler)}
    if(value === 'About'){setIsOpenAbout(!isOpenAbout)}
  }
  const es6Function = (value) =>{
      if(value === 'Windows'){
          setIsOpenWindows(!isOpenWindows) 
          // setminimizeWindow({...minimizeWindow,Windows : !Windows})
            }
      if(value === 'Chrome'){
          setIsOpenChrome(!isOpenChrome)
          // setminimizeWindow({...minimizeWindow,Chrome : !Chrome})
    }
      if(value === 'Word'){
          setIsOpenWordpad(!isOpenWordpad)
          // setminimizeWindow({...minimizeWindow,Word : !Word})
        }
      if(value === 'Setting'){
        setIsOpenSetting(!isOpenSetting)
        // setminimizeWindow({...minimizeWindow,Setting : !minimizeWindow.Setting})
      }
      if(value === 'Explorer'){
        setIsOpenExplorer(!isOpenExploler)
        // setminimizeWindow({...minimizeWindow,Explorer:!Exploler})
      }
      if(value === 'About'){
        setIsOpenAbout(!isOpenAbout)
      }
  }
  const chromeCard = (value) => {
    setcurrentWindow(value)
    setIsOpen(!isOpen);
 

  }
  const wordPad = (value) => {
    setcurrentWindow(value)
    setIsOpen(!isOpen);
  
  }
  const setting = (value) => {
    setcurrentWindow(value)
    setIsOpen(!isOpen);
   

  }
  const windows = (value) => {
    setcurrentWindow(value)
    setIsOpen(!isOpen);
   

  }
  const explorer = (value) => {
    setcurrentWindow(value)
    setIsOpen(!isOpen);
  

  }

  const [selectedWallpaper, setSelectedWallpaper] = React.useState('/img/wallpaper/w4.jpg');

  const changeWallpaper = (event) => {
    // setSelectedValue(event.target.value);
    //console.log(event)
    setSelectedWallpaper(event)
  };

  // ************************ Minimize Function
  // const [minimizeWindow,setminimizeWindow]=React.useState({
  //   Setting:false,
  //   Chrome:false,
  //   Word:false,
  //   Windows:false,
  //   Explorer:false
  // })
  //  const minWindow =(value)=>{
  // if(value === 'Windows'){setminimizeWindow({...minimizeWindow,Windows : !Windows})}
  // if(value === 'Chrome'){setminimizeWindow({...minimizeWindow,Chrome : !Chrome})}
  // if(value === 'Word'){setminimizeWindow({...minimizeWindow,Word : !Word})}
  // if(value === 'Setting'){setminimizeWindow({...minimizeWindow,Setting : !minimizeWindow.Setting})}
  // if(value === 'Explorer'){setminimizeWindow({...minimizeWindow,Explorer:!Exploler})}
  //  }
  const [themeColor, setthemeColor] = React.useState('rgb(142, 142, 240)')
  const changeTheme = (value) =>{
       setthemeColor(value)
  }


    return (<div className={styles.mainss}>
        <div className={styles.MainScreen} style={{background: "url("+selectedWallpaper+") no-repeat center / cover"}}>
       
        </div>
        
        {isOpenChrome && <ChromeCard themecolor={themeColor} handleClose={togglePopup}/>}     
        {isOpenExploler && <Explorer themecolor={themeColor} handleClose={togglePopup}/>}
        {isOpenWordpad && <Wordpad themecolor={themeColor}   handleClose={togglePopup}/>}
        {isOpenAbout && <About themecolor={themeColor}   handleClose={togglePopup}/>}
        {isOpenSetting && <Settings  themecolor={themeColor}  changeTheme={changeTheme}  handleClose={togglePopup} data={selectedWallpaper} changeWallpaper={changeWallpaper}/>}
        {isOpenWindows && <Windows themecolor={themeColor} openotherTab={es6Function} handleClose={togglePopup}/>}
         <Taskbar  es6Function = {es6Function}
         
          />
          </div> 
    )
}

export default MainScreen
