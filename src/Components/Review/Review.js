import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, detail, rating } = review;
  return (
    <div className="reviews">
      <div className="user">
        <div className="user-image">
          <img src={img} alt=""></img>
        </div>
        <div className="user-details">
          <p className="name">{name}</p>
          <p className="detail">{detail}</p>
          <p className="rating">Ratings: {rating}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Review;