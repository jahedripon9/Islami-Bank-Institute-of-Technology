import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Courseitems = () => {
    return (
        <div>
            <Container className="bg-success p-2 text-dark bg-opacity-25" fluid="md">
                <Row>
                    <Col> <hr />
                    <h1 className="text-center py-2">Ask about the All Department</h1>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>Computer Technology</Accordion.Header>
                        <Accordion.Body>
                        Computer Technology combines the hardware of computers and computer-controlled devices with software—operating systems, authoring tools, expert systems, and courseware—to support training technology.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Electrical Technology </Accordion.Header>
                        <Accordion.Body>
                        Electrical Technology – The technology of producing, storing, controlling, transmitting and getting work from electrical energy. (Example applications: power plant generator, flashlight, electric motor in a can opener, doorbell, electric heater, hair dryer.)
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Civil Technology</Accordion.Header>
                        <Accordion.Body>
                        The definition of civil technology is the field of drafting, cartography, traffic technology and the analysis of construction materials to support construction, engineering, and architecture for roads, bridges and other public structures.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                 </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courseitems;