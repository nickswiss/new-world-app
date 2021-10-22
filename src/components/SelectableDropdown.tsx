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
              width: "250px",
            }}
          >
            <Row
              onClick={(key) => {
                props.onItemSelect(item.id);
              }}
            >
              <Col xs={4}>
                {!!props.icons && (
                  <DisplayIcon iconConfig={props.icons[item.id]} />
                )}
              </Col>
              <Col style={{ color: "black" }} xs={8}>
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
