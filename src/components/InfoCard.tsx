import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ResourceTable } from "./ResourceTable";

const PanelSection = ({
  heading,
  content,
  children,
}: {
  heading?: string;
  content: string;
  children: any;
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
          {heading ? (
            <h6 style={{ fontWeight: "bold" }}>{heading}</h6>
          ) : (
            <div></div>
          )}
          {children}
        </Col>
      </Row>
    </Card>
  );
};

const InfoCard = (props) => {
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
      <Card.Title style={{ textAlign: "center" }}>
        Additional Information
      </Card.Title>
      <Row>
        <Col xs={12} md={6}>
          {" "}
          <Row>
            <Col xs={6}>
              <PanelSection heading={"Run Time"} content={props.run_time}>
                <p>{props.run_time}</p>
              </PanelSection>
            </Col>
            <Col xs={6}>
              <PanelSection heading={"Level"} content={props.level_requirement}>
                <p>{props.level_requirement}</p>
              </PanelSection>
            </Col>
          </Row>
          <Row style={{ paddingTop: "1vh" }}>
            <Col xs={12}>
              <PanelSection heading={"Location"} content={props.location}>
                <p>{props.location}</p>
              </PanelSection>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={12} style={{ height: "50%" }}>
          <Row>
            <Col xs={12}>
              <PanelSection content={props.location}>
                <Row>
                  <Col>
                    <ResourceTable
                      resources={props.resources}
                      icons={props.icons}
                    />
                  </Col>
                </Row>
              </PanelSection>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    resources: state.activeRoute.resources,
    run_time: state.activeRoute.run_time,
    level_requirement: state.activeRoute.level_requirement,
    location: state.activeRoute.location,
    icons: state.icons,
  };
}

export default connect(mapStateToProps)(InfoCard);
