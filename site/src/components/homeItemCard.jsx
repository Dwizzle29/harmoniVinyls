// Card.js
import React from "react";
import "./Card.css"; // Import your CSS for styling
import { NavLink } from "react-router-dom";

const HomeItemCard = ({ image }) => {
  return (
    <div className="card">
      <div className="card-images">
        <a href={`/images/${image.id}`}>
          <img
            src={image.image}
            alt={`image-${image.id}`}
            className="card-image"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeItemCard;
