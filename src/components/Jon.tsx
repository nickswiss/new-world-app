import React from "react";
import tarkov_sweat from "../images/tarkov_sweat.png";
import { Container, Row } from "react-bootstrap";

function Jon() {
  return (
    <Container>
      <div>
        <h1>Hi Jon!</h1>
        <img src={tarkov_sweat} alt="TarkovSweat" />
      </div>
      <Row className="mx-0"></Row>
    </Container>
  );
}

export default Jon;
