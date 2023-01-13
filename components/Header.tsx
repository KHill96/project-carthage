import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useRouter} from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Component.module.css';
import { UrlObject } from 'url';
import Image from 'next/image';

function Header() {
  var input_value: string | UrlObject
  const router = useRouter()
  
  return (
    <Navbar className="bg-[#5F0505]" expand="lg" variant='dark' sticky='top'>
      <Container fluid>
          <a href='/' className='px-3'>
            <Image 
              src='/../public/carthage.png'
              width={40}
              height={40}
              alt="logo"
              className='rounded'
            />
          </a>
        <Navbar.Brand className='brand' href="/">
            <span className="text-white text-2xl">
            Project Carthage
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='toggler'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href='/authors' className="text-xl text-white hover:bg-black hover:rounded-sm px-auto">Authors</Nav.Link>
            <Nav.Link href='/categories' className="text-xl text-white hover:bg-black hover:rounded-sm px-auto">Categories</Nav.Link>
            <Nav.Link href='/about' className="text-xl text-white hover:bg-black hover:rounded-sm px-auto">About</Nav.Link>
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
              if (input_value)
                router.push(input_value)
              
            }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;