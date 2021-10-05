import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



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