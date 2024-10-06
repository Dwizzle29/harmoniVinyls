import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/backgroundSmall.png";
import albums from "../components/data/images.js";
import ShopVinylCard from "../components/shopVinylCard.jsx";
import FilterComp from "../components/filterComp.jsx";
import SortComp from "../components/sortComp.jsx";

export default function Shop() {
  const [filteredAlbums, setFilteredAlbums] = useState(albums);

  return (
    <div>
      <div className="shop-container">
        <div className="shop-banner">
          <img src={background} alt="Shop Banner" className="shop-img"></img>
        </div>
        <div className="filtering-functions">
          {/* Pass the sorting handler to FilterComp */}
          <FilterComp />
          <SortComp onSortChange={setFilteredAlbums} />
        </div>
        <div className="shop-cards-grid">
          {/* Map the filtered and sorted vinyls */}
          {filteredAlbums
            .slice(8, 13)
            .reduce(
              (acc, _, i) =>
                i % 3 === 0
                  ? acc.concat([filteredAlbums.slice(i, i + 3)])
                  : acc,
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
        <div className="pagination">
          <p>arrow</p>
          <NavLink to="/shop" className="next-pagination">
            .. 2
          </NavLink>
          <p>arrow</p>
        </div>
      </div>
    </div>
  );
}
