import React from "react";
import "../css/Header.css";

import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-2 col-md-1">
            <Logo />
          </div>
          <nav className="col-10 col-md-11">
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
