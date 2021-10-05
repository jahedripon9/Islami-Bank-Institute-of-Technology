import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-danger">404</h1>
            <h3 className="text-danger pb-5">Page Not Found</h3>
            <Link className='ps-4 text-decoration-none text-black fs-5 fw-bold p-3 bg-danger rounded-pill text-white' to='/home'> Back Home</Link>
        </div>
    );
};

export default NotFound;