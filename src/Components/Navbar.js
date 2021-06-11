import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Images/Netflix Logo.png";
import avatar from "../Images/avatar.png";
import { useHistory } from "react-router";
function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__content">
        <img onClick={() => history.push('/')} className="navbar__logo" src={logo} alt="netflix logo" />

        <img onClick={() => history.push('/profile')} className="navbar__avatar" src={avatar} alt="avatar logo" />
      </div>
    </div>
  );
}

export default Navbar;
