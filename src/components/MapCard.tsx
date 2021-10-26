import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";

import { MapInteractionCSS } from "react-map-interaction";

// This component uses CSS to scale your content.
// Just pass in content as children and it will take care of the rest.
const Map = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <MapInteractionCSS>
      <img
        alt={alt}
        src={src}
        style={{ objectFit: "cover", maxHeight: "50%", maxWidth: "100%" }}
      />
    </MapInteractionCSS>
  );
};

const MapCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card
      className={"card-1"}
      style={{
        height: "100%",
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
        Route (Zoom and Drag)
      </Card.Title>
      <Col
        className={"align-items-md-center justify-content-md-center"}
        style={{ height: "90%", textAlign: "center" }}
        md={12}
      >
        <Map src={props.src} alt={props.alt} />
      </Col>
    </Card>
  );
};

export default MapCard;
