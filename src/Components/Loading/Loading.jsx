import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Loading = () => {
    return (
        <Row className='justify-content-center '>
            <Col xs={12} sm={4} md={4}>
            <img className='w-75 rounded-circle center-block d-block mx-auto mt-5 ' src="https://cdn.dribbble.com/users/1215152/screenshots/12858414/media/2899b4a569a01cdb3614b65e7f250092.gif" alt="" />
            </Col>
            
        </Row>
    );
};

export default Loading;