import styles from "./SubHeader.module.css";
import logo from "../img/logo.png";

function SubHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.primaryNav}>
        <div className={styles.left}>
          <a href="index.html" id="brand">
            <img className={styles["small-image"]} src={logo} alt="" />
          </a>
          <a
            className={styles["nav-trigger"]}
            data-toggle="collapse"
            href="#primary-nav"
            aria-expanded="false"
            aria-controls="primary-nav"
          >
            <i className="fa fa-navicon"></i>
          </a>
        </div>
        {/* ... */}
      </div>
    </div>
  );
}

export default SubHeader;
