import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const textStyle = {
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#0dcaf0", marginBottom: "1rem" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ ...textStyle }}>
            QuadB-Assignment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontWeight: "bold" }}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
