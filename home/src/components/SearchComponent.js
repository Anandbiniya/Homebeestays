import React from "react";
import styles from "./SearchComponent.module.css";

function SearchComponent() {
  return (
    <div>
      <ol className={styles.breadcrumb}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Listing</a>
        </li>
        <li className="active">Detail</li>
      </ol>

      <div className="row">
  <div className="col-md-3 col-sm-4" style={{ width: "20%" }}>
    <div className={styles.sidebar}>
      <div className="box filter">
        <h2>Search</h2>
        <form id="form-filter" className="labels-uppercase">
          <div className="form-group">
            <label htmlFor="form-filter-destination">Destination</label>
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
              <label htmlFor="form-filter-check-in">Check In</label>
              <input
                type="text"
                className="form-control date"
                id="form-filter-check-in"
                name="check-in"
                placeholder="Check In"
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-filter-check-out">Nights</label>
              <input
                type="number"
                className="form-control"
                id="form-filter-check-out"
                name="check-out"
              />
            </div>
          </div>

          <div className={styles.center}>
            <button type="submit" className={styles.button}>
              Search
            </button>
            <a
              href="#filter-advanced-search"
              className={`${styles.link} ${styles.icon}`}
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="filter-advanced-search"
            >
              Advanced Search<i className="fa fa-plus"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default SearchComponent;
