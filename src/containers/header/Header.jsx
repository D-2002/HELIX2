import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import logofinal from "../../assets/logofinal.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">HELIX</h1>
      <p>
        THE ULTIMATE METAVERSE SHOWDOWN! <br />
        Experience a virtual-reality gaming series! Become a participant to be a
        member of this world or be an audience and observe the drama unfold!
      </p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <p>Hurry and grab your seat before it is too late!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={logofinal} />
    </div>
  </div>
);

export default Header;
