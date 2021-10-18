import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
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
//
// const popover = (
//   <Popover id="popover-basic">
//     <Popover.Header as="h3">Popover right</Popover.Header>
//     <Popover.Body>
//       And here's some <strong>amazing</strong> content. It's very engaging.
//       right?
//     </Popover.Body>
//   </Popover>
// );

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );

class Item extends React.Component<{ resource: string }, any> {
  constructor(props: { resource: string }) {
    super(props);
    this.state = { imageLoaded: false };
  }

  render() {
    let icon: Icon = getIcon(this.props.resource);
    let cardStyle: any = {
      padding: "10px",
      borderStyle: "none",
    };
    return (
      <Card
        className={"justify-content-md-center align-items-md-center"}
        style={cardStyle}
      >
        <img
          alt={""}
          style={{
            width: "60px",
            height: "48px",
            backgroundImage: `url(${icon.src_dir}/thumb.png`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <h6 style={{ fontSize: "14px" }}>{icon.name}</h6>
      </Card>
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
          <th>Req</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <img
              src={`https://media.newworlddocs.com/media/icons/life-mote/thumb.png`}
              style={{
                width: "60px",
                height: "48px",
              }}
            />
          </td>
          <td>Life Mote</td>
          <td>300+</td>
          <td>150 Harvesting</td>
        </tr>
        <tr>
          <td>
            {" "}
            <img
              src={`https://media.newworlddocs.com/media/icons/life-moth/thumb.png`}
              style={{
                width: "60px",
                height: "48px",
              }}
            />
          </td>
          <td>Life Moth</td>
          <td>300+</td>
          <td>150 Harvesting</td>
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
        {/*<Col xs={4}>*/}
        {/*  <Item resource={"life_mote"} />*/}
        {/*</Col>{" "}*/}
        {/*<Col xs={4}>*/}
        {/*  <Item resource={"life_moth"} />*/}
        {/*</Col>{" "}*/}
      </Row>
    </Card>
  );
};

export default ResourceCard;
