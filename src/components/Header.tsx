import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AxiosInstance } from "axios";
import { getInitializedApi } from "../api/config";
import FarmingRouteDropdown from "./FarmingRouteDropdown";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadFarmingRoutes } from "../reducers/farmingRouteSlice";
import { loadActiveRoute } from "../reducers/activeRouteSlice";

export interface FarmingRouteListRecord {
  id: string;
  slug: string;
  heading: string;
}

class Header extends React.Component<
  any,
  { farmingRoutes: FarmingRouteListRecord[]; inGameItems: any }
> {
  componentDidMount() {
    let api: AxiosInstance = getInitializedApi();
    api
      .get<{ items: FarmingRouteListRecord[] }>("farming-routes/?limit=100")
      .then((response) => {
        this.props.loadFarmingRoutes(response.data.items);
        this.props.history.push(
          `/farming-routes/${this.props.farmingRoutes[0].id}`
        );
      });
  }

  render() {
    return (
      <Container fluid className={"p-0"}>
        <Navbar
          variant={"dark"}
          style={{
            fontFamily: "Roboto Mono",
            backgroundColor: "var(--primary)",
          }}
        >
          <Container>
            <LinkContainer to="/farming-routes">
              <Navbar.Brand>New World Docs</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              {this.props.icons && (
                <FarmingRouteDropdown
                  items={this.props.farmingRoutes}
                  onItemSelect={(key) => {
                    this.props.history.push(`/farming-routes/${key}`);
                  }}
                />
              )}
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    icons: state.icons,
    farmingRoutes: state.farmingRoutes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  loadFarmingRoutes: (routes) => dispatch(loadFarmingRoutes(routes)),
  loadActiveRoute: (route) => dispatch(loadActiveRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
