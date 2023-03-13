import styles from "./HeaderChildComponent.module.css";

function HeaderChildComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.secondaryNav}>
        <div className={styles.navTrigger}>
          <a
            data-toggle="collapse"
            href="#secondary-nav"
            aria-expanded="false"
            aria-controls="secondary-nav"
          >
            <i className="fa fa-user"></i>
          </a>
        </div>
        <div id="secondary-nav">
          <nav>
            <div className={styles.left}>
              <div className={styles.contactInfo}>
                <a href="">
                  <i className="fa fa-phone"></i>+1 781-903-1047
                </a>
                <a href="mailto:hello@example.com">
                  <i className="fa fa-envelope"></i>hello@example.com
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.currency}>
                <select>
                  <option>$</option>
                  <option>€</option>
                </select>
              </div>

              <div className={styles.signIn}>
                <a
                  href="#tab-sign-in"
                  data-toggle="modal"
                  data-tab="true"
                  data-target="#sign-in-register-modal"
                >
                  Sign In
                </a>
              </div>

              <div className={styles.register}>
                <a
                  href="#tab-register"
                  data-toggle="modal"
                  data-tab="true"
                  data-target="#sign-in-register-modal"
                >
                  Register
                </a>
              </div>

              <div className={styles.language}>
                <select>
                  <option>EN</option>
                  <option>DE</option>
                  <option>RU</option>
                  <option>ES</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderChildComponent;
