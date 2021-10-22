import React from "react";
import { Card } from "react-bootstrap";

const MapCard = (props) => {
  return (
    <Card
      className={"card-1"}
      style={{
        backgroundColor: "var(--dark)",
        borderStyle: "none",
        padding: "1vh",
        borderRadius: 2,
        color: "white",
        fontFamily: "Roboto Mono",
        textAlign: "center",
      }}
    >
      <Card.Title
        className={"card-1"}
        style={{
          padding: "1vh",
          backgroundColor: "var(--primary)",
          fontFamily: "Roboto Mono",
        }}
      >
        Route
      </Card.Title>
      <img
        className={"card-1"}
        alt={props.alt}
        style={{
          width: "100%",
          height: "auto%",
        }}
        src={props.src}
      />
    </Card>
  );
};

export default MapCard;
