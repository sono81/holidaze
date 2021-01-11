import React from "react";
import Logo from "../../images/layout/logo_text_100.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Holidaze logo" />
      <h1>Header goes here</h1>
    </div>
  );
}

export default Header;
