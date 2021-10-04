import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './logo.jpeg'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Depatments from '../Depatments/Depatments';


const Header = () => {
    
    return (
        <Navbar bg="p-3 mb-2 bg-light text-whit" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-success fw-bold fs-3" href="#">Islami Bank Institute of Technology, Sylhet</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    );
};

export default Header;