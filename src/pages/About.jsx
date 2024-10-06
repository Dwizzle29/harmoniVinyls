import "../styles/construction.css";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <div className="container">
      <h1>To Be - About Page</h1>
      <div className="information">
        <h2 className="construction-title">Site under construction</h2>
        <p>
          Hi thanks for visiting harmoni vinyls we are still in the process of
          completing this about page.
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
    </div>
  );
}
