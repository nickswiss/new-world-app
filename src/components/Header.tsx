import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AxiosInstance } from "axios";
import { getInitializedApi } from "../api/config";
import FarmingRouteDropdown from "./FarmingRouteDropdown";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadFarmingRoutes } from "../reducers/farmingRouteSlice";

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
      .get<{ items: FarmingRouteListRecord[] }>("farming-routes/?limit=10")
      .then((response) => {
        this.props.loadFarmingRoutes(response.data.items);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
