import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactIcon}>
        <FaPhone />
      </div>
      <div className={styles.contactText}>
        <a href="tel:+17819031047">+1 781-903-1047</a>
      </div>
      <div className={styles.contactIcon}>
        <FaEnvelope />
      </div>
      <div className={styles.contactText}>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </div>
    </div>
  );
};

export default ContactInfo;
