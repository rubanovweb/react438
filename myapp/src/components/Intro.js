import React from "react";
import "../css/Intro.css";

import Video from "./Video.js";

function Intro() {
  return (
    <section className="Intro" id="intro">
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 className="col-12 section-title">Технология</h1>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 offset-xl-6">
            <Video />
            <p className="intro-text">
              В этом видео на тему «Блокчейн и биткойн. Принципы работы»
              разберём, в чём заключаются проблемы платёжных систем, что
              способствовало появлению биткоина, какими свойствами он обладает,
              преимущества и недостатки, а также по каким принципам работает
              «блокчейн» сети Биткойн.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
