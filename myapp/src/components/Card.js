import React from "react";

function Card(props) {
  return (
    <div className="Card col-12 col-md-6 col-xl-4">
      <img className="Card-image" src={"/img/" + props.item.img.src} alt="" />
      <a
        className="Card-title"
        href={props.item.title.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.item.title.text}
      </a>
      <p className="Card-text">{props.item.content}</p>
      <a
        className="btn Card-more"
        href={props.item.title.href}
        target="_blank"
        rel="noreferrer"
      >
        Подробнее
      </a>
    </div>
  );
}

export default Card;
