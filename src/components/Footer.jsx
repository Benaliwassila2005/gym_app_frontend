import React from "react";
import "./footer.css";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-root">
      <div className="footer-parts">
        <div className="footer-left">
          <h2>CONTACT US</h2>
          <p>Have questions or need support? Reach out to our team anytime.</p>

          <div className="adress contact-info">
            <span>
              <IoLocation />
            </span>
            <strong>Address</strong>
          </div>
          <p>Algeria, Mostaganem</p>

          <div className="email contact-info">
            <span>
              <MdEmail />
            </span>
            <strong>Email Us</strong>
          </div>
          <p>gitora.support@gmail.com</p>
        </div>

        <div className="footer-right">
          <form action="">
            <input type="text" name="full-name" placeholder="Full Name" />
            <input
              type="email"
              name="email-address"
              placeholder="Email Address"
            />
            <select name="role" defaultValue="">
              <option value="" disabled>
                Select your Role
              </option>
              <option value="user">Normal user</option>
              <option value="gym_owner">Gym owner</option>
              <option value="seller">Seller</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Write your message here"
            ></textarea>
            <button id="send-button" type="submit">
              Send Now
            </button>
          </form>
        </div>
      </div>
      <hr />
      <p>&copy; 2026 GITORA. All rights reserved.</p>
    </div>
  );
};

export default Footer;
