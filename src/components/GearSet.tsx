import React from "react";
import GearSetSelector from "./GearSetSelector";
import { objectIsEmpty } from "../lib/utils";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";

/*

  New World Gear Affix Chart:
    https://newworldfans.com/articles/new-world-armor-Affix-chart


 */

class GearSet extends React.Component<any, any> {
  render() {
    console.log(this.props);
    return objectIsEmpty(this.props.inGameItems) ? (
      <Spinner animation={"grow"} />
    ) : (
      <GearSetSelector />
    );
  }
}

const mapStateToProps = (state) => ({
  inGameItems: state.inGameItems,
});

export default connect(mapStateToProps)(GearSet);
