import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <ul className="nav nav-pills card-header-pills m-2">
      <li className="nav-item">
        <Link className="nav-link disable" to="/movies">
          Vidly
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/movies">
          Movies
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/customers">
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/rentals">
          Rentals
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
