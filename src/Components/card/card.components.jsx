import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img
        src={` https://robohash.org/${props.monster.id}?set=set2&size=150x150`}
        alt=""
      />
      <h1 key={props.monster.id}>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
