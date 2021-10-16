import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import map from "../images/map.png";
import { RouteComponentProps } from "react-router";
import { get } from "../api/config";
import Topic from "./Topic";
import { withRouter } from "react-router-dom";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

function RoutingLink(params: any) {
  let active: Boolean = params.active;
  let style: any = { ...linkStyle };
  if (active) {
    style.fontWeight = "bold";
  }
  return (
    <ListGroup.Item>
      <Link to={params.to} style={style}>
        {params.heading}
      </Link>
    </ListGroup.Item>
  );
}

interface FarmingRouteListRecord {
  slug: string;
  heading: string;
}

class FarmingRoutes extends React.Component<RouteComponentProps, {}> {
  constructor(props: RouteComponentProps) {
    super(props);
  }

  componentDidMount() {
    get("farming-routes/?limit=10").then((resp) => {
      console.log(resp);
    });
  }

  render() {
    let routes: FarmingRouteListRecord[] = [
      {
        slug: "boats",
        heading: "Boats",
      },
      {
        slug: "hoes",
        heading: "Hoes",
      },
      {
        slug: "pb",
        heading: "Peanut Butter",
      },
      {
        slug: "jelly",
        heading: "Jelly",
      },
    ];

    let { slug }: { slug?: string } = this.props.match.params;

    return (
      <Container style={{ padding: 0, height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col className="flex-column" xs={3} style={{ height: "100%" }}>
            <ListGroup style={{ height: "100%" }}>
              <ListGroup.Item
                style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
              >
                <h5>Farming Routes</h5>
              </ListGroup.Item>
              {routes.map((route) => (
                <RoutingLink
                  to={"/farming-routes/" + route.slug}
                  heading={route.heading}
                  active={route.slug === slug}
                />
              ))}
              <ListGroup.Item style={{ height: "100%" }} />
            </ListGroup>
          </Col>
          <Col xs={9}>{slug && <Topic slug={slug} />}</Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(FarmingRoutes);
