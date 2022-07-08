import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Form from 'react-bootstrap/esm/Form';
import FormControl from 'react-bootstrap/esm/FormControl';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

export default function Header () {


    return (
        
        <div className="navbar">
            <Navbar fixed='top' expand="lg" variant="dark">
                <Container fluid>
                <Navbar.Brand className="brand"  href="/">
                    Public Repository
                </Navbar.Brand>
                <NavbarToggle />
                <Navbar.Collapse>
                    <Nav className='me-auto my-2 lg-0'>
                        <NavDropdown id="top-item" title="Books">
                            <NavDropdown.Item className="sub-item" href="#" >Bookshelves</NavDropdown.Item>
                            <NavDropdown.Item className="sub-item" href="#" >Upcoming</NavDropdown.Item>
                            <NavDropdown.Item className="sub-item" href="#" >Popular</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id="top-item" title="Movies" >
                            <NavDropdown.Item className="sub-item" href="#" >Theaters</NavDropdown.Item>
                            <NavDropdown.Item className="sub-item" href="#" >Upcoming</NavDropdown.Item>
                            <NavDropdown.Item className="sub-item" href="#" >Popular</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id="top-item" href="/about">
                            About
                        </Nav.Link>
                        
                        
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button className="search-button">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

} 