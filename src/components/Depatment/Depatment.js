import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Depatments from '../Depatments/Depatments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Depatment = () => {
    const [courses, setCourses] = useState([])

    const [searchCourse, setSearchCourse] = useState('')

    useEffect(() => {
        fetch('/ibitdata.json')
        .then((res) => res.json())
        .then((data) => setCourses(data))
    } ,[searchCourse]);

    const handleOnChange = (e) => {
        setSearchCourse(e.target.value)
        // console.log(e.target.value)
    } 

    console.log(searchCourse)

    console.log(courses)
    return (
        <div>
            <Header></Header>
            
            <Container className="bg-success p-2 text-dark bg-opacity-25" fluid="md">
                <Row>
                    <Col><div className="info-depatmant p-5  ">
                <div className="row">
                    {
                       courses.map((course)=> 
                       <div className="col-md-3 py-4"> 
                           <Card className=" bg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                       <Card.Img variant="top" src={course.img} />
                      <Card.Body>
                           <Card.Title>{course.title}</Card.Title>
                          <Card.Text>
                          Course Fee: {course.courseFee} <br />
                          {course.description}
                           </Card.Text>
                           <Link to="/home"><Button className="btn btn-success" variant="primary">More Info</Button></Link> 
                      </Card.Body>
                </Card>   
                </div>)
                    }

                </div>

            </div></Col>
                </Row>
            </Container>
            
            
            <Footer></Footer>
        </div>
    );
};

export default Depatment;