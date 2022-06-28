import React from "react";
import Map from "../../images/map.png";
import Navbar from "./navbar.component";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-section">
        <div className="landing-section-content">
          <div>
            <p className="text">
              Welcome to University of Antique, Tario-Lim Memorial Campus
            </p>
            <p className="text">Information Kiosk System</p>
          </div>
          <center>
            <div
              className="d-flex justify-content-around"
              style={{ width: "50%" }}
            >
              <button className="btn btn-primary btn-lg">
                {" "}
                <a href="#about" style={{ color: "#fff" }}>
                  {" "}
                  Learn more
                </a>
              </button>
              <button className="btn btn-success btn-lg">
                {" "}
                Download the App
              </button>
            </div>
          </center>
        </div>
      </div>

      <div className="about" id="about">
        <center>
          <p className="fs-1">About UA-TLMC Information Kiosk System</p>
        </center>
        <center>
          <p className="fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aliquid debitis alias laborum, illum, fuga harum iure maiores
            dignissimos maxime, consequatur laudantium culpa necessitatibus?
            Deleniti ratione magni laboriosam facilis quasi?
          </p>
        </center>
      </div>

      <div className="about-ua">
        <center>
          <p className="fs-1">About UA-TLMC</p>
        </center>
        <center>
          <p className="fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aliquid debitis alias laborum, illum, fuga harum iure maiores
            dignissimos maxime, consequatur laudantium culpa necessitatibus?
            Deleniti ratione magni laboriosam facilis quasi?
          </p>
        </center>
      </div>
      <div className="about">
        <center>
          <p className="fs-1">UA TLMC Campus Map</p>
        </center>
        <center>
          <img src={Map} className="campus-map" alt="UA-TLMC Campus Map" />
        </center>
      </div>

      <div className="footer">
        <p className="fs-6 m-0">
          Copyright © 2022 | UA-TLMC Information Kiosk System | UA-TLMC{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
