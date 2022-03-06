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
        <div className="navbar-nav">
          <NavLink className="nav-link nav-item" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link nav-item" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link nav-item" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-link nav-item" to="/login">
            Login
          </NavLink>
        </div>
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
