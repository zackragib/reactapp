import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBx from '../components/SearchBx'

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
                    <SearchBx/>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
