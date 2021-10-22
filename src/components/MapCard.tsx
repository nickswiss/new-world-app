import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";

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
        Route
      </Card.Title>
      <Col
        className={"align-items-md-center justify-content-md-center"}
        style={{ height: "90%", textAlign: "center" }}
        md={12}
      >
        <img
          className={"card-1"}
          onClick={handleShow}
          alt={props.alt}
          style={{
            verticalAlign: "middle",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "auto",
          }}
          src={props.src}
        />
        <Modal
          show={show}
          fullScreen={true}
          onHide={handleClose}
          dialogClassName="custom-modal"
          bsClass="my-modal"
        >
          <Modal.Body>
            <img onClick={handleShow} alt={props.alt} src={props.src} />
          </Modal.Body>
        </Modal>
      </Col>
    </Card>
  );
};

export default MapCard;
