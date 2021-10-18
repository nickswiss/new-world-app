import React from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
  Table,
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

const PopOverDetail = ({ detail }: { detail: string }) => (
  <Popover id="pop-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

class Item extends React.Component<{ resource: string }, any> {
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
                  style={{
                    maxHeight: "20vh",
                  }}
                  src={`${this.props.resource}/detail.png`}
                />
              </Popover>
            }
          >
            <img
              style={{ width: "60px", height: "48px" }}
              src={`${this.props.resource}/thumb.png`}
            />
          </OverlayTrigger>
        </Col>
      </Row>
    );
  }
}

export const ResourceTable = () => {
  return (
    <Table className={"card-1"} variant={"dark"} striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Item
              resource={`https://media.newworlddocs.com/media/icons/life-mote`}
            />
          </td>
          <td>Life Mote</td>
          <td>300+</td>
        </tr>
        <tr>
          <td>
            <Item
              resource={`https://media.newworlddocs.com/media/icons/life-moth`}
            />
          </td>
          <td>Life Moth Eyes</td>
          <td>20+</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const ResourceCard = () => {
  return (
    <Card
      className={"light-shadow card-1"}
      style={{
        backgroundColor: "var(--primary)",
        color: "white",
        borderRadius: 2,
        padding: "1vh",
        fontFamily: "Roboto Mono",
      }}
    >
      <Card.Title>Resources</Card.Title>
      <Row>
        <Col xs={12} style={{ padding: "1vh" }}>
          <ResourceTable />
        </Col>
      </Row>
    </Card>
  );
};

export default ResourceCard;
