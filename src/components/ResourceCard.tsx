import React from "react";
import { ResourceQuantityItem } from "./Topic";
import iron_ore from "../images/media/icons/iron_ore.png";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { getMediaDomain } from "../api/config";

export interface Icon {
  src_thumb: string;
  src_desc: string;
  name: string;
}

export const MEDIA_SERVER: string = getMediaDomain();
export const ICON_DIRECTORY: string = `${MEDIA_SERVER}/media/icons`;

export function getIcon(resource: string): Icon {
  switch (resource) {
    case "earth_mote":
      return {
        src_thumb: `${ICON_DIRECTORY}/Earth_mote_thumb.PNG`,
        src_desc: `${ICON_DIRECTORY}/Earth_mote_descrip.PNG`,
        name: "Earth Mote",
      };

    default:
      return {
        src_thumb: `${ICON_DIRECTORY}/Earth_mote_thumb.PNG`,
        src_desc: `${ICON_DIRECTORY}/Earth_mote_descrip.PNG`,
        name: "Earth Mote",
      };
  }
}

interface ResourceDashboardProps {
  resources: ResourceQuantityItem[];
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

class Item extends React.Component<{ resource: string }, any> {
  constructor(props: { resource: string }) {
    super(props);
    this.state = { imageLoaded: false };
  }

  render() {
    let collapsed: boolean = true;
    let icon: Icon = getIcon(this.props.resource);
    let cardDisplay: string = this.state.imageLoaded ? "inline" : "none";
    return (
      <Card
        className={"justify-content-md-center align-items-md-center"}
        style={{ padding: "10px", borderStyle: "none" }}
      >
        <img
          style={{
            width: "100px",
            height: "72px",
            backgroundImage: "url(" + icon.src_thumb + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onLoad={() => {
            console.log(this.state);
            this.setState({ imageLoaded: true });
          }}
        />

        <h6 style={{ fontSize: "0.8vw" }}>{icon.name}</h6>
      </Card>
    );
  }
}

export const ResourceCard = () => {
  let defaultStyle: any = {};
  return (
    <Card
      className={"light-shadow "}
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: 2,
        padding: "1vh",
        fontFamily: "Roboto",
      }}
    >
      <Card.Title>Resources</Card.Title>
      <Row>
        <Col xs={4}>
          <Item resource={"earth_mote"} />
        </Col>{" "}
        <Col xs={4}>
          <Item resource={"earth_mote"} />
        </Col>{" "}
        <Col xs={4}>
          <Item resource={"earth_mote"} />
        </Col>
      </Row>
    </Card>
  );
};

export default ResourceCard;
