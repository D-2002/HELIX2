import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "VIRTUAL HOUSE 1",
    text: "FEES: Rs. 400(free for first 5 days), DURATION: 3 months, COUNTRY: INDIA",
  },
  {
    title: "VIRTUAL HOUSE 2",
    text: "FEES: Rs. 200(free for first 15 days), DURATION: 1 month, COUNTRY: USA",
  },
  {
    title: "VIRTUAL HOUSE 3",
    text: "FEES: Rs. 450(free for first 10 days), DURATION: 3 months, COUNTRY: INDIA",
  },
  {
    title: "VIRTUAL HOUSE 4",
    text: "FEES: Rs. 700(free for first 5 days), DURATION: 8 months, COUNTRY: WORLDWIDE",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        HELLO AUDIENCE! <br /> <br /> BOOK YOUR VIRTUAL HOUSE NOW!
      </h1>
      <p>Request early access to book your seat now!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
