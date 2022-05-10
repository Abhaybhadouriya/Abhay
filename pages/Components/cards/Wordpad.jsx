import React, { useState } from "react";
import styles from "../css/ChromeCard.module.css";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import styles1 from "./css/Wordpad.module.css";

//  Window minimize and maximize css inner box

const style_box1 = {
  position: "relative",
  width: "100%",
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",

  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #999",
  overflow: "auto",
};
const style_box2 = {
  position: "relative",
  minWidth: 350,
  margin: "0 auto",
  height: "94vh",
  maxHeight: "94vh",

  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #999",
  overflow: "auto",
};

//  Window minimize and maximize css outer box

const popup_box1 = {
  position: "fixed",
  width: "100%",
  height: "1vh",
  top: 0,
  left: 0,
};
const popup_box2 = {
  position: "fixed",
  width: 350,
  height: "1vh",
  top: 0,
  left: 0,
};

const Wordpad = (props) => {
  // Resizeable window attributes
  const [sizewindow, setsizewindow] = useState(true);
  const [width, setwidth] = useState("100%");
  const [height, setheigth] = useState("90vh");
  // maximize window function
  const sizeWindow = () => {
    setsizewindow(!sizewindow);
    setheigth("90vh");
    setwidth("100%");
  };

  //  default document link
  const [docUrlViewer, setdocUrlViewer] = useState(
    "https://poetankita.in/wp-content/abhayresume.jpg"
  );
  const [docViewerTab, setdocViewerTab] = useState(false);
  const opendrivefile = (e) => {
    setdocUrlViewer(e);
    setdocViewerTab(true);
  };
  const closeDocViewerTab = () => {
    setdocViewerTab(false);
  };

  const changeCurrentDocViewerTab = (e) => {
    setdocUrlViewer(e);
  };
  const pdfIconDiv = () => {
    return (
      <div className={styles1.pdf_drive}>
        <div
          className={styles1.cardpdf}
          onClick={() =>
            opendrivefile("https://poetankita.in/wp-content/abhayresume.jpg")
          }
        >
          <img
            className={styles1.imgpdf}
            src="/img/certificate/abhayresume.jpg"
          />
          <div className={styles1.detailscardpdf}>
            <span style={{ fontSize: 20, color: "black" }}>
              {" "}
              <b>Resume</b>
            </span>
            <p style={{ marginBottom: 0 }}>
              I am a Full Stack Developer worked on below technologies
            </p>
            <ul style={{ margin: 0 }}>
              <li>PHP,Jsp,Java Servlet,Python CGI,Nodejs Python Flask</li>
              <li>Webscraping using Python and Java,</li>
              <li>Knows About DS,Algo,OS,CN </li>
              <li>MySQL,Firebase FireStore and RDBMS</li>
            </ul>
          </div>
        </div>
        <div
          className={styles1.cardpdf}
          onClick={() =>
            opendrivefile("https://poetankita.in/wp-content/c4.jpg")
          }
        >
          <img className={styles1.imgpdf} src="/img/certificate/c4-min.jpg" />
          <div className={styles1.detailscardpdf}>
            <span style={{ fontSize: 20, color: "black" }}>
              {" "}
              <b>Python</b>
            </span>
            <p style={{ marginBottom: 0 }}>
              Six Week online summer training on Programming witn python. This
              training consisted of
            </p>
            <ul style={{ margin: 0 }}>
              <li>Basic of Python</li>
              <li>OOPs concepts</li>
              <li>SQLite Database</li>
              <li>GUI with PyQT </li>
              <li>Tkinter,Flask , beautifulsoup and selenium</li>
            </ul>
          </div>
        </div>
        <div
          className={styles1.cardpdf}
          onClick={() =>
            opendrivefile("https://poetankita.in/wp-content/c3.jpg")
          }
        >
          <img className={styles1.imgpdf} src="/img/certificate/c3-min.jpg" />
          <div className={styles1.detailscardpdf}>
            <span style={{ fontSize: 20, color: "black" }}>
              {" "}
              <b>Android Development</b>
            </span>
            <p style={{ marginBottom: 0 }}>
              Six Week online summer training on Android App Development. This
              training consisted of
            </p>
            <ul style={{ margin: 0 }}>
              <li>Building User Interface</li>
              <li>Adding Functionalities</li>
              <li>Worked on Both Java and Kotlin in Andriod Studio </li>
              <li>Worked on Firebase Authentication and MySQL Database</li>
            </ul>
          </div>
        </div>
        <div
          className={styles1.cardpdf}
          onClick={() =>
            opendrivefile("https://poetankita.in/wp-content/c2.jpg")
          }
        >
          <img className={styles1.imgpdf} src="/img/certificate/c2-min.jpg" />
          <div className={styles1.detailscardpdf}>
            <span style={{ fontSize: 20, color: "black" }}>
              {" "}
              <b>C++</b>
            </span>
            <p style={{ marginBottom: 0 }}>
              18 hour online Tutorial on Programming with C++. This tutorial
              consisted of
            </p>
            <ul style={{ margin: 0 }}>
              <li>Basic of C++,Variables,functions and Switch Cases</li>
              <li>Data Structures and Algorithms</li>
              <li>OOPs concepts ie:- Polymorphism,Objects and class etc</li>
            </ul>
          </div>
        </div>
        <div
          className={styles1.cardpdf}
          onClick={() =>
            opendrivefile("https://poetankita.in/wp-content/c1.jpg")
          }
          v
        >
          <img className={styles1.imgpdf} src="/img/certificate/c1-min.jpg" />
          <div className={styles1.detailscardpdf}>
            <span style={{ fontSize: 20, color: "black" }}>
              {" "}
              <b>Kotlin</b>
            </span>
            <p style={{ marginBottom: 0 }}>
              4 hour online Tutorial on Programming with Kotlin Next Android
              Platform Language. This training consisted of
            </p>
            <ul style={{ margin: 0 }}>
              <li>Adding Functionalities and Building User Interface</li>
              <li>Worked on Andriod Studio </li>
              <li>Worked on Firebase Authentication and MySQL Database</li>
              <li>SQLite Database</li>
            </ul>
          </div>
        </div>
      </div>
    ); 
  };

  const worddocviewer = () => {
    return (
      <div className={styles1.worddocviewer}>
        <div className={styles1.worddocviewerlisttab}>
          <div
            onClick={() => closeDocViewerTab()}
            className={styles1.worddocviewerlisttabitems}
          >
            <img
              className={styles1.docViewerIcons}
              src="/img/chromeimg/left-arrow.png"
            />
            <span>Back</span>
          </div>
          <div className={styles1.worddocviewerlisttabitems}>
            <img
              className={styles1.docViewerIcons}
              src="/img/certificate/pdf.png"
            />
            <span
              onClick={(e) =>
                changeCurrentDocViewerTab(
                  "https://gurujikenotes.com/resume/abhayresume.jpg"
                )
              }
            >
              <b>Resume</b>
            </span>
          </div>
          <div className={styles1.worddocviewerlisttabitems}>
            <img
              className={styles1.docViewerIcons}
              src="/img/certificate/jpg.png"
            />
            <span
              onClick={(e) =>
                changeCurrentDocViewerTab(
                  "https://poetankita.in/wp-content/c4.jpg"
                )
              }
            >
              <b>Python Certificate</b>
            </span>
          </div>
          <div className={styles1.worddocviewerlisttabitems}>
            <img
              className={styles1.docViewerIcons}
              src="/img/certificate/jpg.png"
            />
            <span
              onClick={(e) =>
                changeCurrentDocViewerTab(
                  "https://poetankita.in/wp-content/c3.jpg"
                )
              }
            >
              <b>Android Development</b>
            </span>
          </div>
          <div className={styles1.worddocviewerlisttabitems}>
            <img
              className={styles1.docViewerIcons}
              src="/img/certificate/jpg.png"
            />
            <span
              onClick={(e) =>
                changeCurrentDocViewerTab(
                  "https://poetankita.in/wp-content/c2.jpg"
                )
              }
            >
              <b>C++ Certificate</b>
            </span>
          </div>
          <div className={styles1.worddocviewerlisttabitems}>
            <img
              className={styles1.docViewerIcons}
              src="/img/certificate/jpg.png"
            />
            <span
              onClick={(e) =>
                changeCurrentDocViewerTab(
                  "https://poetankita.in/wp-content/c1.jpg"
                )
              }
            >
              <b>Kotlin Certificate</b>
            </span>
          </div>
        </div>
        <div className={styles1.worddocviewerIframetab}>
          <img src={docUrlViewer} className={styles1.docViewerIframe} />
        </div>
      </div>
    );
  };
  return (
    <div style={sizewindow ? popup_box1 : popup_box2}>
      <Draggable handle="strong">
        <Resizable
          size={{ width: width, height: height }}
          onResizeStop={(e, direction, ref, d) => {
            setheigth({
              height: height + d.height,
            });
            setwidth({
              width: width + d.width,
            });
          }}
        >
          <div style={sizewindow ? style_box1 : style_box2}>
            <div
              className={styles.ChromeCard_navbar}
              style={{ backgroundColor: props.themecolor }}
            >
              <div className={styles.ChromeCard_Name_div}>
                <img src="/img/word.png" alt="chrome" id="img_taskbar" />
                <span>&nbsp;&nbsp;Wordpad</span>
              </div>
              <strong style={{ width: "100%" }}></strong>
              <div className={styles.ChromeCard_bt_div}>
                <div
                  onClick={() => props.handleClose("Word")}
                  className={styles.ChromeCard_buttons}
                >
                  <span style={{ fontSize: 25 }}>─</span>
                </div>
                <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                  <span style={{ fontSize: 25 }}>☐</span>
                </div>
                <div
                  onClick={() => props.handleClose("Word")}
                  className={styles.ChromeCard_buttons_cancel}
                >
                  <span style={{ fontSize: 25 }}>X</span>
                </div>
              </div>
            </div>

            {/* <iframe src="https://poetankita.in/wp-content/Abhay.pdf" width="100%" height="100%" frameborder="0" scrolling="no"></iframe> */}

            {docViewerTab ? worddocviewer() : pdfIconDiv()}
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export default Wordpad;
