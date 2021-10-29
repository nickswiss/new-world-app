import { Col, NavDropdown, Row, Spinner } from "react-bootstrap";
import DisplayIcon from "./DisplayIcon";
import React from "react";

const SelectableDropdown = (props) => {
  return (
    <NavDropdown title="Select Another Route" id="basic-nav-dropdown">
      {props.isLoadingItems ? (
        <NavDropdown.Item
          style={{
            width: "400px",
            background: "none",
            textAlign: "center",
          }}
        >
          <Spinner animation={"grow"} />{" "}
        </NavDropdown.Item>
      ) : (
        props.items.map((item) => (
          <NavDropdown.Item
            key={item.id}
            style={{
              width: "400px",
              background: "none",
            }}
          >
            <Row
              id={"dropdown-row"}
              style={{ margin: "auto" }}
              onClick={(key) => {
                props.onItemSelect(item.id);
              }}
            >
              <Col xs={2} style={{ margin: "auto" }}>
                {props.isLoadingIcons ? (
                  <Spinner animation={"grow"} />
                ) : (
                  <DisplayIcon
                    width={"32px"}
                    height={"32px"}
                    clickable={false}
                    resource={item.resource_icon}
                  />
                )}
              </Col>
              <Col style={{ color: "white", padding: "1vh" }} xs={10}>
                {item.heading}
              </Col>
            </Row>
          </NavDropdown.Item>
        ))
      )}
    </NavDropdown>
  );
};

export default SelectableDropdown;
