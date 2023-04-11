import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import Button from "../../Components/Button/Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);
  return (
    <IconContext.Provider value={{color:"#fff"}}>
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className="navbar-icon" />
          Lavish
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to={"/"} className="nav-links" onClick={closeMobileMenu}>
            <li>Home</li>
          </Link>
          <Link to={"/services"} className="nav-links" onClick={closeMobileMenu}>
            <li>Services</li>
          </Link>
          <Link to={"/products"} className="nav-links" onClick={closeMobileMenu}>
            <li>Products</li>
          </Link>
          <Link to={"/contact"} className="nav-links" onClick={closeMobileMenu}>
            <li>Contact</li>
          </Link>
          <li className="nav-btn" onClick={closeMobileMenu}>
            {button ? (
              <Link to={"sign-up"} className="btn-link" onClick={closeMobileMenu}>
                <Button buttonStyle={"btn--outline"}>Sign Up</Button>
              </Link>
            ) : (
              <Link to={"sign-up"} className="btn-link" onClick={closeMobileMenu}>
                <Button buttonStyle={"btn--outline"} buttonSize="btn--mobile">
                  Sign Up
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Navbar;
