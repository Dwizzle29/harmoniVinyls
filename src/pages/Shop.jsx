import React, { useState } from "react";
import background from "../assets/backgroundSmall.png";
import images from "../components/data/images.js";
import ShopVinylCard from "../components/shopVinylCard.jsx";
import FilterComp from "../components/filterComp.jsx";

export default function Shop() {
  const [filteredVinyl, setFilteredVinyl] = useState(images); // Default to all albums

  // Function to handle the sorting filter
  const handleFilterChange = (sortedAlbums) => {
    setFilteredVinyl(sortedAlbums); // Update state with sorted albums
  };

  return (
    <div>
      <div className="shop-container">
        <div className="shop-banner">
          <img src={background} alt="Shop Banner" className="shop-img"></img>
        </div>
        <div className="filtering-functions">
          {/* Pass the sorting handler to FilterComp */}
          <FilterComp onFilterChange={handleFilterChange} />
        </div>
        <div className="shop-cards-grid">
          {/* Map the filtered and sorted vinyls */}
          {filteredVinyl
            .reduce(
              (acc, _, i) =>
                i % 3 === 0 ? acc.concat([filteredVinyl.slice(i, i + 3)]) : acc,
              []
            )
            .map((vinylGroup, index) => (
              <div key={index} className="shop-vinyl-row">
                {vinylGroup.map((image) => (
                  <ShopVinylCard key={image.name} image={image} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
