import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.robots.map((robot) => (
        // <h1 key={robot.id}>{robot.name}</h1>
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};
