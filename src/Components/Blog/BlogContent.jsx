import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const BlogContent = () => {
    return (
        <div className='container py-5'>
            <Row xs={1} md={2} sm={1} className="g-4 mb-5">

                <Col className='text-light'>
                    <Card className='p-3 h-100'>
                        <Card.Img variant="top"
                            className='w-25 mx-auto' src="https://img.icons8.com/bubbles/12x/react.png" />
                        <Card.Body>
                            <Card.Title>What are the differences between uncontrolled and controlled components?</Card.Title>
                            <Card.Text>
                                Controlled components in React have their state managed by the parent component and use props to update it, while uncontrolled components manage their state internally using a ref. <br></br>Controlled components are useful for form elements, while uncontrolled components can be used for any type of input.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='text-light '>
                    <Card className='p-3 h-100'>
                        <Card.Img variant="top"
                            className='w-25 mx-auto' src="https://img.icons8.com/bubbles/12x/react.png" />
                        <Card.Body>
                            <Card.Title>How to validate React props using PropTypes?</Card.Title>
                            <Card.Text>
                                To validate React props using PropTypes, you need to import PropTypes from 'prop-types' and define the expected props and their types by adding a `propTypes` property to the component. Use `PropTypes` to define the data types, and add `isRequired` if the prop is required. This helps prevent errors and improves the overall stability of the application.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='text-light'>
                    <Card className='p-3 h-100'>
                        <Card.Img variant="top"
                            className='w-25 mx-auto' src="https://img.icons8.com/bubbles/12x/react.png" />
                        <Card.Body>
                            <Card.Title>What is the difference between nodejs and express js.</Card.Title>
                            <Card.Text>
                                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, outside of the browser. Node.js provides a set of built-in modules for performing various operations such as file system operations, networking, and more.<br></br><br></br>

                                Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs. Express.js simplifies the process of handling HTTP requests and responses, routing, middleware, and more.<br></br><br></br>

                                In short, Node.js is a runtime environment for executing JavaScript code outside of the browser, while Express.js is a web application framework that provides a set of features and tools for building web applications and APIs using Node.js.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='text-light'>
                    <Card className='p-3 h-100'>
                        <Card.Img variant="top"
                            className='w-25 mx-auto' src="https://img.icons8.com/bubbles/12x/react.png" />
                        <Card.Body>
                            <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                            <Card.Text>
                                In React, a custom hook is a JavaScript function that utilizes one or more of the built-in hooks provided by React, such as useState, useEffect, useContext, etc. to encapsulate and reuse logic across multiple components. Custom hooks allow developers to create reusable code that can be shared and used throughout an application, making it more efficient and easier to maintain. <br></br><br></br>


                                Developers create custom hooks to reduce code duplication and to make the codebase more modular and reusable. If multiple components in an application share some common functionality, creating a custom hook can help to abstract away that functionality into a single reusable hook. This can make the code easier to read, write, and maintain, and can also help to reduce the overall size of the codebase.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


           
        </div>
    );
};

export default BlogContent;