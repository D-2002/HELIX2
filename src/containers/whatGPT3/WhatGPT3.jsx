import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is Helix?"
        text="We welcome you to “Helix”- India’s first meta-drama series!
This platform will provide more drama than any offline reality show ever could! Conceal identities, make strategic interactions, be friends but with hidden intentions, eliminate your competition, and manipulate others to believe your version of reality! Now you are not limited to just 30 participants, the entire world can be a part of the house."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">KNOW THE BASIC RULES</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Rule No.1"
        text="Users may be audiences or rivals. If the user is a competitor, they can play with their own profile or play as a CATFISH!!"
      />
      <Feature
        title="Rule No.2"
        text="Competitors will have one common group but they are off course free to devise plots and strategies by making their own groups and developing personal connections through private chats."
      />
      <Feature
        title="Rule No.3"
        text="2 games (like ‘Guess the fake’ will be held per week to make people doubt others of not only their intentions but also their identities!"
      />

      <Feature
        title="Rule No.4"
        text="Eliminations will be held per week by members themselves. According to the rankings,2 members will become 'admins' and will have the power to kick someone out."
      />

      <Feature
        title="Rule No.5"
        text="After the game is over, the steaming for audiences will be available."
      />
    </div>
  </div>
);

export default WhatGPT3;
