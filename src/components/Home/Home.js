import React from "react";
import "./Home.css";
import nanaDawns from "../../images/nana-dawns.png";

const Home = () => {
  return (
    <div className="home-container">
      <p className="home-p">Work</p>
      <div className="home-wrapper-grid">
        <div className="homecard-container1 ">
          <div className="homecard-wrapper">
            <img
              className="home-img1"
              src={nanaDawns}
              alt="nana dawns mobile view"
            />
            <a
              className="home-link"
              href="https://master.d7nhm199f5wzr.amplifyapp.com/"
            >
              <p className="p-label">Nana Dawn's</p>
            </a>
          </div>
        </div>

        <div className="homecard-container2">
          {/* <p className="home-p">Work</p> */}
          <div className="homecard-wrapper">
            <img
              className="home-img1"
              src={nanaDawns}
              alt="nana dawns mobile view"
            />
            <a
              className="home-link"
              href="https://master.d7nhm199f5wzr.amplifyapp.com/"
            >
              <p className="p-label">Nana Dawn's</p>
            </a>
          </div>
        </div>

        {/* <p className="home-p">Work</p> */}
        <div className="homecard-container3">
          <div className="homecard-wrapper">
            <img
              className="home-img1"
              src={nanaDawns}
              alt="nana dawns mobile view"
            />
            <a
              className="home-link"
              href="https://master.d7nhm199f5wzr.amplifyapp.com/"
            >
              <p className="p-label">Nana Dawn's</p>
            </a>
          </div>
        </div>

        <div className="homecard-container4">
          <div className="homecard-wrapper">
            <img
              className="home-img1"
              src={nanaDawns}
              alt="nana dawns mobile view"
            />
            <a
              className="home-link"
              href="https://master.d7nhm199f5wzr.amplifyapp.com/"
            >
              <p className="p-label">Nana Dawn's</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
