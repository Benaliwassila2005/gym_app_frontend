import React from "react";
import athl from "../assets/images/athl.png";
import ath4 from "../assets/images/ath4.png";
import halt from "../assets/images/halt.png";
import cart4 from "../assets/images/cart4.png";

import "./joinUs.css";

const JoinUs = () => {
  return (
    <div className="join-root">
      <h1>
        JOIN THE <span> GITORA </span> ECOSYSTEM
      </h1>

      <div className="join-content-root">
        <div className="join-content">
          <div className="service-content">
            <div className="content-text">
              <img src={halt} alt="" />

              <div className="text">
                <h3>GYM MEMBER</h3>
                <p>Find gyms , and compare rotes & buy sumplements</p>
              </div>
            </div>
            <button>Explore Now </button>
          </div>
        </div>

        <div className="join-content">
          <div className="service-content">
            <div className="content-text">
              <img src={ath4} alt="" />
              <div className="text">
                <h3>GYM OWNER</h3>
                <p>List your facility ,get listed and grow with GITORA.</p>
              </div>
            </div>
            <button>Partner With Us</button>
          </div>
        </div>

        <div className="join-content">
          <div className="service-content">
            <div className="content-text">
              <img src={cart4} alt="" />
              <div className="text">
                <h3>PRODUCT SELLER</h3>
                <p>Sell supplements, gear & apparel now with GITORA</p>
              </div>
            </div>
            <button>Start Selling</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
