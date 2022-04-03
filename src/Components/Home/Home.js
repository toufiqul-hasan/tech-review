import React from "react";
import Image from "../../Assets/Images/macbook.avif";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div>
          <h1 className="first-heading">Your Next MacBook</h1>
          <h1 className="second-heading">Your Best MacBook</h1>
          <p>
            MacBook is completely transformed by the power of Apple designed M1
            chip. <br /> Up to 3.5x faster CPU, 5x faster graphics, and 18 hours
            of battery life.
          </p>
          <button className="button">Live Demo</button>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="reviews">
        <h1>Customer Reviews</h1>
        <Reviews></Reviews>
        <button className="button">See All Reviews</button>
      </div>
    </div>
  );
};

export default Home;
