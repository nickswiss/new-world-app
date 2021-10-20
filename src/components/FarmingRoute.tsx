import React, { SyntheticEvent } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Dropdown,
  ListGroup,
  Row,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { getInitializedApi } from "../api/config";
import { Topic } from "./Topic";
import { withRouter } from "react-router-dom";
import { AxiosInstance } from "axios";
import DisplayIcon from "./DisplayIcon";
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
        console.log(...response.data.items);
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
    let isDetail: boolean = "id" in this.props.match.params;
    let { id }: { id?: string } = this.props.match.params;
    if (!isDetail && this.state.routes.length > 0) {
      return <Redirect to={`/farming-routes/${this.state.routes[0].id}`} />;
    }
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <Row
          className={"align-items-md-start"}
          style={{ padding: "1vh", borderStyle: "none" }}
        >
          <Col
            xs={12}
            style={{
              padding: 0,
              backgroundColor: "var(--dark)",
              borderRadius: 0,
              fontFamily: "Roboto Mono",
            }}
          >
            <Row>
              <Col sm={12} md={12}>
                <Row>
                  <Col style={{ padding: "1vh" }} sm={3}>
                    <SelectableDropDown
                      items={[
                        {
                          id: "life_mote",
                          label: "Life Mote",
                          link: "/farming-routes/life-mote",
                          src_thumb:
                            "https://media.newworlddocs.com/media/icons/life-mote/thumb.png",
                          src_detail:
                            "https://media.newworlddocs.com/media/icons/life-mote/thumb.png",
                        },
                      ]}
                      onItemSelect={(key, event) => {
                        console.log(key);
                        console.log(event);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            className={"card-2"}
            style={{
              padding: 0,
              backgroundColor: "white",
              borderRadius: 0,
            }}
            sm={12}
            md={12}
          >
            {id && <Topic id={id} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

declare interface SelectableDropDownProps {
  items: any[];
  onItemSelect(key: string | null, event: any): void;
}

declare interface SelectableDropDownState {}

class SelectableDropDown extends React.Component<
  SelectableDropDownProps,
  SelectableDropDownState
> {
  constructor(props: SelectableDropDownProps) {
    super(props);
  }

  render() {
    return (
      <Dropdown
        onSelect={(key, event) => this.props.onItemSelect(key, event)}
        autoClose="outside"
      >
        <Dropdown.Toggle id="dropdown-autoclose-outside" variant={"dark"}>
          <Row>
            <Row>
              <Col xs={4}>
                <DisplayIcon
                  resource={`https://media.newworlddocs.com/media/icons/life-mote`}
                />
              </Col>
              <Col xs={8}>Life Mote</Col>
            </Row>
          </Row>
        </Dropdown.Toggle>

        <Dropdown.Menu variant={"dark"}>
          {this.props.items.map((item) => (
            <Dropdown.Item eventKey={item.id}>
              <Row>
                <DisplayIcon
                  resource={`https://media.newworlddocs.com/media/icons/life-mote`}
                />
                <Link to={item.link}>{item.label}</Link>
              </Row>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(FarmingRoutes);
