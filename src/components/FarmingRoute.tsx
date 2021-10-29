import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Topic from "./Topic";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { objectIsEmpty } from "../lib/utils";
import { fetchActiveFarmingRouteRequest } from "../actions";

const FarmingRouteContainer = (props) => (
  <Container fluid style={{ padding: 0, height: "100vh" }}>
    <Row
      className={"align-items-md-start"}
      style={{ padding: "1vh", borderStyle: "none" }}
    >
      <Col
        className={"card-2"}
        style={{
          padding: 0,
          borderRadius: 0,
          height: "100%",
          width: "100%",
        }}
        sm={12}
        md={12}
      >
        {props.children}
      </Col>
    </Row>
  </Container>
);

class FarmingRoutes extends React.Component<any, {}> {
  render() {
    if (
      objectIsEmpty(this.props.activeFarmingRoute) ||
      this.props.activeFarmingRoute.id !== this.props.match.params.id
    ) {
      // Initial Load
      this.props.loadActiveRoute(this.props.match.params.id);
      return (
        <FarmingRouteContainer>
          <Row>
            <Col
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "90vh",
              }}
            >
              <Spinner animation={"border"} />
            </Col>
          </Row>
        </FarmingRouteContainer>
      );
    }

    if (this.props.loadingActiveFarmingRoute || this.props.loadingInGameItems) {
      // We are at a route which is not loaded yet
      return (
        <FarmingRouteContainer>
          <Row>
            <Col
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "90vh",
              }}
            >
              <Spinner
                style={{ width: "50vh", height: "50vh" }}
                animation={"border"}
              />
            </Col>
          </Row>
        </FarmingRouteContainer>
      );
    }

    return (
      <FarmingRouteContainer>
        {" "}
        <Topic
          loadActiveTimestamp={this.props.loadActiveTimestamp}
          activeTimestamp={this.props.activeTimestamp}
          activeRoute={this.props.activeFarmingRoute}
        />
      </FarmingRouteContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadActiveRoute: (id) => dispatch(fetchActiveFarmingRouteRequest(id)),
  };
}

function mapStateToProps(state) {
  const {
    inGameItems,
    activeFarmingRoute,
    activeTimestamp,
    loadingActiveFarmingRoute,
    loadingInGameItems,
  } = state;
  return {
    inGameItems,
    activeFarmingRoute,
    activeTimestamp,
    loadingActiveFarmingRoute,
    loadingInGameItems,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FarmingRoutes));
