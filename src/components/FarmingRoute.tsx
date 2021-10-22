import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getInitializedApi } from "../api/config";
import { Topic } from "./Topic";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadActiveRoute } from "../reducers/activeRouteSlice";
import { loadActiveTimestamp } from "../reducers/activeTimestampSlice";
import { objectIsEmpty } from "../lib/utils";

class FarmingRoutes extends React.Component<any, {}> {
  loadRoute() {
    getInitializedApi()
      .get(`farming-routes/${this.props.match.params.id}`)
      .then((response) => this.props.loadActiveRoute(response.data));
  }

  clearActiveRoute() {
    this.props.loadActiveRoute({});
  }

  render() {
    const loadTopic = !objectIsEmpty(this.props.activeRoute);

    // Handle route switch
    if (this.props.activeRoute.id !== this.props.match.params.id) {
      if (!this.props.match.params.id) {
        this.clearActiveRoute();
      } else {
        this.loadRoute();
      }
    }
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <Row
          className={"align-items-md-start"}
          style={{ padding: "1vh", borderStyle: "none" }}
        >
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
            {loadTopic && (
              <Topic
                loadActiveTimestamp={this.props.loadActiveTimestamp}
                activeTimestamp={this.props.activeTimestamp}
                activeRoute={this.props.activeRoute}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadActiveRoute: (route) => dispatch(loadActiveRoute(route)),
    loadActiveTimestamp: (timestamp) =>
      dispatch(loadActiveTimestamp(timestamp)),
  };
}
function mapStateToProps(state) {
  const { icons, activeRoute, activeTimestamp } = state;
  return {
    icons: icons,
    activeRoute: activeRoute,
    activeTimestamp: activeTimestamp,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FarmingRoutes));
