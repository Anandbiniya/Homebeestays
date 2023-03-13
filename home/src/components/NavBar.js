import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [showPages, setShowPages] = useState(false);

  const togglePages = () => {
    setShowPages((prevState) => !prevState);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about-us.html">About Us</a>
        </li>
        <li className={styles.listWithChild}>
          <a href="#" className="has-child">
            Listing
          </a>
          <ul className={`${styles.childList} ${styles.listWithListing}`}>
            <li>
              <a href="listing.html">List Listing</a>
            </li>
            <li>
              <a href="listing-matrix.html">Matrix Listing</a>
            </li>
          </ul>
        </li>
        <li className={`${styles.listWithChild} ${styles.active}`}>
          <a href="#" className="has-child" onClick={togglePages}>
            Pages
          </a>
          <ul
            className={`${styles.childList} ${
              showPages ? styles.show : styles.hide
            }`}
          >
            <li>
              <a href="404.html">404</a>
            </li>
            <li className={styles.listWithChild}>
              <a href="#" className="has-child">
                Admin
              </a>
              <ul className={styles.childList}>
                <li>
                  <a href="edit.html">Edit Accommodation</a>
                </li>
                <li>
                  <a href="my-accommodations.html">My Accommodations</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="reservations.html">Reservations</a>
                </li>
                <li>
                  <a href="reviews.html">Reviews</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about-us.html">About Us</a>
            </li>
            <li>
              <a href="detail.html">Accommodation Detail</a>
            </li>
            <li>
              <a href="become-an-affiliate.html">Become an Affiliate</a>
            </li>
            <li className={styles.listWithChild}>
              <a href="#" className="has-child">
                Blog
              </a>
              <ul className={styles.childList}>
                <li>
                  <a href="blog.html">Blog Listing</a>
                </li>
                <li>
                  <a href="blog-detail.html">Blog Detail</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="grid.html">Grid</a>
            </li>
            <li>
              <a href="sticky-footer.html">Sticky Footer</a>
            </li>
            <li>
              <a href="terms-and-conditions.html">Terms & Conditions</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact-us.html">Contact Us</a>
        </li>
        <li className="submit">
          <a href="submit.html">
            
            <i data-toggle="tooltip" data-placement="top" title="Submit" >
              <img
                src="https://thumbs.dreamstime.com/b/plus-icon-isolated-white-background-positive-sign-isolated-white-background-plus-icon-isolated-white-background-positive-226372416.jpg"
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
