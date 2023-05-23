import React from "react";
import icon_star from "../assets/images/icon-star.svg";

const Ratings = ({ message }) => {
  return (
    <div className="rating">
      <div className="star">
        <img src={icon_star} alt="icon-star" />
        <img src={icon_star} alt="icon-star" />
        <img src={icon_star} alt="icon-star" />
        <img src={icon_star} alt="icon-star" />
        <img src={icon_star} alt="icon-star" />
      </div>
      <h3 className="rate">{message}</h3>
    </div>
  );
};

export default Ratings;
