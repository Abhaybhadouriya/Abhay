import React, { useState } from "react";
import styles from "../css/ChromeCard.module.css";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import styles1 from "./css/Setting.module.css";

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

const Settings = (props) => {
  // resizeable window attributes
  const [sizewindow, setsizewindow] = useState(true);
  const [width, setwidth] = useState("100%");
  const [height, setheigth] = useState("90vh");
  // maximize window function
  const sizeWindow = () => {
    setsizewindow(!sizewindow);
    setheigth("90vh");
    setwidth("100%");
  };

  // initlizing the current wallpaper variable
  const [selectedWallpaperCheckBox1, setSelectedWallpaperCheckBox1] =
    React.useState({
      ch1: true,
      ch2: false,
      ch3: false,
      ch4: false,
      ch5: false,
    });

  // on page reopen this function check the default
  // wallpaper and theme then it set back the value of curent wallpaper and theme
  React.useEffect(() => {
    if (props.data === "/img/win.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: true,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: false,
      });
      console.log(props.data);
    }
    if (props.data === "/img/wallpaper/w2.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: true,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (props.data === "/img/wallpaper/w3.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: true,
        ch4: false,
        ch5: false,
      });
    }
    if (props.data === "/img/wallpaper/w4.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: true,
        ch5: false,
      });
    }
    if (props.data === "/img/wallpaper/w1.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: true,
      });
    }
    if (props.themecolor === "rgb(142, 142, 240)") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: true,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (props.themecolor === "#6cb3d9") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: true,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (props.themecolor === "#c48474") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: true,
        ch4: false,
        ch5: false,
      });
    }
    if (props.themecolor === "#e3ed72") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: true,
        ch5: false,
      });
    }
    if (props.themecolor === "#ed80d7") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: true,
      });
    }
  }, []);

  const changeWallpaperCheckBox = (event) => {
    if (event.target.value === "/img/win.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: true,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: false,
      });
      console.log(props.data);
    }
    if (event.target.value === "/img/wallpaper/w2.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: true,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (event.target.value === "/img/wallpaper/w3.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: true,
        ch4: false,
        ch5: false,
      });
    }
    if (event.target.value === "/img/wallpaper/w4.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: true,
        ch5: false,
      });
    }
    if (event.target.value === "/img/wallpaper/w1.jpg") {
      setSelectedWallpaperCheckBox1({
        ...selectedWallpaperCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: true,
      });
    }
  };

  const changeThemeCheckBox = (event) => {
    if (event.target.value === "rgb(142, 142, 240)") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: true,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (event.target.value === "#6cb3d9") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: true,
        ch3: false,
        ch4: false,
        ch5: false,
      });
    }
    if (event.target.value === "#c48474") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: true,
        ch4: false,
        ch5: false,
      });
    }
    if (event.target.value === "#e3ed72") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: true,
        ch5: false,
      });
    }
    if (event.target.value === "#ed80d7") {
      setSelectedThemeCheckBox1({
        ...selectedThemeCheckBox1,
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
        ch5: true,
      });
    }
  };
  // Theme check usestate hook
  const [selectedThemeCheckBox1, setSelectedThemeCheckBox1] = useState({
    ch1: true,
    ch2: false,
    ch3: false,
    ch4: false,
    ch5: false,
  });

  return (
    <div style={sizewindow ? popup_box1 : popup_box2}>
      <Draggable handle='strong'>
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
                <img src="/img/setinga.png" alt="chrome" id="img_taskbar" />
                <span>&nbsp;&nbsp;Setting</span>
              </div>
              <strong style={{width:'100%'}}>

            </strong>
              <div className={styles.ChromeCard_bt_div}>
                <div
                  onClick={() => props.handleClose("Setting")}
                  className={styles.ChromeCard_buttons}
                >
                  <span style={{ fontSize: 25 }}>─</span>
                </div>
                <div onClick={sizeWindow} className={styles.ChromeCard_buttons}>
                  <span style={{ fontSize: 25 }}>☐</span>
                </div>
                <div
                  onClick={() => props.handleClose("Setting")}
                  className={styles.ChromeCard_buttons_cancel}
                >
                  <span style={{ fontSize: 25 }}>X</span>
                </div>
              </div>
            </div>
            <div className={styles1.carddiv}>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  padding: 10,
                }}
              >
                <span style={{ fontSize: 25, alignItems: "center" }}>
                  Change Wallpaper
                </span>
              </div>
              <div className={styles1.card}>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <img
                    src="/img/win.jpg"
                    className={styles1.img_wallpaper}
                    alt="wallpaper1"
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      checked={selectedWallpaperCheckBox1.ch1}
                      onChange={(e) => {
                        props.changeWallpaper("/img/win.jpg"),
                          changeWallpaperCheckBox(e);
                      }}
                      type="radio"
                      id="radiowall"
                      name="fav_language"
                      value="/img/win.jpg"
                    />
                     {" "}
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Wallpaper 1
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <img
                    src="/img/wallpaper/w2.jpg"
                    className={styles1.img_wallpaper}
                    alt="wallpaper2"
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      checked={selectedWallpaperCheckBox1.ch2}
                      onChange={(e) => {
                        props.changeWallpaper("/img/wallpaper/w2.jpg"),
                          changeWallpaperCheckBox(e);
                      }}
                      type="radio"
                      id="radiowall"
                      name="fav_language"
                      value="/img/wallpaper/w2.jpg"
                    />
                     {" "}
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Wallpaper 2
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <img
                    src="/img/wallpaper/w3.jpg"
                    className={styles1.img_wallpaper}
                    alt="wallpaper3"
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      checked={selectedWallpaperCheckBox1.ch3}
                      onChange={(e) => {
                        props.changeWallpaper("/img/wallpaper/w3.jpg"),
                          changeWallpaperCheckBox(e);
                      }}
                      type="radio"
                      id="radiowall"
                      name="fav_language"
                      value="/img/wallpaper/w3.jpg"
                    />
                     {" "}
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Wallpaper 3
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <img
                    src="/img/wallpaper/w4.jpg"
                    className={styles1.img_wallpaper}
                    alt="wallpaper4"
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      checked={selectedWallpaperCheckBox1.ch4}
                      onChange={(e) => {
                        props.changeWallpaper("/img/wallpaper/w4.jpg"),
                          changeWallpaperCheckBox(e);
                      }}
                      type="radio"
                      id="radiowall"
                      name="fav_language"
                      value="/img/wallpaper/w4.jpg"
                    />
                     {" "}
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Wallpaper 4
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <img
                    src="/img/wallpaper/w1.jpg"
                    className={styles1.img_wallpaper}
                    alt="wallpaper5"
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      checked={selectedWallpaperCheckBox1.ch5}
                      onChange={(e) => {
                        props.changeWallpaper("/img/wallpaper/w1.jpg"),
                          changeWallpaperCheckBox(e);
                      }}
                      type="radio"
                      id="radiowall"
                      name="fav_language"
                      value="/img/wallpaper/w1.jpg"
                    />
                     {" "}
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Wallpaper 5
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #dce0e6",
                  width: "100%",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              />
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  padding: 10,
                }}
              >
                <span style={{ fontSize: 25, alignItems: "center" }}>
                  Change Theme{" "}
                </span>
              </div>
              <div className={styles1.card1}>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                    paddingLeft: 15,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: "rgb(142, 142, 240)",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,.6)",
                    }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <input
                      checked={selectedThemeCheckBox1.ch1}
                      onChange={(e) => {
                        props.changeTheme("rgb(142, 142, 240)"),
                          changeThemeCheckBox(e);
                      }}
                      type="radio"
                      id="radiotheme"
                      name="fav_theme"
                      value="rgb(142, 142, 240)"
                    />
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Theme 1
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                    paddingLeft: 15,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: "#6cb3d9",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,.6)",
                    }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <input
                      checked={selectedThemeCheckBox1.ch2}
                      onChange={(e) => {
                        props.changeTheme("#6cb3d9"), changeThemeCheckBox(e);
                      }}
                      type="radio"
                      id="radiotheme"
                      name="fav_theme"
                      value="#6cb3d9"
                    />
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Theme 2
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                    paddingLeft: 15,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: "#c48474",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,.6)",
                    }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <input
                      checked={selectedThemeCheckBox1.ch3}
                      onChange={(e) => {
                        props.changeTheme("#c48474"), changeThemeCheckBox(e);
                      }}
                      type="radio"
                      id="radiotheme"
                      name="fav_theme"
                      value="#c48474"
                    />
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Theme 3
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                    paddingLeft: 15,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: "#e3ed72",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,.6)",
                    }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <input
                      checked={selectedThemeCheckBox1.ch4}
                      onChange={(e) => {
                        props.changeTheme("#e3ed72"), changeThemeCheckBox(e);
                      }}
                      type="radio"
                      id="radiotheme"
                      name="fav_theme"
                      value="#e3ed72"
                    />
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Theme 4
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    height: "fit-content",
                    paddingLeft: 15,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      backgroundColor: "#ed80d7",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,.6)",
                    }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <input
                      checked={selectedThemeCheckBox1.ch5}
                      onChange={(e) => {
                        props.changeTheme("#ed80d7"), changeThemeCheckBox(e);
                      }}
                      type="radio"
                      id="radiotheme"
                      name="fav_theme"
                      value="#ed80d7"
                    />
                    <label
                      style={{ fontSize: 18, fontFamily: "sans-serif" }}
                      htmlFor="W1"
                    >
                      Theme 5
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export default Settings;
