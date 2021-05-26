import React from "react";

import Card from "./Card";
import dataCards from "./dataExchanges.json";
import "../css/Cards.css";

function Cards() {
  let cardsItems = dataCards["exchanges"].map((elem) => (
    <Card item={elem} key={elem.id} />
  ));

  return <div className="row justify-content-between">{cardsItems}</div>;
}

export default Cards;
