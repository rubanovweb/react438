import React, { Component } from "react";
import "../css/Accordion.css";

import dataAccordion from "./dataAccordion.json";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {
  constructor() {
    super();
    this.id = "accordion";
  }

  render() {
    let accordionItems = dataAccordion["questions"].map((elem) => (
      <AccordionItem item={elem} key={elem.headerId} />
    ));

    return (
      <div className="accordion" id={this.id}>
        {accordionItems}
      </div>
    );
  }
}

export default Accordion;
