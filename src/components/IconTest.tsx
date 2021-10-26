import React from "react";
import { Col, Container } from "react-bootstrap";

import { connect } from "react-redux";
import DisplayIcon from "./DisplayIcon";
class IconTest extends React.Component<any, any> {
  render() {
    let icons: string[] = [];
    for (const icon in this.props.icons) {
      icons.push(icon);
    }

    return (
      <Container>
        {icons.map((icon) => (
          <Col xs={12}>
            <DisplayIcon width={"50px"} height={"50px"} resource={icon} />
          </Col>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    icons: state.icons,
  };
};

export default connect(mapStateToProps)(IconTest);
