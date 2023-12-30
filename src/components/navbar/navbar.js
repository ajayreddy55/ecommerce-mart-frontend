import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";
import { useUserAuth } from "../../context/authContext";
import { auth } from "../../firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, signOutUser, setUser, setIsLoggedIn } = useUserAuth();

  const logoutTheUser = async () => {
    try {
      await signOutUser();
      if (auth.currentUser === null) {
        setIsLoggedIn(false);
        setUser({});
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <NavLink className="nav-link" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/products"}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/about-us"}>
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/cart"}>
              Cart
            </NavLink>
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
            {isLoggedIn ? (
              <button
                className="nav-link btn btn-danger text-white pl-2 pr-2"
                type="button"
                onClick={logoutTheUser}
              >
                Logout
              </button>
            ) : (
              <button
                className="nav-link btn btn-primary text-white pl-2 pr-2"
                onClick={() => navigate("/login")}
                type="button"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
