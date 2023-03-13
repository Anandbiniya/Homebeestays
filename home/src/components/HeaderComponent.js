import React from "react";
import HeaderChildComponent from "./HeaderChildComponent";
import styles from "./HeaderComponent.module.css";

function HeaderComponent() {
  return (
    <div>
      <div className="page-wrapper">
        <div id="page-header">
          <header>
          
            <HeaderChildComponent />

            {/* <hr> */}
            <div className="container">
              <div className="primary-nav">
                <div className="left">
                  <a href="index.html" id="brand">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                  <a
                    className="nav-trigger"
                    data-toggle="collapse"
                    href="#primary-nav"
                    aria-expanded="false"
                    aria-controls="primary-nav"
                  >
                    <i className="fa fa-navicon"></i>
                  </a>
                </div>

                <div className="right">
                  <nav id="primary-nav">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="#" className="has-child">
                          Listing
                        </a>
                        <ul className="child-nav">
                          <li>
                            <a href="listing.html">List Listing</a>
                          </li>
                          <li>
                            <a href="listing-matrix.html">Matrix Listing</a>
                          </li>
                        </ul>
                      </li>
                      <li className="active">
                        <a href="#" className="has-child">
                          Pages
                        </a>
                        <ul className="child-nav">
                          <li>
                            <a href="404.html">404</a>
                          </li>
                          <li>
                            <a href="#" className="has-child">
                              Admin
                            </a>
                            <ul className="child-nav">
                              <li>
                                <a href="edit.html">Edit Accommodation</a>
                              </li>
                              <li>
                                <a href="my-accommodations.html">
                                  My Accommodations
                                </a>
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
                            <a href="become-an-affiliate.html">
                              Become an Affiliate
                            </a>
                          </li>
                          <li>
                            <a href="#" className="has-child">
                              Blog
                            </a>
                            <ul className="child-nav">
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
                            <a href="terms-and-conditions.html">
                              Terms & Conditions
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li className="submit">
                        <a href="submit.html">
                          <span>Submit</span>
                          <i
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Submit"
                          >
                            <img src="assets/img/plus.png" alt="" />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div id="page-content">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Listing</a>
              </li>
              <li className="active">Detail</li>
            </ol>

            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="sidebar">
                  <div className="box filter">
                    <h2>Search</h2>
                    <form id="form-filter" className="labels-uppercase">
                      <div className="form-group">
                        <label for="form-filter-destination">Destination</label>
                        <input
                          type="text"
                          className="form-control"
                          id="form-filter-destination"
                          name="destination"
                          placeholder="Destination"
                        />
                      </div>

                      <div className="form-group-inline">
                        <div className="form-group">
                          <label for="form-filter-check-in">Check In</label>
                          <input
                            type="text"
                            className="form-control date"
                            id="form-filter-check-in"
                            name="check-in"
                            placeholder="Check In"
                          />
                        </div>

                        <div className="form-group">
                          <label for="form-filter-check-out">Nights</label>
                          <input
                            type="number"
                            className="form-control"
                            id="form-filter-check-out"
                            name="check-out"
                          />
                        </div>
                      </div>

                      <div className="center">
                        <a
                          href="#filter-advanced-search"
                          className="link icon"
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="filter-advanced-search"
                        >
                          Advanced Search<i className="fa fa-plus"></i>
                        </a>
                      </div>
                      <div className="collapse" id="filter-advanced-search">
                        <div className="wrapper">
                          <section>
                            <h3>Rate (per night)</h3>
                            <ul className="checkboxes list-unstyled">
                              <li>
                                <label>
                                  <input type="checkbox" name="hotel" />
                                  $0 - $50<span>12</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="apartment" />
                                  $50 - $100<span>48</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="breakfast-only"
                                  />
                                  $150 - $150<span>36</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="spa-wellness" />
                                  $150+<span>56</span>
                                </label>
                              </li>
                            </ul>
                          </section>

                          <section>
                            <h3>Property Type </h3>
                            <ul className="checkboxes">
                              <li>
                                <label>
                                  <input type="checkbox" name="hotel" />
                                  Apartmets<span>67</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="apartment" />
                                  Hotels<span>31</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="breakfast-only"
                                  />
                                  Boats<span>68</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="spa-wellness" />
                                  Villas<span>52</span>
                                </label>
                              </li>
                            </ul>
                            <div className="collapse" id="all-property-types">
                              <ul className="checkboxes">
                                <li>
                                  <label>
                                    <input type="checkbox" name="ski-center" />
                                    Ski Center<span>67</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="cottage" />
                                    Cottage<span>31</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="hostel" />
                                    Hostel<span>68</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" name="boat" />
                                    Boat<span>52</span>
                                  </label>
                                </li>
                              </ul>
                            </div>

                            <a
                              href="#all-property-types"
                              className="link"
                              data-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="all-property-types"
                            >
                              Show all
                            </a>
                          </section>

                          <section>
                            <h3>Property Facility</h3>
                            <ul className="checkboxes no-bottom-margin">
                              <li>
                                <label>
                                  <input type="checkbox" name="wi-fi" />
                                  Wi-fi<span>12</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="free-parking" />
                                  Free Parking<span>48</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="airport" />
                                  Airport Shuttle<span>36</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" name="family-rooms" />
                                  Family Rooms<span>56</span>
                                </label>
                              </li>
                            </ul>
                          </section>
                        </div>
                      </div>

                      <div className="form-group center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded form-control"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="box">
                    <h2>Weather in Destination</h2>
                    <div id="weather" className="weather weather-detail"></div>
                  </div>

                  <a href="#" className="advertising-banner">
                    <span className="banner-badge">Advertising</span>
                    <img src="assets/img/ad-banner-02.jpg" alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-9 col-sm-8">
                <div className="quick-navigation" data-fixed-after-touch="">
                  <div className="wrapper">
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
                </div>
                <div className="main-content">
                  <div className="title">
                    <div className="left">
                      <h1>
                        Mountain Paradise
                        <span className="rating">
                          <i className="fa fa-star"></i>9.9
                        </span>
                      </h1>
                      <h3>
                        <a href="#">Austria</a> (63 properties)
                      </h3>
                    </div>
                    <div className="right">
                      <a href="#map" className="icon scroll">
                        <i className="fa fa-map-marker"></i>See on the map
                      </a>
                      <a
                        href="#availability"
                        className="btn btn-primary btn-rounded scroll"
                      >
                        Reserve Today
                      </a>
                    </div>
                  </div>

                  <section id="gallery">
                    <div className="gallery-detail">
                      <div className="ribbon">
                        <div className="offer-number">20%</div>
                        <figure>Off Today!</figure>
                      </div>
                      <div className="one-item-carousel">
                        <div className="image">
                          <a href="#reviews" className="review scroll">
                            <div className="rating">
                              <div className="rating-title">
                                <figure className="rating">9.8</figure>
                                <h4>Very Good Hotel</h4>
                              </div>
                              <p>
                                Consectetur adipiscing elit. Vivamus nec augue
                                ac dui sodales euismod. Suspendisse at dui sit
                                amet felis commodo dictum. className aptent
                                taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos
                              </p>
                            </div>
                          </a>
                          <img src="assets/img/items/01_b.jpg" alt="" />
                        </div>
                        <div className="image">
                          <a href="#reviews" className="review scroll">
                            <div className="rating">
                              <div className="rating-title">
                                <figure className="rating">9.9</figure>
                                <h4>Beautiful Holiday</h4>
                              </div>
                              <p>
                                className aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos
                              </p>
                            </div>
                          </a>
                          <img src="assets/img/items/02_b.jpg" alt="" />
                        </div>
                        <div className="image">
                          <a href="#reviews" className="review scroll">
                            <div className="rating">
                              <div className="rating-title">
                                <figure className="rating">9.8</figure>
                                <h4>Very Good Hotel</h4>
                              </div>
                              <p>
                                Consectetur adipiscing elit. Vivamus nec augue
                                ac dui sodales euismod. Suspendisse at dui sit
                                amet felis commodo dictum. className aptent
                                taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos
                              </p>
                            </div>
                          </a>
                          <img src="assets/img/items/03_b.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <h2>Description</h2>
                  <div className="row">
                    <div className="col-md-8">
                      <section id="description">
                        <h3>Spend Great Time in Our Hotel!</h3>
                        <p>
                          Consectetur adipiscing elit. Vivamus nec augue ac dui
                          sodales euismod. Suspendisse at dui sit amet felis
                          commodo dictum. className aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos. Integer commodo eleifend erat, vitae
                          tincidunt urna volutpat et. Mauris laoreet, sem ut
                          sodales sodales, massa turpis posuere lectus, non
                          aliquet massa nisl ac orci.
                        </p>
                        <p>
                          Aenean non dapibus neque. Praesent tempus aliquet
                          felis, auctor aliquet ligula bibendum id. Phasellus ut
                          finibus ligula. Suspendisse sodales lacus vel viverra
                          egestas. Donec eu interdum sem, sed tempus odio.
                          Interdum et malesuada fames ac ante ipsum primis in
                          faucibus. In ut ante lacinia, interdum ante eu,
                          posuere ex. Donec iaculis elit consectetur nisi
                          finibus, a vestibulum nibh mattis. Aliquam erat
                          volutpat.
                        </p>
                      </section>
                      <section id="facilities">
                        <h2>Facilities</h2>
                        <ul className="bullets half">
                          <li>Sauna</li>
                          <li>Fireplace or fire pit</li>
                          <li>Outdoor Kitchen</li>
                          <li>Tennis Courts</li>
                          <li>Trees and Landscaping</li>
                          <li>Sun Room</li>
                          <li>Family Room</li>
                          <li>Concrete Flooring</li>
                        </ul>
                      </section>
                      <section id="map">
                        <h2>Map</h2>
                        <div id="map-item" className="map height-300 box"></div>
                      </section>
                    </div>
                    <div className="col-md-4">
                      <div className="sidebar">
                        <aside className="box">
                          <dl>
                            <dt>1-Bed Rooms:</dt>
                            <dd>23</dd>
                            <dt>2-Bed Rooms:</dt>
                            <dd>48</dd>
                            <dt>Apartments:</dt>
                            <dd>12</dd>
                            <dt>Parking:</dt>
                            <dd>Free</dd>
                            <dt>Swimming:</dt>
                            <dd>Yes</dd>
                            <dt>Ski Center:</dt>
                            <dd>2km</dd>
                          </dl>
                        </aside>
                        <aside>
                          <h2>Contact</h2>
                          <address>
                            <strong>Your Company</strong>
                            <br />
                            4877 Spruce Drive
                            <br />
                            West Newton, PA 15089
                            <br />
                            <br />
                            <a href="tel:+17341234567">+1 (734) 123-4567</a>
                            <br />
                            <a href="mailto:hello@example.com">
                              hello@example.com
                            </a>
                            <br />
                            <strong>skype:</strong> your.company
                          </address>
                        </aside>
                      </div>
                    </div>
                  </div>

                  <h2>Why Choose This Hotel?</h2>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="feature">
                        <aside className="circle">
                          <i className="icon_box-checked"></i>
                        </aside>
                        <figure>
                          <h3>200+ Reviews</h3>
                        </figure>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="feature">
                        <aside className="circle">
                          <i className="icon_box-checked"></i>
                        </aside>
                        <figure>
                          <h3>Low Prices</h3>
                        </figure>
                      </div>
                    </div>

                    <section>
                      <div className="col-md-4 col-sm-4">
                        <div className="feature">
                          <aside className="circle">
                            <i className="icon_box-checked"></i>
                          </aside>
                          <figure>
                            <h3>Great Position</h3>
                          </figure>
                        </div>
                      </div>
                    </section>
                    <section id="availability">
                      <h2>Availability</h2>
                      <form className="labels-uppercase" id="form-availability">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label for="form-availability-check-in">
                                Check In
                              </label>
                              <input
                                type="text"
                                className="form-control date"
                                id="form-availability-check-in"
                                name="check-in"
                                placeholder="Check In"
                              />
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="form-group">
                              <label for="form-availability-check-out">
                                Check In
                              </label>
                              <input
                                type="text"
                                className="form-control date"
                                id="form-availability-check-out"
                                name="check-out"
                                placeholder="Check In"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label className="invisible">Hidden label</label>
                              <button
                                type="submit"
                                className="btn btn-primary btn-rounded btn-framed form-control"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>

                      <div className="form-reservations">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Room Type</th>
                                <th>Persons</th>
                                <th>Price</th>
                                <th>Rooms</th>
                                <th></th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <form id="room_1">
                          <table className="table">
                            <tbody>
                              <tr className="room">
                                <td className="room-type">
                                  <a href="">
                                    <h3>Double Room</h3>
                                    <figure className="label label-danger">
                                      1 Room Left!
                                    </figure>
                                  </a>
                                  <p>
                                    Consectetur adipiscing elit. Vivamus nec
                                    augue ac dui sodales euismod. Suspendisse at
                                    dui sit amet felis commodo dictum.
                                  </p>
                                  <ul className="info">
                                    <li>Breakfast Included</li>
                                    <li>VAT Included</li>
                                  </ul>
                                </td>
                                <td className="persons">
                                  2<i className="fa fa-user"></i>
                                </td>
                                <td className="price">$96</td>
                                <td className="rooms">
                                  <select
                                    className="framed"
                                    name="room_1_nights"
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="form-group">
                                    <button
                                      type="submit"
                                      className="btn btn-primary btn-rounded"
                                    >
                                      Reserve Now
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                        <form id="room_2">
                          <table className="table">
                            <tbody>
                              <tr className="room">
                                <td className="room-type">
                                  <a href="">
                                    <h3>Family Suite</h3>
                                  </a>
                                  <p>
                                    Consectetur adipiscing elit. Vivamus nec
                                    augue ac dui sodales euismod. Suspendisse at
                                    dui sit amet felis commodo dictum.
                                  </p>
                                  <ul className="info">
                                    <li>Breakfast Included</li>
                                    <li>VAT Included</li>
                                  </ul>
                                </td>
                                <td className="persons">
                                  4+1<i className="fa fa-user"></i>
                                </td>
                                <td className="price">$176</td>
                                <td className="rooms">
                                  <select
                                    className="framed"
                                    name="room_2_nights"
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="form-group">
                                    <button
                                      type="submit"
                                      className="btn btn-primary btn-rounded"
                                    >
                                      Reserve Now
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                        <form id="room_3">
                          <table className="table">
                            <tbody>
                              <tr className="room">
                                <td className="room-type">
                                  <a href="">
                                    <h3>Apartment</h3>
                                  </a>
                                  <p>
                                    Consectetur adipiscing elit. Vivamus nec
                                    augue ac dui sodales euismod. Suspendisse at
                                    dui sit amet felis commodo dictum.
                                  </p>
                                  <ul className="info">
                                    <li>Breakfast Included</li>
                                    <li>VAT Included</li>
                                  </ul>
                                </td>
                                <td className="persons">
                                  2+2<i className="fa fa-user"></i>
                                </td>
                                <td className="price">$250</td>
                                <td className="rooms">
                                  <select
                                    className="framed"
                                    name="room_3_nights"
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="form-group">
                                    <button
                                      type="submit"
                                      className="btn btn-primary btn-rounded"
                                    >
                                      Reserve Now
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                    </section>
                    <section id="additional-information">
                      <h2>Additional Information</h2>
                      <dl className="info">
                        <dt>Check-in:</dt>
                        <dd>14:00 - 00:00</dd>
                        <dt>Check-out:</dt>
                        <dd>
                          <strong>Late Check-out: until 12:00 </strong>
                        </dd>
                        <dt>Cancellation:</dt>
                        <dd>
                          Cancellation and prepayment policies vary according to
                          room type.
                        </dd>
                        <dt>Children:</dt>
                        <dd>All children are welcome.</dd>
                        <dt>Pets:</dt>
                        <dd>Pets are not allowed</dd>
                      </dl>
                    </section>
                    <section id="reviews">
                      <div className="title">
                        <h2 className="pull-left">Reviews</h2>
                        <a
                          href="#write-a-review"
                          className="btn btn-primary btn-rounded pull-right scroll"
                        >
                          Write a Review
                        </a>
                      </div>
                      <h3>Overall Score</h3>
                      <ul className="rating-score">
                        <li className="overall">
                          <i className="fa fa-star"></i>9.9
                        </li>
                        <li>
                          <span>9.6</span>
                          <figure>Cleanliness</figure>
                        </li>
                        <li>
                          <span>10</span>
                          <figure>Comfort</figure>
                        </li>
                        <li>
                          <span>9.4</span>
                          <figure>Location</figure>
                        </li>
                        <li>
                          <span>9.8</span>
                          <figure>Facilities</figure>
                        </li>
                        <li>
                          <span>10</span>
                          <figure>Staff</figure>
                        </li>
                        <li>
                          <span>10</span>
                          <figure>Value for money</figure>
                        </li>
                      </ul>
                      <div className="reviews">
                        <div className="review">
                          <div className="row">
                            <div className="col-md-3">
                              <aside className="name">John Doe</aside>
                              <aside className="date">10.03.2015</aside>
                            </div>
                            <div className="col-md-9">
                              <div className="comment">
                                <div className="comment-title">
                                  <figure className="rating">9.5</figure>
                                  <h4>Beautiful Holiday</h4>
                                </div>
                                <p>
                                  Consectetur adipiscing elit. Vivamus nec augue
                                  ac dui sodales euismod. Suspendisse at dui sit
                                  amet felis commodo dictum. className aptent
                                  taciti sociosqu ad litora torquent per conubia
                                  nostra, per inceptos himenaeos. Integer
                                  commodo eleifend erat, vitae tincidunt urna
                                  volutpat et. Mauris laoreet, sem ut sodales
                                  sodales, massa turpis posuere lectus, non
                                  aliquet massa nisl ac orci.
                                </p>
                                <div className="clearfix options">
                                  <span className="pull-left">
                                    <a
                                      href=""
                                      className="btn btn-framed btn-default btn-rounded btn-small icon"
                                    >
                                      <i className="fa fa-thumbs-up font-color-default"></i>
                                      3
                                    </a>
                                    Helpful Review?
                                  </span>
                                  <span className="pull-right">
                                    <a
                                      href=""
                                      className="link icon font-color-grey"
                                    >
                                      <i className="fa fa-flag"></i>Report
                                    </a>
                                  </span>
                                </div>
                                <div className="answer">
                                  <h4>
                                    James Green, CEO of the Mountain Paradise
                                    Hotel
                                  </h4>
                                  <p>
                                    Phasellus venenatis vel orci et lacinia.
                                    Duis sollicitudin arcu et hendrerit tempor.
                                    Aliquam at urna fringilla, auctor tellus
                                    eget, vehicula lorem. Pellentesque ornare
                                    faucibus sapien eget max
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review">
                          <div className="row">
                            <div className="col-md-3">
                              <aside className="name">Peter Green</aside>
                              <aside className="date">10.03.2015</aside>
                            </div>

                            <div className="col-md-9">
                              <div className="comment">
                                <div className="comment-title">
                                  <figure className="rating">9.8</figure>
                                  <h4>Very Good Hotel</h4>
                                </div>

                                <p>
                                  In eleifend odio vel augue mattis, et pharetra
                                  dolor ullamcorper. Nulla ut porttitor mauris.
                                  Sed tincidunt, urna non cursus suscipit, quam
                                  velit laoreet libero, sit amet tincidunt ex
                                  nunc eget eros.
                                </p>
                                <div className="clearfix options">
                                  <span className="pull-left">
                                    <a
                                      href=""
                                      className="btn btn-framed btn-default btn-rounded btn-small icon"
                                    >
                                      <i className="fa fa-thumbs-up font-color-default"></i>
                                      10
                                    </a>
                                    Helpful Review?
                                  </span>
                                  <span className="pull-right">
                                    <a
                                      href=""
                                      className="link icon font-color-grey"
                                    >
                                      <i className="fa fa-flag"></i>Report
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="write-a-review">
                      <h2>Write a Review</h2>
                      <form
                        className="labels-uppercase clearfix"
                        id="form_reply_1"
                      >
                        <div
                          className="alert alert-dark fade in center"
                          role="alert"
                        >
                          <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                            data-switch="#review-write"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <span className="sr-only">Error:</span>
                          <a
                            href="#tab-sign-in"
                            data-toggle="modal"
                            data-tab="true"
                            data-target="#sign-in-register-modal"
                          >
                            Please Sign in to write a review
                          </a>
                        </div>
                        <div className="review write switch" id="review-write">
                          <aside className="name">John Doe</aside>
                          <div className="comment">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="comment-title">
                                  <h4>Review Your Stay</h4>
                                </div>

                                <div className="form-group">
                                  <label for="form_reply_1-name">
                                    Title of your review<em>*</em>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="form_reply_1-name"
                                    name="name"
                                    placeholder="Beautiful holiday!"
                                    required=""
                                  />
                                </div>
                                <div className="form-group">
                                  <label for="form_reply_1-message">
                                    Your Answer<em>*</em>
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="form_reply_1-message"
                                    rows="8"
                                    name="answer"
                                    required=""
                                    placeholder="Describe your stay"
                                  ></textarea>

                                  <div className="form-group pull-right">
                                    <button
                                      type="submit"
                                      className="btn btn-primary btn-rounded"
                                    >
                                      Send Review
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="comment-title">
                                  <h4>Rating</h4>
                                </div>

                                <dl className="visitor-rating">
                                  <dt>Cleanliness</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="cleanliness"
                                  ></dd>
                                  <dt>Comfort</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="comfort"
                                  ></dd>
                                  <dt>Location</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="location"
                                  ></dd>
                                  <dt>Facilities</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="facilities"
                                  ></dd>
                                  <dt>Staff</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="staff"
                                  ></dd>
                                  <dt>Value for money</dt>
                                  <dd
                                    className="star-rating active"
                                    data-name="value"
                                  ></dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>

                  {/* </div> */}
                </div>
              </div>
              {/* <!--end container--> */}
            </div>

            <div className="row-one">
              <div className="container">
                <div className="logos">
                  <div className="logo">
                    <a href="#">
                      <img src="assets/img/logo-1.png" alt="" />
                    </a>
                  </div>

                  <div className="logo">
                    <a href="#">
                      <img src="assets/img/logo-2.png" alt="" />
                    </a>
                  </div>

                  <div className="logo">
                    <a href="#">
                      <img src="assets/img/logo-3.png" alt="" />
                    </a>
                  </div>

                  <div classNameName="logo">
                    <a href="#">
                      <img src="assets/img/logo-4.png" alt="" />
                    </a>
                  </div>
                  {/* <!--/ .logo--> */}
                  <div className="logo">
                    <a href="#">
                      <img src="assets/img/logo-5.png" alt="" />
                    </a>
                  </div>
                  {/* <!--/ .logo--> */}
                </div>
                {/* <!--/ .logos--> */}
              </div>
            </div>
            {/* <!--end row-one--> */}
            <div className="row-two clearfix">
              <div className="container">
                <div className="copyright pull-left">
                  (C) 2016 Your Company, All Rights Reserved
                </div>
                <div className="footer-nav pull-right">
                  <a href="index.html">Home</a>
                  <a href="about-us.html">About Us</a>
                  <a href="listing.html">Listing</a>
                  <a href="contact-us.html">Contact Us</a>
                </div>
              </div>
              <div className="bg-transfer">
                <img src="assets/img/footer-bg.jpg" alt="" />
              </div>
            </div>
          </div>

          <a
            href="#page-header"
            className="to-top scroll"
            data-show-after-scroll="600"
          >
            <i className="arrow_up"></i>
          </a>

          <div
            className="message-popup bottom-left"
            data-show-after-time="2000"
            data-close-after-time="5000"
          >
            <div className="close">
              <i className="fa fa-times"></i>
            </div>
            <p>15 people are watching this accommodation.</p>
          </div>

          <div
            className="message-popup bottom-left featured"
            data-show-after-time="4000"
            data-close-after-time="5000"
          >
            <div className="close">
              <i className="fa fa-times"></i>
            </div>
            <div className="title">Just Booked!</div>
            <p>
              Hurry up! This accommodation was just booked. Don’t miss the
              chance!
            </p>
          </div>

          <div
            className="message-popup bottom-left"
            data-show-after-time="5000"
            data-close-after-time="5000"
          >
            <div className="close">
              <i className="fa fa-times"></i>
            </div>
            <p>
              Last booking was from <strong>France</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
