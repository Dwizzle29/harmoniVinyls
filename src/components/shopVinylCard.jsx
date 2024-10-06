import React, { useState } from "react";

import "../styles/shop.css"; // Import your CSS for styling

const ShopVinylCard = ({ image }) => {
  const [hidden, setHidden] = useState(true);
  const [inCart, setInCart] = useState(image.cart); // Initialize with the album's cart status
  const [heartIcon, setHeartIcon] = useState(true);

  const handleCartToggle = (id) => {
    // Toggle the inCart state (add to cart if not in, remove if already in)
    setInCart(!inCart);

    // Find the album in the albums array and update its cart value

    // Optionally, if you want to save this change globally, you'd pass this updatedAlbums to a higher-level component or state management.
  };

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
                <span>{image.artist} - </span>
                <br />
                {image.title} ({image.release})
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
                <span>{image.artist} - </span>
                <br />
                {image.title} ({image.release})
              </p>
              <p>{image.price}</p>
            </a>
          )}
        </div>

        <div className="shop-card-icons">
          {/* Plus/Minus icon to add/remove from cart */}
          <div onClick={() => handleCartToggle(image.id)}>
            {inCart ? (
              <span className="ic--baseline-minus"></span>
            ) : (
              <span className="ic--baseline-plus"></span>
            )}
          </div>

          {/* Heart icon to toggle liked state */}
          <div onClick={() => setHeartIcon(!heartIcon)}>
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
