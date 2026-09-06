import React from "react";
import pic11 from "../assets/images/Athelete_pic.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosUnlock } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="root_container">
        <div className="text-div">
          <h1>
            FIND YOUR <span> GYM</span>
          </h1>
          <h1>
            FUEL YOUR <span> GRIND</span>
          </h1>
        </div>

        <div className="athlete_container">
          <div className="feature-card first-left">
            <span className="feature-icon">
              <IoLocationOutline />
            </span>
            <p>Find your gym</p>
          </div>

          <div className="feature-card second-right">
            <span className="feature-icon">
              <IoIosUnlock />
            </span>
            <p>Unlock it with power</p>
          </div>

          <img src={pic11} alt="Athelete pic" />

          <div className="feature-card third-left">
            <span className="feature-icon">
              <MdVerifiedUser />
            </span>
            <p>Find it with Security</p>
          </div>

          <div className="feature-card fourth-right">
            <span className="feature-icon">
              <CgGym />
            </span>
            <p>train your muscles</p>
          </div>
        </div>
      </div>

      <button id="start-now">
        Lets Start <IoIosArrowForward /> <IoIosArrowForward />
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HeroSection;
