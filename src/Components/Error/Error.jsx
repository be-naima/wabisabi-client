import React from 'react';
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <img src='https://media.tenor.com/g500aVnijTIAAAAj/akirambow-spoiled-rabbit.gif'></img>
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <button className='bg-white'>
                 <Link to="/" className='text-black text-decoration-none fw-bold'>Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default Error;