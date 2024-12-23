import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const VideoCard = (props) => {
  let suffix = props.activeTimestamp
    ? `&start=${props.activeTimestamp.timestamp}`
    : "";

  let paginatedTimes = (
    <Row>
      <Col xs={12}>
        {props.video.timestamps.map((timestamp, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                props.loadActiveTimestamp(timestamp);
              }}
              variant="secondary"
              style={{ backgroundColor: "var(--primary)" }}
              active
            >
              {timestamp.number}
            </Button>
          );
        })}
      </Col>
    </Row>
  );
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
      <iframe
        className={"card-1"}
        style={{
          width: "100%",
          height: "90%",
        }}
        src={`${props.video.url}?autoplay=1${suffix}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Row style={{ height: "10%", overflowY: "scroll" }}>
        <Col xs={12}>{paginatedTimes}</Col>
      </Row>
    </Card>
  );
};

export default VideoCard;
