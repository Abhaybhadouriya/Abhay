import React from "react";
import styles from "./css/BootScreen.module.css";

const BootScreen = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <img
        src="img/bootlogo.png"
        alt="Paris"
        style={{
          width:"auto",
          maxWidth:'100vh' ,
          height: 160,
          marginTop: 15,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom:25
        }}
      />
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        {" "}
        <div className={styles.loader} />
      </div>
    </div>
  );
};

export default BootScreen;
