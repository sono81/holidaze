import React from "react";
import Logo from "../../images/layout/logo_text_100.png";
import Menu from "../functional/Menu";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Holidaze logo" />
      <Menu />
    </div>
  );
}

export default Header;
