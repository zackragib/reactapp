import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function ProfileNav() {
    return (
        <Nav  variant="tabs" className='justify-content-center'>
            <Nav.Item>
                <LinkContainer to='/newpage/general'>
                <Nav.Link>General Info</Nav.Link> 
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to='/newpage/salary'>
                <Nav.Link >Salary</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to='/card'>
                <Nav.Link >Card</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Card Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Card Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Card Info</Nav.Link>
            </Nav.Item>
            
            </Nav>
    )
}

export default ProfileNav
