import React from "react";
import "./Home.css";
import nanaDawns from "../../images/nana-dawns.png";
import organicCleaning from "../../images/organic-cleaning.png";

const Home = () => {
  return (
    <div className="home-container">
      <p className="home-p">Work</p>
      <div className="home-wrapper-grid">
        <div className="homecard-container1 ">
          <img
            className="home-img1"
            src={nanaDawns}
            alt="nana dawns mobile view"
          />
          <a
            className="home-link"
            href="https://master.d7nhm199f5wzr.amplifyapp.com/"
          >
            <p className="p-label">Nana Dawn's1</p>
          </a>
        </div>

        <div className="homecard-container2">
          <img
            className="home-img1"
            src={organicCleaning}
            alt="Organic cleaning mobile view"
          />
          <a
            className="home-link"
            href="https://master.d1hypkpxf0f9rp.amplifyapp.com/"
          >
            <p className="p-label">Opals Organic Cleaning</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
