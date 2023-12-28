import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={"/home"}>
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt="logo"
            className="navbar-logo-mart"
          />
          <span className="ml-2">A-Z Mart</span>
        </div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav d-flex align-items-center ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link active">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">Cart</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mr-lg-2 ml-lg-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
                alt="profileLogo"
                className="navbar-profile-logo"
              />
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-danger text-white pl-2 pr-2"
              type="button"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
