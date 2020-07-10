import React from "react";

export const CardList = (props) => {
  console.log(props);
  return (
    <div
      style={
        ({ fontFamily: "monospace" },
        { fontWeight: "lighter" },
        { color: "#444444" })
      }
    >
      {props.children}
    </div>
  );
};
