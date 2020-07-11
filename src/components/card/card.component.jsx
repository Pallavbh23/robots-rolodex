import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={"https://robohash.org/" + props.robot.id} alt="roboss" />
      <h2>{props.robot.name}</h2>
      <p>{props.robot.email}</p>
    </div>
  );
};
