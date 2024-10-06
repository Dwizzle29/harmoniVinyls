/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/logo192.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  let menuRef = useRef();

  //handles menu drop down
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        if (!setMobileNavOpen) {
          setOpen(false);
        }
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
              {isTabletOrMobile && (
                <ul className="navDropDown">
                  <DropdownNavItem link={"/"} navText={"home"} />
                  <div className="dropdownContent">
                    <DropdownNavItem link={"/shop"} navText={"vinyls"} />
                    <div className="dropdownShop">
                      <ul>
                        <li>
                          <NavLink to="/pagenotfound">
                            <p className="dropDownItems"> new releases</p>
                          </NavLink>
                        </li>
                        <li>
                          <p className="dropDownItems">popular</p>
                        </li>
                        <li>
                          <p className="dropDownItems">clearance</p>
                        </li>
                        <li>
                          <p className="dropDownItems">accessories</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <DropdownNavItem link={"/about"} navText={"about"} />
                  <DropdownNavItem link={"/login"} navText={"login"} />
                </ul>
              )}
              {isDesktopOrLaptop && (
                <ul className="navDropDown">
                  <DropdownNavItem link={"/"} navText={"home"} />
                  <div className="dropdownContent">
                    <DropdownNavItem link={"/shop"} navText={"vinyls"} />
                    <div className="dropdownShop">
                      <ul>
                        <li>
                          <NavLink to="/pagenotfound">
                            <p className="dropDownItems"> new releases</p>
                          </NavLink>
                        </li>
                        <li>
                          <p className="dropDownItems">popular</p>
                        </li>
                        <li>
                          <p className="dropDownItems">clearance</p>
                        </li>
                        <li>
                          <p className="dropDownItems">accessories</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <DropdownNavItem link={"/about"} navText={"about"} />
                  <DropdownNavItem link={"/login"} navText={"login"} />
                </ul>
              )}
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
          <NavLink to="/wishlist">
            <span className="mdi--heart-outline"></span>
          </NavLink>
          <NavLink to="/cart">
            <span className="mdi--cart-outline"></span>
          </NavLink>
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
