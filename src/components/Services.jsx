import React from "react";
import logo from "../assets/images/logo_gitora.png";
import { MdQuestionMark } from "react-icons/md";
import "./Services.css";

const Services = () => {
  return (
    <div className="services_root">
      <div className="provide_services">
        <h1 className="services_title"></h1>
        <div className="what_can_we_do">
          <h3>what can we do for you </h3>
          <span>
            <MdQuestionMark />
          </span>
        </div>
      </div>
      <section className="feature_services">
        <div className="feature_grid">
          <div className="feature_item">
            <span className="feature_number">1</span>
            <div className="feature_content">
              <h3>Geospatial Facility Mapping: </h3>
              <p>
                Real-time, location-based mapping enabling users to identify
                nearby fitness centers, cross-fit boxes, and specialized
                studios.
              </p>
            </div>
          </div>

          <div className="feature_item">
            <span className="feature_number">2</span>
            <div className="feature_content">
              <h3>Fitness Product Catalog:</h3>
              <p>
                Digital storefront featuring authorized sellers of nutritional
                supplements, athletic apparel, and fitness accessories.
              </p>
            </div>
          </div>

          <div className="feature_item">
            <span className="feature_number">3</span>
            <div className="feature_content">
              <h3>Gym Partner Dashboard: </h3>
              <p>
                Self-management portal for gym operators to update operational
                hours, upload equipment inventories, post announcements, and
                monitor profile view metrics.
              </p>
            </div>
          </div>

          <div className="feature_item">
            <span className="feature_number">4</span>
            <div className="feature_content">
              <h3>Granular Amenity Filtering: </h3>
              <p>
                Search engine allowing users to filter gyms by available
                equipment , facilities , and daily operating hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
