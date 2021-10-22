import { Col, Row } from "react-bootstrap";
import React from "react";
import SelectableDropdown from "./SelectableDropdown";
import { connect } from "react-redux";

declare interface FarmingRouteDropdownProps {
  farmingRoutes: any;
  icons: any;
  items?: any[];
  onItemSelect(key: any): void;
}

declare interface FarmingRouteDropdownState {}

class FarmingRouteDropdown extends React.Component<
  FarmingRouteDropdownProps,
  FarmingRouteDropdownState
> {
  render() {
    return (
      <Row>
        <Col sm={12} md={12}>
          <Row>
            <Col style={{ padding: "1vh" }} sm={3}>
              {!!this.props.items && (
                <SelectableDropdown
                  items={this.props.farmingRoutes}
                  icons={this.props.icons}
                  onItemSelect={(key: any) => this.props.onItemSelect(key)}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    icons: { ...state.icons },
    farmingRoutes: [...state.farmingRoutes],
  };
}

export default connect(mapStateToProps)(FarmingRouteDropdown);
