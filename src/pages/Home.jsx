import React from "react";
import HomeItemCard from "../components/homeItemCard.jsx";
import images from "../components/data/images.js";
import background from "../assets/backgorund2.png";
import logo from "../assets/logo.png";
import Carousel from "../components/homeCarosel.jsx";
import willowFront from "../assets/willowFront.png";
import SabrinaFront from "../assets/Sabrina2Front.png";
import MidnightConfettiFront from "../assets/MidnightConfettiFront.png";
import NeoDaydreemsFront from "../assets/NeoDaydreemsFront.png";
export default function Home() {
  // Filter the images to get only featured items
  const featuredVinyl = images.filter((image) => image.isFeatured);
  const imageArray = [
    willowFront,
    SabrinaFront,
    MidnightConfettiFront,
    NeoDaydreemsFront,
    willowFront,
    SabrinaFront,
    MidnightConfettiFront,
    NeoDaydreemsFront,
    // Add more image paths as needed
  ];

  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="welcome-message">
          <p className="welcome">welcome! </p>
          <p> we're so happy you're here</p>
        </div>

        <img src={background} alt="Home Banner" className="home-img"></img>
      </div>
      <div className="home-carousel-container">
        <h1>new releases!</h1>
        <div className="home-carosel">
          <Carousel images={imageArray} />
        </div>
      </div>

      <div className="home-logo-container">
        <div className="home-logo">
          <img src={logo} alt="harmoni vinyls" />
        </div>
        <div className="home-introduction">
          <p>
            we are <span>harmoni vinyls</span>, a place where you can browse,
            purchase and listen to a quick snippet of your favourite, or to be
            favourite albums!
          </p>
        </div>
      </div>
      <div className="card-container">
        {featuredVinyl
          .reduce(
            (acc, _, i) =>
              i % 5 === 0 ? acc.concat([featuredVinyl.slice(i, i + 5)]) : acc,
            []
          )
          .map((vinylGroup, index) => (
            <div key={index} className="vinyl-row">
              {/* Dynamic title for each row */}
              <div className="card-title">
                <p className="card-text">
                  {index === 0
                    ? "popular now!"
                    : index === 1
                    ? "harmoni favorites!"
                    : `More Vinyls Row ${index + 1}`}
                </p>
              </div>
              {/* Map over the group of 5 vinyl items */}
              {vinylGroup.map((image) => (
                <HomeItemCard key={image.id} image={image} />
              ))}
            </div>
          ))}
        <div className="vinyl-row">
          <div className="card-title">
            <p className="card-text">
              rnb <p className="card-music">music</p>
            </p>
          </div>
          <div className="card-title">
            <p className="card-text">
              pop <p className="card-music">music</p>
            </p>
          </div>
          <div className="card-title">
            <p className="card-text">
              indie <p className="card-music">music</p>
            </p>
          </div>
          <div className="card-title">
            <p className="card-text">
              clearance <p className="card-music">vinyls</p>
            </p>
          </div>
          <div className="card-title">
            <p className="card-text">
              new <p className="card-music">music</p>
            </p>
          </div>
          <div className="card-title">
            <p className="card-text">
              past hits <p className="card-music">music</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
