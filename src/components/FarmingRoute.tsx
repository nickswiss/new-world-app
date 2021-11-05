import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Topic from "./Topic";
import { connect } from "react-redux";
import { objectIsEmpty } from "../lib/utils";
import { fetchActiveFarmingRouteRequest, setActiveTimestamp } from "../actions";

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
  componentDidMount() {
    this.props.loadActiveRoute(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.loadActiveRoute(this.props.match.params.id);
    }
  }

  render() {
    if (
      this.props.loadingActiveFarmingRoute ||
      this.props.loadingInGameItems ||
      objectIsEmpty(this.props.activeFarmingRoute)
    ) {
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
    loadActiveTimestamp: (timestamp) => dispatch(setActiveTimestamp(timestamp)),
  };
}

function mapStateToProps(state) {
  const {
    inGameItems,
    activeFarmingRoute,
    activeTimestamp,
    loadingActiveFarmingRoute,
    loadingInGameItems,
  } = state.farmingRoutes;
  return {
    inGameItems,
    activeFarmingRoute,
    activeTimestamp,
    loadingActiveFarmingRoute,
    loadingInGameItems,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FarmingRoutes);
