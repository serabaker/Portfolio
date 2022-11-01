import React from "react";
import "./Content.css";
import homeOffice from "../../images/homeOffice.png";

const Content = () => {
  return (
    <div className="content">
      <div className="content-pic">
        <img
          className="content-img"
          src={homeOffice}
          alt="home-office-laptop"
        />
      </div>
    </div>
  );
};

export default Content;
