import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import hum1 from "../../assets/hum1.png";
import fem2 from "../../assets/fem2.png";
import male from "../../assets/male.png";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        What the "real world" <br /> is saying about us.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={hum1}
          name="Priyanshi Shah"
          text="It is an amazing way to connect with people from not only our country but globally"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={fem2}
          name="Nysa Singh"
          text="Wonderful game. Enjoyed a lot and made a lot of friends along the way!"
        />
        <Article
          imgUrl={male}
          name="Aditya"
          text="Love it! I couldn't meet my friends for vacations but playing this game with them made me closer to them"
        />
        <Article
          imgUrl={hum1}
          name="Shreeji"
          text="I cannot stop watching this show!! Absolutely addicting!!"
        />
        <Article
          imgUrl={male}
          name="Tejasv"
          text="Was a god past time during lockdown. I could meet new people even during Covid 19"
        />
      </div>
    </div>
  </div>
);

export default Blog;
