import { NavLink } from "react-router-dom";
import "../styles/construction.css";
export default function PageInConstruction() {
  return (
    <div className="container">
      <h1>Site Under Construction Page</h1>
      <div className="information">
        <h2 className="construction-title">Site under construction</h2>
        <p>
          Hi thanks for visiting harmoni vinyls we are still in the process of
          completing this wishlist page.
        </p>
        <p>Click the links below to view pages which are designed: </p>
        <ul>
          <li>
            <NavLink to={"/"}>Home Page</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Product Page</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart and Checkout</NavLink>
          </li>
          <li>
            <NavLink to={"/shop/sf&ej"}>Specific Product Page</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div></div>
      </div>

      <NavLink to={"/"}>Return Home </NavLink>
    </div>
  );
}
