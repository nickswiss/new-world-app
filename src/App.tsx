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

function App() {
  return (
    <Container fluid className={"p-0"}>
      <Router>
        <Header />
        <Switch>
          {" "}
          <Redirect exact from="/" to="/farming-routes" />
          <Route exact path="/jon" component={Jon} />
          <Route exact path="/farming-routes/" component={FarmingRoute} />
          <Route exact path="/farming-routes/:id" component={FarmingRoute} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
