import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";
import logofinal from "../../assets/logofinal.png";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Reserve your seat 3 months in advance using our early access model!{" "}
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logofinal} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>About</p>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>X46E198 Office hq. Mumbai</p>
        <p>+91-9399334229</p>
        <p>X46E198@gmail.com</p>
      </div>
    </div>
  </div>
);

export default Footer;
