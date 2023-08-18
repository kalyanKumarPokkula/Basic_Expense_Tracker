import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigator = useNavigate();
  return (
    <div className="nav">
      <div className="logo" onClick={() => navigator("/")}>
        Exp_<span>Tracker</span>
      </div>
      {!user && (
        <div className="btn-container">
          <div className="btn" onClick={() => navigator("/signin")}>
            Sign in
          </div>
          <div className="btn" onClick={() => navigator("/signup")}>
            Sign up
          </div>
        </div>
      )}
      {user && (
        <div className="btn-container">
          <div
            className="btn"
            onClick={() => {
              navigator("/expense");
            }}
          >
            Expenses
          </div>
          <div
            className="btn"
            onClick={() => {
              localStorage.setItem("token", null);
              setUser(null);
              navigator("/");
            }}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
