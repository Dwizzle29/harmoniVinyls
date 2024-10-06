import React from "react";
import images from "../components/data/images.js";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import HomeItemCard from "../components/homeItemCard.jsx";
const vinylGroup = images.filter((image) => image.isReco);

const Product = () => {
  const { imageId } = useParams();

  const [heartIcon, setIconHeart] = useState(true);
  const [plusIcon, setIconPlus] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Find the specific image that matches the passed imageId
  const selectedImage = images.find((image) => image.name === String(imageId));
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = [
    selectedImage.image,
    selectedImage.back,
    selectedImage.disc,
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  if (!selectedImage) {
    return <div>Image not found.</div>; // Handle case when image is not found
  }

  return (
    <div>
      <div className="vinyl-item-page">
        <div className="vinyl-item-card">
          <div className="product-slide-prev">
            <span
              className="material-symbols-light--keyboard-arrow-left button-prc"
              onClick={goToPrevious}
            ></span>
          </div>
          <img
            src={imageList[currentIndex]}
            alt={selectedImage.title}
            className="item-images"
          />

          <div className="product-slide-next">
            <span
              className="material-symbols-light--keyboard-arrow-right  button-next"
              onClick={goToNext}
            ></span>
          </div>

          <div className="vinyl-text">
            <div className="vinyl-text-play">
              <h1>{selectedImage.artist}</h1>
              <div onClick={handlePlayPause}>
                {isPlaying ? (
                  <div className="pause-play">
                    <span className="heroicons-solid--pause"></span>
                  </div>
                ) : (
                  <div className="pause-play">
                    <span className="icon-park-solid--play"></span>
                  </div>
                )}
              </div>
            </div>
            <div className="artist-stock">
              <h2>{selectedImage.title}</h2>

              <p className="items-left">50 vinyls left in stock</p>
            </div>

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
              <p className="text-tab-highlight">sign up for release</p>
              <p className="text-tab-about">about</p>
              <p className="text-tab-type"> type</p>
            </div>
            <div>
              <form onSubmit={search} className="form-email">
                <label>
                  Enter your email here to be notified when this vinyl is
                  released!
                </label>
                <input name="query" className="product-form-input" required />
                <button type="submit" className="product-email-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="audio-card">
          <h3>Listen here!</h3>
          <p>
            A new feature that makes us different from the rest - have a sneak
            preview of the album right here!
          </p>
          {/* Audio player and Play/Pause button */}
          <div className="audio-image-card">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="audio-images"
            />
            <audio
              ref={audioRef}
              src="/audio/kwtgu.mp3"
              onError={() => console.error("Audio file failed to load.")}
              controls
            ></audio>
          </div>
        </div>

        <div className="card-recommended">
          <h3>Recommended</h3>
          <div className="card-container">
            {vinylGroup.map((image) => (
              <HomeItemCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// Form submission function
function search(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const query = formData.get("query");
  alert(`Your email has been added to the list: \n '${query}'`);
}
