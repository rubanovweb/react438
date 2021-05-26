import React from "react";
import "../css/Exchange.css";

import Cards from "./Cards";

function Exchange() {
  return (
    <section className="Exchange" id="exchange">
      <div className="container">
        <h2 className="section-title">Биржи</h2>
        <Cards />
      </div>
    </section>
  );
}

export default Exchange;
