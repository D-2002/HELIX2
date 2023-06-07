import React from "react";
import { RiSdCardFill, RiTicketLine } from "react-icons/ri";
import house from "../../assets/house.jpeg";
import "./possibility.css";
import Feature from "../../components/feature/Feature";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Register here</button>
    </div>
  );
}

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    {/* <div className="gpt3__possibility-image">
      <img src={house} alt="possibility" />
    </div>
   
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div> */}
    <div className="gpt3__possibility-content">
      <h1>CHOOSE YOUR PREFERRED HOUSE</h1>
    </div>

    <div className="gpt3__possibility-image">
      <img src={house} alt="possibility" />
    </div>

    <div className="wrapper">
      <Card
        image=""
        title="Virtual house 1"
        description="
      start date: 9 June 2023
      Duration: 2 Months
      Entry: Wildcard and beginning 
      Country: India
      "
      />
      <Card
        image=""
        title="Virtual house 2"
        description="
      start date: 15 June 2023
      Duration: 4 Months
      Entry: Wildcard
      Country: USA"
      />
    </div>
  </div>
);

export default Possibility;
