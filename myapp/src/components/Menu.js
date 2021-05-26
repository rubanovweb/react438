import React from "react";

import ItemMenu from "./ItemMenu";
import dataMenu from "./dataMenu.json";

function Menu() {
  let menuItems = dataMenu["items"].map((elem) => (
    <ItemMenu item={elem} key={elem.id} />
  ));

  return <ul className="Menu">{menuItems}</ul>;
}

export default Menu;
