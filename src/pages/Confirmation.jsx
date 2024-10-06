import background from "../assets/backgroundConfirm.png";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="shop-container">
      <div className="shop-banner">
        <img src={background} alt="Shop Banner" className="shop-img" />
      </div>
      <div className="confirm-form-card">
        <h2>woohoo! your order is now confirmed</h2>
        <div className="confirm-content">
          <p>
            thank you for ordering with us
            <br></br>
            we will start working on your order right way
          </p>
          <NavLink to={"/shop"}>click here to continue browsing</NavLink>
        </div>
      </div>
      <div className="confirm-order-card">
        <h2>order confirmation</h2>
        <div className="confirm-content">
          <div className="checkout-summary-items">
            <div>
              <p>sf & ej - Unspoken Vibes (2024)</p>
              <p>sf & ej - Unspoken Vibes (2024)</p>
              <br />
              <br />
              <br />
              <p>subtotal:</p>
            </div>
            <div>
              <p className="cart-price-summary">$tbd</p>
              <p className="cart-price-summary">$tbd</p>
              <br />
              <br />
              <p className="cart-price-summary">$200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
