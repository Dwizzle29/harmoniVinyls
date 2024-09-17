// Card.js
import React from "react";
import "./Card.css"; // Import your CSS for styling
import { NavLink } from "react-router-dom";

const HomeItemCard = ({ images }) => {
  return (
    <div className="card">
      <div className="card-images">
        {images.map((image) => (
          <NavLink key={image.id} to={image.link}>
            <img
              src={image.url}
              alt={`image-${image.id}`}
              className="card-image"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeItemCard;
