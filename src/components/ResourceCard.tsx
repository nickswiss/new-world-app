import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ResourceTable } from "./ResourceTable";

export const ResourceCard = (props) => {
  return (
    <Card
      className={"light-shadow card-1"}
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
      <Row
        style={{
          backgroundColor: "var(--primary)",
          fontFamily: "Roboto Mono",
        }}
      >
        <Col xs={12}>
          <Card.Title>Resources</Card.Title>
        </Col>
      </Row>

      <Row>
        <Col xs={12} style={{ padding: "1vh" }}>
          <ResourceTable resources={props.resources} icons={props.icons} />
        </Col>
      </Row>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    resources: state.activeRoute.resources,
    icons: state.icons,
  };
}

export default connect(mapStateToProps)(ResourceCard);
