import "./navbar.css";
import React from "react";
import navbar_logo from "../../images/ferrari-logo.png";

function Navbar() {
  const [isActive, setIsActive] = React.useState(false);

  function toggleClass() {
    setIsActive((prevState) => {
      return !prevState;
    });
  }
  function removeHamburger(){
        setIsActive(false);
  }

  return (
    <div className={`navbar ${isActive && "navbar-active"} `}>
      <img src={navbar_logo} alt="Ferrari" className="navbar__logo" />

      <div
        className={`navbar__hamburger_icon ${
          isActive && "navbar__hamburger_icon-active"
        } `}
        onClick={toggleClass}
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>

      <nav>
        <a href="/#section-info" onClick={removeHamburger}>
          Information
        </a>
        <a href="/#section-drivers" onClick={removeHamburger}>
          Drivers
        </a>
        <a href="/#section-races" onClick={removeHamburger}>
          Races 2022
        </a>
        <a href="/#section-form" onClick={removeHamburger}>
          Predict
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
