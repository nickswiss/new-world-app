import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import ResourceCard from "./ResourceCard";
import InfoCard from "./InfoCard";
import VideoCard from "./VideoCard";
import MapCard from "./MapCard";

export class Topic extends React.Component<any, any> {
  render() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let video = this.props.activeRoute.videos[0];

    return (
      <Card style={{ borderRadius: 0, borderStyle: "none" }}>
        <div style={{ backgroundColor: "var(--dark)", height: "3px" }} />
        <Card.Title
          style={{
            backgroundColor: "var(--primary)",
            fontFamily: "Roboto Mono",
            color: "white",
            padding: "1vh",
            margin: 0,
            textAlign: "center",
          }}
        >
          {this.props.activeRoute.heading}
        </Card.Title>
        <Card.Body style={{ backgroundColor: "var(--light)" }}>
          <Row>
            <Col xs={12} md={6}>
              <ResourceCard />
            </Col>
            <Col xs={12} md={6}>
              <InfoCard />
            </Col>
          </Row>
          <Row style={{ paddingTop: "1vh", height: "45vh" }}>
            <Col md={6} style={{ height: "100%" }}>
              <MapCard
                alt={this.props.activeRoute.map_image.name}
                src={this.props.activeRoute.map_image.url}
              />{" "}
            </Col>
            <Col md={6} style={{ height: "100%" }}>
              <VideoCard
                video={video}
                activeTimestamp={this.props.activeTimestamp}
                loadActiveTimestamp={this.props.loadActiveTimestamp}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export interface ResourceQuantityItem {
  resource: string;
  quantity: number;
}
