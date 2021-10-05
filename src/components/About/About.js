import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container className="py-4 bg-success p-2 text-dark bg-opacity-25" fluid="md">
                <Row>
                    
                <Col>
                <Card >
                    <Card.Header className="fs-1">Computer Technology</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Computer Technology combines the hardware of computers and computer-controlled devices with software—operating systems, authoring tools, expert systems, and courseware—to support training technology.{' '}
                        </p>
                        <footer className="blockquote-footer">
                        Islami Bank Institute of <cite title="Source Title">Technology, Sylhet</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                    </Card>
                <Card>
                    <Card.Header className="fs-1">Electrical Technology</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Electrical Technology – The technology of producing, storing, controlling, transmitting and getting work from electrical energy. (Example applications: power plant generator, flashlight, electric motor in a can opener, doorbell, electric heater, hair dryer.){' '}
                        </p>
                        <footer className="blockquote-footer">
                        Islami Bank Institute of <cite title="Source Title">Technology, Sylhet</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                    </Card>
                <Card>
                    <Card.Header className="fs-1"> Civil Technology </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            The definition of civil technology is the field of drafting, cartography, traffic technology and the analysis of construction materials to support construction, engineering, and architecture for roads, bridges and other public structures.{' '}
                        </p>
                        <footer className="blockquote-footer">
                        Islami Bank Institute of <cite title="Source Title">Technology, Sylhet</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default About;