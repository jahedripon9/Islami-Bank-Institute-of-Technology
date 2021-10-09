
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
            <h1 className="fw-bold">Islami Bank Institute of Technology <br /> are all Diploma Courses</h1>
                <Row>
                    <Col><div className="info-depatmant p-5  ">
                <div className="row">
                    {
                       courses.map((course)=> 
                       <div className="col-md-4 py-4"> 
                       
                           <Card className=" bg-light shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                       <Card.Img variant="top" src={course.img} />
                      <Card.Body>
                      <ins className="text-danger"> <Card.Title>{course.title}</Card.Title></ins>
                          <Card.Text>
                          {course.description}
                          <br />
                          <span className="fw-bold text-danger pt-4">Course Fee: {course.courseFee}</span>
                           </Card.Text>
                           {/* <Link to="/home"><Button className="btn btn-success" variant="primary">More Info</Button></Link>  */}
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

            </div></Col>
                </Row>
            </Container>
            
            
            <Footer></Footer>
        </div>
    );
};

export default Depatment;