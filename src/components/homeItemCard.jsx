// Card.js
import React from "react";
import "./Card.css"; // Import your CSS for styling

const HomeItemCard = ({ image }) => {
  return (
    <div className="card">
      <div className="card-images">
        <a href={`/product/${image.name}`}>
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
