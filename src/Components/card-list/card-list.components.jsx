import React from "react";
import { Card } from "../card/card.components";
import "../card-list/card-list.styles.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster}></Card>
      ))}
    </div>
  );
};
