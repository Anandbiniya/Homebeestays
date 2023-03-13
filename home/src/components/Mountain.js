import React from "react";
import styles from "./Mountain.module.css";

function Mountain() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.left}>
          <h1  className={styles.name}>
            Mountain Paradise
            <span className={styles.rating}>
              <i className="fa fa-star"></i>9.9
            </span>
          </h1>
          <h3>
            <a href="#">Austria</a> (63 properties)
          </h3>
        </div>
        <div className={styles.right}>
          <a href="#map" className={`${styles.icon} ${styles.scroll}`}>
            <i className="fa fa-map-marker"></i>See on the map
          </a>
          <a
            href="#availability"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnRounded} ${styles.scroll}`}
          >
            Reserve Today
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
