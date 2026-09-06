import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { GrValidate } from "react-icons/gr";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <div className="root-features">
      <div className="feature-cards">
        <div className="feature-icon">
          <span>
            <FaLocationDot />
          </span>
        </div>

        <div className="feature-content">
          <h3>Find Gym</h3>
          <p>Discover gyms near you and start now.</p>
        </div>
      </div>

      <div className="feature-cards">
        <div className="feature-icon">
          <span>
            <GrValidate />
          </span>
        </div>

        <div className="feature-content">
          <h3>Prices and Facilities</h3>
          <p>Compare their facilities and prices.</p>
        </div>
      </div>

      <div className="feature-cards">
        <div className="feature-icon">
          <span>
            <IoStar />
          </span>
        </div>

        <div className="feature-content">
          <h3>Explore Services</h3>
          <p>And choose the one that fits your fitness goals.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
