import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        Exp_<span>Tracker</span>
      </div>
      <div className="btn-container">
        <div className="btn">Sign in</div>
        <div className="btn">Sign up</div>
      </div>
    </div>
  );
};

export default Navbar;
