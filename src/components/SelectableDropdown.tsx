import { Col, NavDropdown, Row } from "react-bootstrap";
import DisplayIcon from "./DisplayIcon";
import React from "react";
import { connect } from "react-redux";

const SelectableDropdown = (props) => {
  return (
    <NavDropdown title="Select Another Route" id="basic-nav-dropdown">
      {props.items &&
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
              onClick={(key) => {
                props.onItemSelect(item.id);
              }}
            >
              <Col xs={2}>
                {!!props.icons && (
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
        ))}
    </NavDropdown>
  );
};

function mapStateToProps(state) {
  return {
    icons: { ...state.icons },
  };
}

export default connect(mapStateToProps)(SelectableDropdown);
