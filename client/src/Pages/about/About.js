import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import "./about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="mainContainer">
        <h1 className="mb">About HerSafety</h1>
        <div className="logoContainer mb">
          <img className="aboutClass" src="https://play-lh.googleusercontent.com/YI0x2uebd60h9h6v3jnMv3b4RlGSP2CwxUyNhlDDp0PbWKeNgm1CiF_L51hRZtdzIL0" />
        </div>
        <p className="mb">
          HerSafety is a platform that crowdsources personal stories of sexual
          harassment and abuse in public spaces. This data which maybe
          anonymous, gets aggregated as hot spots on a map indicating trends at
          a local level. The idea is to make this data useful for individuals,
          local communities and local administration to identify factors that
          causes behavior that leads to violence and work on strategies for
          solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
