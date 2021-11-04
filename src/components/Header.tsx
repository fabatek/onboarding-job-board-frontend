import React from 'react'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Collapse } from 'react-bootstrap';
import AllJobs from './AllJobs/AllJobs';
import Dashboard from './Dashboard/Dashboard';

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ITviec</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/alljobs">All Jobs</Nav.Link>
                            <NavDropdown title="IT Companies" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign in</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Employers
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container mt-3">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={["/"]} component={Dashboard} />
                        <Route exact path={["/alljobs"]} component={AllJobs} />
                    </Switch>
                </BrowserRouter>

            </div>
        </div>
    )
}

export default Header
