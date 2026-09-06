import React from "react";
import "./About.css";
import logo_gitora from "../assets/images/about_logo_gitora.png";
import gitora_icon1 from "../assets/images/gitora_icon1.png";
import gitora_icon2 from "../assets/images/gitora_icon2.png";
import gitora_icon3 from "../assets/images/gitora_icon3.png";
import gitora_icon4 from "../assets/images/gitora_icon4.png";
import gitora_icon5 from "../assets/images/gitora_icon5.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="about-root">
      <div className="about-right">
        <div className="about-header">
          <h2>About</h2>
          <img src={logo_gitora} alt="Gitora Logo" />
          <h3>Train Better. Live Stronger</h3>
        </div>
        <p>
          Gitora is a modern fitness platform connecting users with gyms and
          fitness businesses. Discover and compare gyms, explore their
          facilities, services, prices, and reviews, while gym owners manage
          their profiles and reach new customers. Fitness sellers can also
          showcase supplements, sportswear, and equipment all in one complete
          fitness ecosystem.
        </p>

        <div className="about-gitora-icons">
          <img src={gitora_icon2} alt="" />
          <img src={gitora_icon3} alt="" />
          <img src={gitora_icon4} alt="" />
          <img src={gitora_icon5} alt="" />
        </div>
      </div>
      <div className="about-left">
        <h2>Why choose Us? </h2>

        <div className="gitora_content">
          <div className="choose-content">
            <span className="arrow-icon">
              <MdOutlineArrowOutward />
            </span>
            <p>
              Discover nearby gyms, their facilities, services, prices, and
              opening hours.
            </p>
          </div>
          <div className="choose-content">
            <span className="arrow-icon">
              <MdOutlineArrowOutward />
            </span>
            <p>
              Verified gyms and sellers ensure users connect with trusted
              fitness businesses.
            </p>
          </div>

          <div className="choose-content">
            <span className="arrow-icon">
              <MdOutlineArrowOutward />
            </span>
            <p>
              Discover supplements, sportswear, accessories, and fitness
              equipment from trusted sellers.
            </p>
          </div>
          <div className="choose-content">
            <span className="arrow-icon">
              <MdOutlineArrowOutward />
            </span>
            <p>
              Explore gym photos, equipment, plans, schedules, services, and
              contact detailsall in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
