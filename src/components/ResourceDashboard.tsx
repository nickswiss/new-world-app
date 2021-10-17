import React from "react";
import { ResourceQuantityItem } from "./Topic";
import iron_ore from "../images/media/icons/iron_ore.png";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { getMediaDomain } from "../api/config";

interface Icon {
  src: string;
  name: string;
}

const MEDIA_SERVER: string = getMediaDomain();
const ICON_DIRECTORY: string = `${MEDIA_SERVER}/media/icons`;

function getIcon(resource: string): Icon {
  switch (resource) {
    case "iron_ore":
      return {
        src: `${ICON_DIRECTORY}/iron_ore.png`,
        name: "Iron Ore",
      };
    case "coarse_leather":
      return {
        src: `${ICON_DIRECTORY}/coarse_leather.png`,
        name: "Coarse Leather",
      };
    case "lemon":
      return {
        src: `${ICON_DIRECTORY}/lemon.png`,
        name: "Lemon",
      };
    case "green_wood":
      return {
        src: `${ICON_DIRECTORY}/green_wood.png`,
        name: "Green Wood",
      };

    default:
      return {
        src: `${ICON_DIRECTORY}/iron_ore.png`,
        name: "???",
      };
  }
}

interface ResourceDashboardProps {
  resources: ResourceQuantityItem[];
}

const ResourceIcon = ({ resource }: { resource: string }) => {
  let icon: Icon = getIcon(resource);
  return (
    <Card>
      <Card.Img variant="top" src={icon.src} />
      <Card.Body>
        <Card.Title>{icon.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

const ResourceDashboard = (props: ResourceDashboardProps) => {
  let s: number;
  if (props.resources.length) {
    s = 12 / props.resources.length;
  } else {
    s = 12;
  }
  console.log(s);
  return (
    <Container style={{ paddingLeft: "0", paddingTop: "2vh" }}>
      <Card style={{ padding: "2vh" }}>
        <Card.Title>
          <h3>{"Abundant Resources"}</h3>
        </Card.Title>
        <Row className={"d-flex justify-content-center"}>
          {props.resources.map((resource) => (
            <Col xs={s}>
              <ResourceIcon resource={resource.resource} />
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
};

export default ResourceDashboard;
