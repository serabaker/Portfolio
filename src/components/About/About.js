import React from "react";
import "./About.css";
import homeOffice from "../../images/homeOffice.png";
const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-h3">About</h3>
      <div className="aside-info">
        Here is a message about me
        nfgdsakgjndfmljhxgfghjkjuhygtfdgvbhjkuhygtfdcvbnmkloiuytfgvbnmkijuytfgvbnmkjiuhygfvbnmkjuytfgdcvbnjkjiuytrdfcbvnjkijuytredsxcvbnjkhgyfdxcvbnjkiuytrdfgcjnklijuytrdfcbvnml,;iuytfgcvbnmklijuytfgvnjkloiuyt
      </div>
      <img className="about-img" src={homeOffice} alt="britny lain" />
    </div>
  );
};

export default About;
