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
            <a href={`/shop/${image.name}`}>
              <img
                src={image.image}
                alt={`image-${image.id}`}
                className="card-vinyl-image"
              />
              <p>
                {image.title} - ("{image.release}")
              </p>
              <p>{image.price}</p>
            </a>
          ) : (
            <a href={`/shop/${image.name}`}>
              <img
                src={image.back}
                alt={`image-${image.id}`}
                className="card-vinyl-image"
              />
              <p>
                {image.title} - {image.release}
              </p>
              <p>{image.price}</p>
            </a>
          )}
        </div>
        <div className="shop-card-icons">
          <div onClick={() => setIconPlus(!plusIcon)}>
            {plusIcon ? (
              <span className="ic--baseline-plus"></span>
            ) : (
              <span className="ic--baseline-minus"></span>
            )}
          </div>
          <div onClick={() => setIconHeart(!heartIcon)}>
            {heartIcon ? (
              <span className="mdi--heart-outline"></span>
            ) : (
              <span className="mdi--heart"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVinylCard;
