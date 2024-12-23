import React from "react";
import tarkov_sweat from "../images/media/jon/tarkov_sweat.png";
import { Container, Row } from "react-bootstrap";

function Jon() {
  return (
    <Container>
      <Row>
        <img src={tarkov_sweat} alt="TarkovSweat" />
      </Row>
      <Row></Row>
      <Row style={{ height: "50vh" }}>
        <iframe
          style={{
            width: "100%",
            height: "auto",
          }}
          src="https://www.youtube.com/embed/8TlbYm-Enzc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Row>
      <Row></Row>
      <Row style={{ height: "50vh" }}>
        <iframe
          style={{
            width: "100%",
            height: "auto",
          }}
          src="https://www.youtube.com/embed/Wfcc9SL7-Gg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Row>

      <Row className="mx-0"></Row>
    </Container>
  );
}

export default Jon;
