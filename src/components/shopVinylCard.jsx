// Card.js
import React from "react";
import "../styles/shop.css"; // Import your CSS for styling
import { useState } from "react";
const ShopVinylCard = ({ image }) => {
  const [hidden, setHidden] = useState(true);
  const [heartIcon, setIconHeart] = useState(true);
  const [plusIcon, setIconPlus] = useState(true);
  return (
    <div className="card-vinyl">
      <div className="card-vinyls-images">
        <div
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          {hidden ? (
            <a href={`/product/${image.name}`}>
              <img
                src={image.image}
                alt={`image-${image.id}`}
                className="card-vinyl-image"
              />
              <p>{image.name}</p>
              <p>{image.price}</p>
            </a>
          ) : (
            <a href={`/product/${image.name}`}>
              <img
                src={image.back}
                alt={`image-${image.id}`}
                className="card-vinyl-image"
              />
              <p>{image.name}</p>
              <p>{image.price}</p>
            </a>
          )}
        </div>
        <div className="shop-card-icons">
          <div onClick={() => setIconPlus(!plusIcon)}>
            {plusIcon ? (
              <span class="ic--baseline-plus"></span>
            ) : (
              <span class="ic--baseline-minus"></span>
            )}
          </div>
          <div onClick={() => setIconHeart(!heartIcon)}>
            {heartIcon ? (
              <span className="mdi--heart-outline"></span>
            ) : (
              <span class="mdi--heart"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVinylCard;
