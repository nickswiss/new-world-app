import React from "react";
import {
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
  Table,
} from "react-bootstrap";
import { getMediaDomain } from "../api/config";
import DisplayIcon from "./DisplayIcon";

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
            <DisplayIcon
              resource={`https://media.newworlddocs.com/media/icons/life-mote`}
            />
          </td>
          <td>Life Mote</td>
          <td>300+</td>
        </tr>
        <tr>
          <td>
            <DisplayIcon
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
        backgroundColor: "var(--dark)",
        borderStyle: "none",
        padding: "1vh",
        borderRadius: 2,
        color: "white",
        fontFamily: "Roboto Mono",
        textAlign: "center",
      }}
    >
      <Row
        style={{
          backgroundColor: "var(--primary)",
          fontFamily: "Roboto Mono",
        }}
      >
        <Col xs={12}>
          <Card.Title>Resources</Card.Title>
        </Col>
      </Row>

      <Row>
        <Col xs={12} style={{ padding: "1vh" }}>
          <ResourceTable />
        </Col>
      </Row>
    </Card>
  );
};

export default ResourceCard;
