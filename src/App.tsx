import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import FarmingRoute from "./components/FarmingRoute";
import Jon from "./components/Jon";
import { Container } from "react-bootstrap";
import "./App.css";
import { AxiosInstance } from "axios";
import { getInitializedApi } from "./api/config";

import { connect } from "react-redux";
import { loadIcons } from "./reducers/iconSlice";
import IconTest from "./components/IconTest";

class App extends React.Component<any, any> {
  componentDidMount() {
    let api: AxiosInstance = getInitializedApi();
    api.get<{ items: any }>("in-game-items/?limit=1000").then((response) => {
      this.props.loadIcons(response.data.items);
    });
  }

  render() {
    return (
      <Container fluid className={"p-0"}>
        <Router>
          <Header />
          <Switch>
            {" "}
            <Redirect exact from="/" to="/farming-routes" />
            <Route exact path="/jon" component={Jon} />
            <Route exact path="/icons" component={IconTest} />
            <Route exact path="/farming-routes/" component={FarmingRoute} />
            <Route exact path="/farming-routes/:id" component={FarmingRoute} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    loadIcons: (icons) => dispatch(loadIcons(icons)),
  };
};

export default connect(null, mapDispatchToProps /** no second argument */)(App);
