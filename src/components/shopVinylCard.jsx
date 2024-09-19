// Card.js
import React from "react";
import "../styles/shop.css"; // Import your CSS for styling

const ShopVinylCard = ({ image }) => {
  return (
    <div className="card-vinyl">
      <div className="card-vinyls-images">
        <a href={`/images/${image.id}`}>
          <img
            src={image.image}
            alt={`image-${image.id}`}
            className="card-vinyl-image"
          />
          <p>{image.name}</p>
          <p>{image.price}</p>
        </a>
        <div className="shop-card-icons">
          <span className="mdi--heart-outline"></span>
          <span className="mdi--cart-outline"></span>
        </div>
      </div>
    </div>
  );
};

export default ShopVinylCard;
