import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './logo.jpeg'
import { Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    
    return (

      <Container className="bg-success p-2 text-white bg-opacity-75" fluid="md">
        <Row>
        <Navbar bg="p-3 mb-2 bg-light" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-success fw-bold fs-3 ">Islami Bank Institute of Technology, Sylhet</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/home'>Home</Link>
              <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/about'>About</Link>
              <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold' to='/depatment'>Depatment</Link>
              <Link className='ps-4 text-decoration-none text-black fs-6 fw-bold ' to='/contactus'>Contact Us</Link>
             
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="btn btn-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Row>
      </Container>




        

     
    );
};

export default Header;