import React from "react";
import { Avatar, Image } from "antd";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
const NavMenu = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Avatar
            shape="square"
            size={64}
            style={{ marginRight: "10px" }}
            src={<Image src={Logo} style={{ width: 64 }} />}
          />
          <NavLink to="/" className="navbar-brand">
            <p className="fs-3 m-0"> UA-TLMC Information Kiosk</p>
          </NavLink>
        </div>
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
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
          <div className="d-flex">
            <NavLink to="/" className="nav-link" aria-current="page">
              Home
            </NavLink>
            <NavLink to="/login" className="nav-link" aria-current="page">
              Admin Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
