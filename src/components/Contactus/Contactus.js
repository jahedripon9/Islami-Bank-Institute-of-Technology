import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contactus = () => {
    return (
        


        <Container className="bg-success p-2 text-dark bg-opacity-25" fluid="md">
            <Row>
                <Col><Header></Header>
            <h1 className="pt-5 text-danger"><ins>Countact Us </ins></h1>
            <h4 className="pb-1">Any kind of Information</h4>
            <h4 className="pb-1">Address: <br /> Newa Corner (3rd, 4th & 5th floor),Humayun Rashid Chattar, <br />   Kadamtoli,Dakshin Surma,Sylhet-3100</h4>
            <h4>Please Call:</h4>
            <h3 className="pb-5">+8801726 308391</h3>
            <br /> <br /> <br />    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
            <Footer></Footer></Col>
            </Row>
        </Container>
            
            

    );
};

export default Contactus;