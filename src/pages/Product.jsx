import React from "react";
import images from "../components/data/images.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const { imageId } = useParams();
  const [heartIcon, setIconHeart] = useState(true);
  const [plusIcon, setIconPlus] = useState(true);
  // Find the specific image that matches the passed imageId
  const selectedImage = images.find((image) => image.name === String(imageId));

  if (!selectedImage) {
    return <div>Image not found.</div>; // Handle case when image is not found
  }

  return (
    <div>
      <div className="vinyl-item-page">
        <div className="vinyl-item-card">
          <img
            src={selectedImage.image}
            alt={selectedImage.name}
            className="item-images"
          />

          <div className="vinyl-text">
            <h1>{selectedImage.name}</h1>
            <p>{selectedImage.description}</p>
            <div>
              <div className="product-card-icons">
                <div
                  onClick={() => setIconPlus(!plusIcon)}
                  className="cart-button-container"
                >
                  {plusIcon ? (
                    <div className="cart-button">
                      <span className="ic--baseline-plus"></span>
                      <p>Add to Cart</p>
                    </div>
                  ) : (
                    <div className="cart-button">
                      <span className="ic--baseline-minus"></span>
                      <p>Remove From Cart</p>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setIconHeart(!heartIcon)}
                  className="item-heart"
                >
                  {heartIcon ? (
                    <span className="mdi--heart-outline"></span>
                  ) : (
                    <span className="mdi--heart"></span>
                  )}
                </div>
              </div>
            </div>

            <div className="vinyl-text-tab">
              <p>description</p>
              <p>about</p>
              <p>type</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
