import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FarmingRoute from "./components/FarmingRoute";
import Jon from "./components/Jon";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid style={{ height: "90vh" }}>
        <Switch>
          <Route exact path="/" component={Jon} />
          <Route exact path="/farming-routes/" component={FarmingRoute} />
          <Route exact path="/farming-routes/:id" component={FarmingRoute} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
