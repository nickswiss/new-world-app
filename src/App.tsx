import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import FarmingRoute from "./components/FarmingRoute";
import Jon from "./components/Jon";
import { Container } from "react-bootstrap";
import "./App.css";
import { connect } from "react-redux";
import IconTest from "./components/IconTest";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { fetchInGameItemsRequest } from "./actions";

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
            <Route exact path="/farming-routes/:id" component={FarmingRoute} />
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
