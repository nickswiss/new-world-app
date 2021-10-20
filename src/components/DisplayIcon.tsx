import React from "react";
import { Col, OverlayTrigger, Popover, Row } from "react-bootstrap";

class DisplayIcon extends React.Component<{ resource: string }, any> {
  constructor(props: { resource: string }) {
    super(props);
    this.state = { imageLoaded: false };
  }

  render() {
    return (
      <Row>
        <Col>
          <OverlayTrigger
            trigger="hover"
            key={"right"}
            placement={"right"}
            overlay={
              <Popover id={`popover-positioned-right`}>
                <img
                  alt={""}
                  style={{
                    borderStyle: "none",
                    maxHeight: "20vh",
                  }}
                  src={`${this.props.resource}/detail.png`}
                />
              </Popover>
            }
          >
            <img
              alt={""}
              style={{ width: "60px", height: "48px" }}
              src={`${this.props.resource}/thumb.png`}
            />
          </OverlayTrigger>
        </Col>
      </Row>
    );
  }
}

export default DisplayIcon;
