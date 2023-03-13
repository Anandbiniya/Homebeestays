import React from "react";
import styles from "./Submain.module.css";

function Submain() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a href="#description" className="scroll">
            Description
          </a>
        </li>
        <li>
          <a href="#map" className="scroll">
            Map
          </a>
        </li>
        <li>
          <a href="#facilities" className="scroll">
            Facilities
          </a>
        </li>
        <li>
          <a href="#additional-information" className="scroll">
            Additional Information
          </a>
        </li>
        <li>
          <a href="#reviews" className="scroll">
            Reviews
          </a>
            (23)
        </li>
      </ul>
    </div>
  );
}

export default Submain;
