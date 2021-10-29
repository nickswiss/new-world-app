import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SelectableDropdown from "./SelectableDropdown";

export interface FarmingRouteListRecord {
  id: string;
  slug: string;
  heading: string;
}

class Header extends React.Component<
  any,
  { farmingRoutes: FarmingRouteListRecord[]; inGameItems: any }
> {
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
              <SelectableDropdown
                items={this.props.farmingRoutes}
                isLoadingItems={this.props.loadingFarmingRoutes}
                isLoadingIcons={this.props.loadingInGameItems}
                icons={this.props.icons}
                onItemSelect={(key: any) =>
                  this.props.history.push(`/farming-routes/${key}`)
                }
              />
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inGameItems: state.inGameItems,
    loadingInGameItems: state.loadingInGameItems,
    farmingRoutes: state.farmingRoutes,
    loadingFarmingRoutes: state.loadingFarmingRoutes,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
