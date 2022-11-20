import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="140" heigth="40" src={"https://upload.wikimedia.org/wikipedia/commons/0/0d/Grammarly_%28Ukraine%29.svg"} alt="Grammarly Premium" />
      </div>
      <a href="https://www.grammarly.com/signin?allowUtmParams=true" className="login">
        Log in
      </a>
    </div>
  );
};

export default Header;
