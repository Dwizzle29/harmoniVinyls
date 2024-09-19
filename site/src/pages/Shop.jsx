import background from "../assets/backgroundSmall.png";
import images from "../components/data/images.js";
import ShopVinylCard from "../components/shopVinylCard";

export default function Shop() {
  const featuredVinyl = images.filter((image) => image.isFeatured);
  return (
    <div>
      <div className="shop-container">
        <div className="shop-banner">
          <img src={background} alt="Shop Banner" className="shop-img"></img>
        </div>
        <div></div>
        <div className="filtering-functions"></div>
        <div className="shop-cards-grid">
          {featuredVinyl
            .reduce(
              (acc, _, i) =>
                i % 3 === 0 ? acc.concat([featuredVinyl.slice(i, i + 3)]) : acc,
              []
            )
            .map((vinylGroup, index) => (
              <div key={index} className="shop-vinyl-row">
                {/* Map over the group of 5 vinyl items */}
                {vinylGroup.map((image) => (
                  <ShopVinylCard key={image.id} image={image} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
