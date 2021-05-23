import React from "react";
import "../css/Main.css";

import Intro from "./Intro";
import Catalog from "./Catalog";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Contacts from "./Contacts";

function Main() {
  return (
    <main>
      <Intro />
      <Catalog />
      <Gallery />
      <Blog />
      <Contacts />
    </main>
  );
}

export default Main;
