import React from "react";
import useReviews from "../../hooks/useReviews";
import macbook from "../../Assets/Images/macbook.avif";
import Review from "../Review/Review";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();
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
          <img src={macbook} alt="" />
        </div>
      </div>
      <div>
        <h1 className="main">Customer Reviews</h1>
        <div className="reviews">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="main">
          <Link to="/reviews">
            <button className="button">See All Reviews</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;