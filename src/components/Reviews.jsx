import React from "react";

const Reviews = ({ photo, name, position, comment }) => {
  return (
    <article className="card">
      <div className="profile">
        <div className="photo">
          <img src={photo} alt="photo" />
        </div>
        <div className="information">
          <h4 className="name">{name}</h4>
          <p className="position">{position}</p>
        </div>
      </div>
      <blockquote className="comments">
        <p className="comment">{comment}</p>
      </blockquote>
    </article>
  );
};

export default Reviews;
