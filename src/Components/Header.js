import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Exam301 </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/later">Later</Nav.Link>
              </Nav>
              {/* <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>{" "}
      </div>
    );
  }
}

export default Header;
