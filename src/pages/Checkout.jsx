import { useState } from "react";
import background from "../assets/backgroundCheckout.png";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  const [selectedOption, setSelectedOption] = useState("different");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div className="shop-container">
      <div className="shop-banner">
        <img src={background} alt="Shop Banner" className="shop-img" />
      </div>

      <div className="billing-form-card">
        <h2>billing information</h2>
        <form className="form-card-box">
          <div className="form-card">
            <div className="form-bill-left">
              <div>
                <label className="form-label-bill">first name:</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label-bill">email:</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label-bill">country:</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
            <div className="form-bill-right">
              <div className="div-normal">
                <label className="form-label-bill">last name:</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="div-normal">
                <label className="form-label-bill">
                  phone number (optional):
                </label>
                <input type="text" className="form-input" />
              </div>
            </div>
          </div>

          <div className="sing-address">
            <div className="address-input">
              <label className="form-label-bill">address:</label>
              <input type="text" className="form-input-address" required />
              <input type="text" className="form-input-address" required />
            </div>
          </div>

          <div className="form-bottom">
            <div>
              <label className="form-label-bill">state/territory:</label>
              <input type="text" className="form-input" />
            </div>
            <div>
              <label className="form-label-bill">postcode:</label>
              <input type="text" className="form-input" />
            </div>
            <div>
              <label className="form-label-bill">suburb:</label>
              <input type="text" className="form-input" />
            </div>
          </div>
        </form>
      </div>

      <div className="billing-form-card">
        <h2>shipping information</h2>

        <form className="form-card-box">
          <div className="radio-shipping">
            <label className="container-checkmark">
              <input
                type="radio"
                id="same"
                name="shipping"
                value="same"
                className="radio-button-same"
                checked={selectedOption === "same"}
                onChange={handleOptionChange}
              />
              <span className="checkmark"></span>same as billing address
            </label>

            <label className="container-checkmark">
              <input
                type="radio"
                id="different"
                name="shipping"
                value="different"
                className="radio-button-different"
                checked={selectedOption === "different"}
                onChange={handleOptionChange}
              />
              <span className="checkmark"></span> different address
            </label>
          </div>
          {selectedOption === "same" && (
            <div className="radio-is-dame">
              <p>
                Information that has been entered in billing information will be
                used for your shipping address
              </p>
            </div>
          )}
          {/* Conditionally render different address fields if selected */}
          {selectedOption === "different" && (
            <div className="form-card">
              <div className="form-bill-left">
                <div>
                  <label className="form-label-bill">first name:</label>
                  <input type="text" className="form-input" required />
                </div>
                <div>
                  <label className="form-label-bill">email:</label>
                  <input type="text" className="form-input" required />
                </div>
                <div>
                  <label className="form-label-bill">country:</label>
                  <input type="text" className="form-input" required />
                </div>
              </div>
              <div className="form-bill-right">
                <div className="div-normal">
                  <label className="form-label-bill">last name:</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="div-normal">
                  <label className="form-label-bill">
                    phone number (optional):
                  </label>
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
          )}

          {selectedOption === "different" && (
            <div className="sing-address">
              <div className="address-input">
                <label className="form-label-bill">address:</label>
                <input type="text" className="form-input-address" required />
                <input type="text" className="form-input-address" required />
              </div>
            </div>
          )}

          {selectedOption === "different" && (
            <div className="form-bottom">
              <div>
                <label className="form-label-bill">state/territory:</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="form-label-bill">postcode:</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="form-label-bill">suburb:</label>
                <input type="text" className="form-input" />
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="payment-card">
        <h2>payment information</h2>
        <form>
          <div className="radio-shipping">
            <label className="container-checkmark">
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                className="radio-button-same"
                checked={selectedPayment === "card"}
                onChange={handlePaymentChange}
              />
              <span className="checkmark"></span>card
              <span className="cards-pay">
                <span className="logos--visa"></span>
              </span>
              <span className="cards-pay"></span>{" "}
              <span className="logos--mastercard"></span>
              <span className="cards-pay">
                <span className="fontisto--american-express"></span>
              </span>
            </label>

            <label className="container-checkmark">
              <input
                type="radio"
                id="paypal"
                name="payment"
                value="paypal"
                className="radio-button-different"
                checked={selectedPayment === "paypal"}
                onChange={handlePaymentChange}
              />
              <span className="checkmark"></span> different address
            </label>
          </div>
          {selectedPayment === "paypal" && (
            <div className="radio-is-dame">
              <p>unfortunately this option is not currently available</p>
            </div>
          )}
          {selectedPayment === "card" && (
            <div className="payment-box">
              <div>
                <label className="form-label-bill">card name*:</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label-bill">card number*:</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="payment-exp">
                <div>
                  <label className="form-label-bill">expiry*:</label>
                  <input type="text" className="form-input-dif" required />
                </div>
                <div>
                  <label className="form-label-bill">cvc/cvv*:</label>
                  <input type="text" className="form-input-dif" required />
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="checkout-summary-box">
        <div className="checkout-summary">
          <h2>summary</h2>
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

        <div className="checkout-info-box">
          <div className="checkout-summary-info">
            <h2>shipping information</h2>
            <NavLink to={"/confirmation"} className="confirm-box">
              <button className="checkout-button">
                <span className="material-symbols--lock"></span>
                place order
              </button>{" "}
            </NavLink>
            <span>
              by placing your order, you are agreeing to our{" "}
              <NavLink to={"/about"}>privacy policy</NavLink> and
              <NavLink to={"/about"}> terms & conditions</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
