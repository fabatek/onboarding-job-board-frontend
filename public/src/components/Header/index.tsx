import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./styles.scss"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Job-Board</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >All jobs</Nav.Link>
            <Nav.Link >All companies</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Sign in</Nav.Link>
            <Nav.Link >Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header


