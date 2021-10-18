import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const PanelSection = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <Card
      className={"card-1"}
      style={{ padding: "1vh", backgroundColor: "var(--primary)" }}
    >
      <Row
        style={{ textAlign: "center" }}
        className={"justify-content-md-center align-items-md-center"}
      >
        <Col xs={12}>
          <h6 style={{ fontWeight: "bold" }}>{heading}</h6>
          <p>{content}</p>
        </Col>
      </Row>
    </Card>
  );
};

const InfoCard = () => {
  return (
    <Card
      className={"light-shadow card-1"}
      style={{
        backgroundColor: "var(--dark)",
        color: "white",
        borderRadius: 2,
        padding: "1vh",
        fontFamily: "Roboto Mono",
      }}
    >
      <Card.Title>Additional Information</Card.Title>
      <Row>
        <Col xs={6}>
          <PanelSection heading={"Run Time"} content={"10 min."} />
        </Col>
        <Col xs={6}>
          <PanelSection heading={"Level"} content={"50+"} />
        </Col>
      </Row>
      <Row style={{ paddingTop: "1vh" }}>
        <Col xs={12}>
          <PanelSection heading={"Location"} content={"Last Stand"} />
        </Col>
      </Row>
    </Card>
  );
};

export default InfoCard;
