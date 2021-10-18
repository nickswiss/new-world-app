import React from "react";
import { ResourceQuantityItem } from "./Topic";
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
  src_dir: string;
  name: string;
}

export const MEDIA_SERVER: string = getMediaDomain();
export const ICON_DIRECTORY: string = `${MEDIA_SERVER}/media/icons`;

export function getIcon(resource: string): Icon {
  switch (resource) {
    case "life_mote":
      return {
        src_dir: `${ICON_DIRECTORY}/life-mote`,
        name: "Life Mote",
      };
    case "life_moth":
      return {
        src_dir: `${ICON_DIRECTORY}/life-moth`,
        name: "Life Moth",
      };

    default:
      return {
        src_dir: `${ICON_DIRECTORY}/life-mote`,
        name: "Life Mote",
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
            height: "80px",
            backgroundImage: `url(${icon.src_dir}/thumb.png`,
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
      className={"light-shadow card-1"}
      style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: 2,
        padding: "1vh",
        fontFamily: "Roboto",
        height: "15vh",
      }}
    >
      <Card.Title>Resources</Card.Title>
      <Row>
        <Col xs={4}>
          <Item resource={"life_mote"} />
        </Col>{" "}
        <Col xs={4}>
          <Item resource={"life_moth"} />
        </Col>{" "}
      </Row>
    </Card>
  );
};

export default ResourceCard;
