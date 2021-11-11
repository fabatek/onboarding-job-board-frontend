import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AllJobs from './AllJobs/AllJobs';
import Dashboard from './Dashboard/Dashboard';
import { routes } from "../containers/Router/services/index";
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container mt-3">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={routes.ROOT} component={Dashboard} />
                        <Route exact path={routes.ALLJOBS} component={AllJobs} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Header
