import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo192.png";
function Navbar() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  //handles menu drop down
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="NavbarItems">
      <div className="nav-container">
        <div
          className="menu-trigger"
          ref={menuRef}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="nav-icons">
            <span
              className={
                open ? "material-symbols--close " : "material-symbols--menu"
              }
            ></span>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul className="navDropDown">
                <DropdownNavItem link={"/shop"} navText={"Vinyls"} />
                <DropdownNavItem link={"/about"} navText={"About"} />
                <DropdownNavItem link={"/login"} navText={"Login"} />
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="harmonivinylslogo" />
          <NavLink to="/" className="navbar-title">
            harmoni vinyls
          </NavLink>
        </div>
        <div className="nav-icons">
          <span className="mdi--heart-outline"></span>
          <span className="mdi--cart-outline"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function DropdownNavItem(props) {
  return (
    <li className="dropdownItem">
      <NavLink to={props.link}>{props.navText}</NavLink>
    </li>
  );
}
