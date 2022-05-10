
import Taskbar from './Components/components/Taskbar'
import MainScreen from './Components/MainScreen'
import BootScreen from './Components/BootScreen'
import LoginScreen from './Components/LoginScreen'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Home() {
  const [showboot, setshowboot] = useState(true)
  const [showlogin, setshowlogin] = useState(false)
  const [showmain, setshowmain] = useState(false)
 
  useEffect(() => {

      
   

        setTimeout(function () {
          setshowlogin(true)
          setshowboot(false)
      }, 4000);


      setTimeout(function () {
        
        setshowlogin(false)
        setshowmain(true)
    }, 7000);
  }, [])
 
  
  return (<>
      <Head>
        <title>Abhay Bhadouriya</title>
        <link rel="icon" href="/win.png" />
      </Head>
    <div className="container">

   
    {showboot? <BootScreen/>:<></>}
    {showlogin?<LoginScreen/>:<></>}
    {showmain? <MainScreen/> :<></>}

   
    </div> 
    </>
  )
}
