import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar className="navbar" expand="lg" variant='dark' sticky='top'>
      <Container fluid>
        <Navbar.Brand className="brand" href="/">Project Carthage</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='toggler'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <NavDropdown id="top-item" title="Books" >
              <NavDropdown.Item href="/books/popular" className='sub-item'>Popular</NavDropdown.Item>
              <NavDropdown.Item href="/books/new" className='sub-item'>New</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Movies" id="top-item">
              <NavDropdown.Item href="#" className='sub-item'>Popular</NavDropdown.Item>
              <NavDropdown.Item href="#" className='sub-item'>New</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* MUST DO */}
            <Button className='search-button'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;