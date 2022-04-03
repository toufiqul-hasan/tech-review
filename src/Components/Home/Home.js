import React from "react";
import Image from "../../Assets/Images/macbook.avif";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="first-heading">Your Next MacBook</h1>
        <h1 className="second-heading">Your Best MacBook</h1>
        <p>
          MacBook is completely transformed by the power of Apple designed M1
          chip. <br /> Up to 3.5x faster CPU, 5x faster graphics, and 18 hours
          of battery life.
        </p>
        <button className="demo-btn">Live Demo</button>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Home;