import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavMenu = () => {
  const router = useLocation();
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink to="/admin/dashboard" className="navbar-brand">
          UA-TLMC Information Kiosk
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                to="/admin/dashboard"
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/activities">
                Activities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/students">
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/documents" className="nav-link">
                Documents
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
