import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const InfoCard = () => {
  let defaultStyle: any = {};
  return (
    <Card
      className={"light-shadow "}
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: 2,
        padding: "1vh",
        fontFamily: "Roboto",
      }}
    >
      <Card.Title>Additional Information</Card.Title>
      <Row>
        <Col xs={4}></Col>
      </Row>
    </Card>
  );
};

export default InfoCard;
