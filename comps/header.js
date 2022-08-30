import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useRouter} from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Header.module.css';

function Header() {
  var input_value
  const router = useRouter()
  
  return (
    <Navbar className={styles.navbar} expand="lg" variant='dark' sticky='top'>
      <Container fluid>
        <Navbar.Brand className='brand' href="/">Project Carthage</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='toggler'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            {/* <NavDropdown id={styles.top_item} title="Books" >
              <NavDropdown.Item href="/books/list?sort=popular" className={styles.sub_item}>Popular</NavDropdown.Item>
              <NavDropdown.Item href="/books/list?sort=new" className={styles.sub_item}>New</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href='books?sort=popular' id={styles.top_item}>Popular</Nav.Link>
            
            <Nav.Link href='books?sort=new' id={styles.top_item}>Recently Added</Nav.Link>
            <Nav.Link href='/about' id={styles.top_item}>About</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={e => {
            e.preventDefault()
            router.push(input_value)
          }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e =>{
                input_value = '/search/' + e.target.value
                console.log(input_value)
              }}
            />
            <Button className={styles.search_button} onClick={e => {
              router.push(input_value)
            }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;