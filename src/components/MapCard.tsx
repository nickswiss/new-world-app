import React from "react";
import { Card, Col, Row } from "react-bootstrap";

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
  return (
    <Card
      className={"card-1"}
      style={{
        height: "50vh",
        backgroundColor: "var(--dark)",
        borderStyle: "none",
        padding: "1vh",
        borderRadius: 2,
        color: "white",
        fontFamily: "Roboto Mono",
        textAlign: "center",
      }}
    >
      {/*<Card.Title*/}
      {/*  style={{*/}
      {/*    padding: "1vh",*/}
      {/*    backgroundColor: "var(--primary)",*/}
      {/*    height: "10%",*/}
      {/*  }}*/}
      {/*  className={"card-1"}*/}
      {/*>*/}
      {/*  Route (Zoom and Drag)*/}
      {/*</Card.Title>*/}
      <Row style={{ height: "90%" }}>
        <Col
          className={"align-items-md-center justify-content-md-center"}
          style={{ height: "100%", textAlign: "center" }}
          md={12}
        >
          <Map src={props.src} alt={props.alt} />
        </Col>
      </Row>

      <Row style={{ textAlign: "center", height: "10%" }}>
        <Col xs={4} style={{ margin: "auto" }}>
          <p style={{ margin: 0 }}>Made with</p>
          <a href={"https://mapgenie.io/"}>
            <img
              width={"160px"}
              height={"22px"}
              alt={"mapgenie"}
              src={"https://media.newworlddocs.com/media/mapgenie/mapgenie.png"}
            />
          </a>
        </Col>
      </Row>
    </Card>
  );
};

export default MapCard;
