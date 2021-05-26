import React from "react";
import "../css/Faq.css";

import Accordion from "./Accordion";

function Blog() {
  return (
    <section className="Faq" id="faq">
      <div className="container">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <div className="row">
          <Accordion />
        </div>
      </div>
    </section>
  );
}

export default Blog;
