import React from "react";
import "../css/Footer.css";

import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <p className="col-11">Copyright</p>
          <div className="col-1">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
