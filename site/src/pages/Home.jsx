import React from "react";
import HomeItemCard from "../components/homeItemCard";
import images from "../components/data/images.js";
import background from "../assets/backgorund2.png";

export default function Home() {
  // Filter the images to get only featured items
  const featuredVinyl = images.filter((image) => image.isFeatured);

  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="welcome-message">
          <p className="welcome">welcome! </p>
          <p> we're so happy you're here</p>
        </div>

        <img src={background} alt="Home Banner" className="home-img"></img>
      </div>
      <div className="card">
        {featuredVinyl.map((image) => (
          <HomeItemCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
