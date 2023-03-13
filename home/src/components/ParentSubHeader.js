import React from "react";
import NavBar from "./NavBar";
import SubHeader from "./SubHeader";
import styles from "./ParentSubHeader.module.css";

function ParentSubHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SubHeader />
      </div>
      <span className={styles.space}></span>
      <div className={styles.right}>
        <NavBar />
      </div>
    </div>
  );
}

export default ParentSubHeader;
