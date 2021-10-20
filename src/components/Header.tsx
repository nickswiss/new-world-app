import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Container fluid className={"p-0"}>
      <Navbar
        variant={"dark"}
        style={{ fontFamily: "Roboto Mono", backgroundColor: "var(--primary)" }}
      >
        <Container>
          <LinkContainer to="/farming-routes">
            <Navbar.Brand>New World Docs</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/farming-routes">
              <Nav.Link>Farming Routes</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/jon">
              <Nav.Link>Jon</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
