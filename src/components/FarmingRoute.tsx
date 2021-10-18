import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { getInitializedApi } from "../api/config";
import { Topic } from "./Topic";
import { withRouter } from "react-router-dom";
import { AxiosInstance, AxiosResponse } from "axios";
const linkStyle = {
  textDecoration: "none",
  color: "blue",
  fontSize: "1vw",
  fontFamily: "Roboto Mono",
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
  id: string;
  slug: string;
  heading: string;
}

class FarmingRoutes extends React.Component<
  RouteComponentProps,
  {
    routes: FarmingRouteListRecord[];
    open: boolean;
  }
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { routes: [], open: false };
  }

  componentDidMount() {
    let api: AxiosInstance = getInitializedApi();
    api
      .get<{
        items: FarmingRouteListRecord[];
      }>("farming-routes/?limit=10")
      .then((response) => {
        console.log(response);
        this.setState({
          routes: [...response.data.items],
        });
      });
  }

  setShow = (open: boolean) => {
    this.setState({ open: open });
  };

  handleClose = () => this.setShow(false);

  handleShow = () => this.setShow(true);

  render() {
    let { id }: { id?: string } = this.props.match.params;
    let { open }: { open?: boolean } = this.state;
    return (
      <Container style={{ padding: 0, height: "100%" }}>
        <Row
          className={"align-items-md-start"}
          style={{ padding: "1vh", borderStyle: "none" }}
        >
          <Col
            className="flex-column sticky-sm-top"
            xs={3}
            style={{ height: "100%", borderStyle: "none" }}
          >
            <ListGroup
              className="card-2"
              style={{ borderRadius: 0, borderStyle: "none" }}
            >
              <ListGroup.Item
                style={{
                  fontSize: "1vw",
                  fontFamily: "Roboto Mono",
                }}
              >
                <p>Farming Routes</p>
              </ListGroup.Item>
              {this.state.routes.map((route) => (
                <RoutingLink
                  to={"/farming-routes/" + route.id}
                  heading={route.heading}
                  active={route.id === id}
                />
              ))}
              <ListGroup.Item style={{ height: "100%" }} />
            </ListGroup>
          </Col>

          <Col
            className={"card-2"}
            style={{
              padding: 0,
              backgroundColor: "white",
              borderRadius: 0,
            }}
            xs={9}
          >
            {id && <Topic id={id} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(FarmingRoutes);
