import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Depatments = () => {
    
    
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

    // console.log(searchCourse)

    // console.log(courses)
    return (

        <Container className="bg-success p-2 text-dark bg-opacity-25" fluid="md">
            <Row>
                <Col> <hr />
                <div className="Course-container py-4"> 
                    {/* <Header></Header> */}
                    <h1 className="fw-bold">Islami Bank Institute of Technology <br /> are all Diploma Courses</h1>
                    <div className="Search">
                    <input onChange={handleOnChange} className="p-2  rounded-pill " type="text" />
                    <button className="p-2 btn btn-primary rounded-pill ">Serach</button>
                    </div>
                    
                    <div className="info-depatmant p-5">
                        <div className="row"> 
                            {
                            courses.slice(0, 3).map((course)=> 
                            <div className="col-md-4 "key={course.id}> 
                                 
                                <Card className=" bg-light shadow p-3 mb-5 bg-body rounded h-auto  " style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.img}  />
                            <Card.Body>
                            <ins className="text-success "> <Card.Title>{course.title}</Card.Title></ins>
                                <Card.Text>
                                {course.description}  <br />
                                </Card.Text>
                                <span className="fw-bold text-danger">Course Fee: {course.courseFee}</span> <br />
                                <Link to="/depatment"><Button className="btn btn-success" variant="primary">More Info <FontAwesomeIcon icon={faArrowRight} /> </Button></Link> <hr />
                                <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                                <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                                <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                                <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                                <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                                
                            </Card.Body>
                        </Card>   
                        </div>)
                            }

                        </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Depatments;