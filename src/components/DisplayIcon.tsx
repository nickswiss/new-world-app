import React from "react";
import { Col, OverlayTrigger, Popover, Row } from "react-bootstrap";

class DisplayIcon extends React.Component<{ iconConfig: any }, any> {
  constructor(props: { iconConfig: any }) {
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
                    display: this.state.imageLoaded ? "inline" : "none",
                    maxHeight: "20vh",
                    background: "none",
                    borderStyle: "none",
                  }}
                  src={this.props.iconConfig.detail_url}
                  onLoad={() => {
                    this.setState({ imageLoaded: true });
                  }}
                />
              </Popover>
            }
          >
            <img
              alt={""}
              style={{ width: "60px", height: "48px" }}
              src={this.props.iconConfig.thumb_url}
            />
          </OverlayTrigger>
        </Col>
      </Row>
    );
  }
}

export default DisplayIcon;
