import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    // <div classNameName="nav nav-pills card-header-pills m-2">
    //   <NavLink classNameName="nav-link nav-item" to="/movies">
    //     Movies
    //   </NavLink>
    //   <NavLink classNameName="nav-link nav-item" to="/customers">
    //     Customers
    //   </NavLink>
    //   <NavLink classNameName="nav-link nav-item" to="">
    //     Rentals
    //   </NavLink>
    // </div>
  );
};

export default NavBar;