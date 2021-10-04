import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

    console.log(searchCourse)

    console.log(courses)
    return (
        <div className="Course-container py-4">
            <h1>All Depatment</h1>
            <div className="Search">
            <input onChange={handleOnChange} className="p-2  rounded-pill " type="text" />
            <button className="p-2 btn btn-primary rounded-pill ">Serach</button>
            </div>
            
            <div className="info-depatmant p-5">
                <div className="row">
                    {
                       courses?.map((course)=>
                       <div className="col-md-4 py-4"> 
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

            </div>







         
        </div>
    );
};

export default Depatments;