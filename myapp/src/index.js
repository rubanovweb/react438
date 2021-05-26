import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

const intro = document.getElementById("intro");
const exchange = document.getElementById("exchange");
const faq = document.getElementById("faq");
const gallery = document.getElementById("gallery");

const linkIntro = document.querySelector("[href='#intro']");
const linkExchange = document.querySelector("[href='#exchange']");
const linkFaq = document.querySelector("[href='#faq']");
const linkGallery = document.querySelector("[href='#gallery']");
const linkContacts = document.querySelector("[href='#contacts']");

const arrowTop = document.querySelector(".ArrowTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    arrowTop.classList.add("animate__zoomIn");
    arrowTop.classList.remove("hidden");
  } else {
    arrowTop.classList.remove("animate__zoomIn");
    arrowTop.classList.add("hidden");
  }
});

arrowTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

linkIntro.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

linkExchange.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, intro.offsetHeight);
});

linkFaq.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, intro.offsetHeight + exchange.offsetHeight);
});

linkGallery.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(
    0,
    intro.offsetHeight + exchange.offsetHeight + faq.offsetHeight
  );
});

linkContacts.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(
    0,
    intro.offsetHeight +
      exchange.offsetHeight +
      faq.offsetHeight +
      gallery.offsetHeight
  );
});
