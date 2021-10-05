import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div>
            <Container className="bg-success p-2 text-dark bg-opacity-50  " fluid="md">
              <Row>
                <Col><p className="fw-bold">  © Islami Bank Institute of Technology, Sylhet</p>
                </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Footer;