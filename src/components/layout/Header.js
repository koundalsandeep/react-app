import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-text"><a className="logo" href="/">News App</a></h1>
      <div className="header-menu">
        <a href="/login" className="menu-item">
          Sign In
        </a>
        <a href="/register" className="menu-item">
          Register
        </a>
      </div>
    </div>
  );
};

export default Header;
