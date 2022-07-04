import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, Image } from "antd";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();
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
          <NavLink to="/admin/activities" className="navbar-brand">
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
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            {/* <li className="nav-item">
              <NavLink
                to="/admin/dashboard"
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li> */}
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
            <button
              className="btn btn-outline-success"
              onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                navigate(`/login`);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
