import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const AllDepatment = () => {
    
    
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
const AllDepatment = () => {
    return (
        <div>
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
                           <Card style={{ width: '18rem' }}>
                       <Card.Img variant="top" src={course.img} />
                      <Card.Body>
                           <Card.Title>{course.title}</Card.Title>
                          <Card.Text>
                          Course Fee: {course.courseFee} <br />
                          {course.description}
                           </Card.Text>
                           <Link to="/"><Button className="btn btn-success" variant="primary">Go somewhere</Button></Link> 
                      </Card.Body>
                </Card>   
                </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default AllDepatment;