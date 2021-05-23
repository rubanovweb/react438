import React from "react";
import "../css/Header.css";

import Logo from "./Logo";
// import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Logo />
          </div>
          <div className="col-10">{/* <Menu /> */}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
