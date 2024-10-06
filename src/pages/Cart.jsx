import { useState } from "react";
import background from "../assets/backgroundCart.png";
import albums from "../components/data/images.js";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    albums.filter((album) => album.cart === true) // Initialize cartItems with only albums in the cart
  );

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, album) => {
      acc[album.id] = 1; // Initialize each album's quantity to 0
      return acc;
    }, {})
  );

  const [likedAlbums, setLikedAlbums] = useState(
    cartItems.reduce((acc, album) => {
      acc[album.id] = false; // Initially, none of the albums are liked
      return acc;
    }, {})
  );

  const handleClick1 = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleClick2 = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };
  //Handle Discount form

  // Handle heart click to toggle liked state
  const handleHeartClick = (id) => {
    setLikedAlbums((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  // Handle trash click to confirm and remove the album from the cart
  const handleTrashClick = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );

    if (isConfirmed) {
      // Find the album in the albums array and set its cart value to false
      const updatedAlbums = albums.map((album) =>
        album.id === id ? { ...album, cart: false } : album
      );

      // Update the cartItems state with the filtered array
      setCartItems(updatedAlbums.filter((album) => album.cart === true));
    }
  };

  const parsePrice = (priceStr) => parseFloat(priceStr.replace("$", ""));

  const cartCard = cartItems.map((album) => {
    const totalPrice = (parsePrice(album.price) * quantities[album.id]).toFixed(
      2
    );

    return (
      <div className="cart-card" key={album.id}>
        <div className="cart-image-box">
          <a href={`/shop/${album.name}`}>
            <img
              src={album.image}
              alt={`image-${album.id}`}
              className="card-cart-image"
            />
          </a>
        </div>
        <div className="cart-text">
          <p>
            <span>
              {album.artist} - {album.title} ({album.release})
            </span>
          </p>
          <div className="cart-quantity">
            <p>
              qty:
              <span className="plus">
                <span
                  className="ic-baseline-plus"
                  onClick={() => handleClick1(album.id)}
                ></span>
              </span>
              {quantities[album.id]}
              <span
                className="ic-baseline-minus"
                onClick={() => handleClick2(album.id)}
              ></span>
            </p>
          </div>
        </div>
        <div className="cart-icon-box">
          <p className="cart-price">${totalPrice}</p>
          <div className="cart-icons">
            <span
              className="gravity-ui--trash-bin"
              onClick={() => handleTrashClick(album.id)} // Trash click handler with confirmation
            ></span>
            <div
              className="cart-heart-icon"
              onClick={() => handleHeartClick(album.id)}
            >
              {likedAlbums[album.id] ? (
                <span className="mdi--heart"></span>
              ) : (
                <span className="mdi--heart-outline"></span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="shop-container">
      <div className="shop-banner">
        <img src={background} alt="Shop Banner" className="shop-img" />
      </div>
      <div className="cart-container">
        <div className="cart-cards-grid">{cartCard}</div>
      </div>
      <div className="cart-summary-box">
        <div className="cart-summary">
          <h2>summary</h2>
          <div className="cart-summary-items">
            <div>
              <p>sf & ej - Unspoken Vibes (2024)</p>
              <p>sf & ej - Unspoken Vibes (2024)</p>
              <br></br>
              <br></br>
              <br></br>
              <p>subtotal:</p>
              <button className="cart-checkout-button">
                <NavLink to={"/checkout"}>Checkout</NavLink>
              </button>
            </div>
            <div>
              <p className="cart-price-summary">$tbd</p>
              <p className="cart-price-summary">$tbd</p>
              <br></br>
              <br></br>
              <p className="cart-price-summary">$200</p>
              <button className="cart-paypal-button">
                <span className="ic--baseline-paypal"></span>
                <div className="cart-background-color">
                  <span className="fontisto--paypal"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-info-box">
          <div className="cart-summary-info">
            <h2>add discount</h2>
            <form onSubmit={search}>
              <label>Enter discount or coupon code here:</label>
              <input name="query" className="form-input" />
              <button type="submit" className="cart-checkout-button">
                apply
              </button>
            </form>
          </div>
          <div className="cart-summary-info">
            <h2>shipping information</h2>
            <p>
              Secure packaging!
              <br />
              $4 for delivery!
              <br />
              <NavLink to={"/about"}>Click here to learn more</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function search(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const query = formData.get("query");
  alert(`Sorry '${query}' is nto a valid discount code`);
}
