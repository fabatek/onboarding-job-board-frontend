import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./styles.scss"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ITVIET</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Việc Làm IT</Nav.Link>
            <Nav.Link >Công Ty IT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Đăng Nhập</Nav.Link>
            <Nav.Link >Đăng Ký</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header


