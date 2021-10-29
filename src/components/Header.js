import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand >School Info</Navbar.Brand>
                    </LinkContainer>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                            <LinkContainer to='/add'>
                            <Nav.Link>Add</Nav.Link>
                            </LinkContainer>
                </Nav>
               
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
