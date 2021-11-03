import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FarmingRoute from "./components/FarmingRoute";
import Jon from "./components/Jon";
import { Container } from "react-bootstrap";
import "./App.css";
import { connect } from "react-redux";
import IconTest from "./components/IconTest";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import GearSet from "./components/GearSet";
import Builds from "./components/Builds";

import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHourglassEnd);
const reload = () => window.location.reload();

class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <Container fluid className={"p-0"}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            {" "}
            <Route exact path="/jon" component={Jon} />
            <Route exact path="/icons" component={IconTest} />
            <Route exact path="/gear-sets" component={GearSet} />
            <Route exact path="/builds" component={Builds} />
            <Route exact path="/farming-routes/:id" component={FarmingRoute} />
            <Route path="/sitemap.xml" />
          </Switch>
        </ConnectedRouter>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    initApp: () => dispatch({ type: "APP_INIT" }),
  };
};

export default connect(null, mapDispatchToProps)(App);
