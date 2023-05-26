import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';

import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className=''>
          
        </Modal.Header>
        <Modal.Body className='mx-auto'>
        <Modal.Title id="contained-modal-title-vcenter" className='text-black text-center headline fw-bold fs-6'>
              Successfully Created Account!
          </Modal.Title>
          <img className='mx-auto' src='https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.webp'></img>
        </Modal.Body>
        <Modal.Footer>
           <Link to="/"><Button className='btn btn-danger' onClick={props.onHide}>Click to Continue</Button></Link>
        </Modal.Footer>
      </Modal>
    );
  }
const Register = () => {
    const { createUser, update_profile } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.state?.from?.pathname || '/'
    const btnRegister = event => {
     
        event.preventDefault()
        const form = event.target;
        const Your_Name = form.Your_Name.value;
        const Photo_url = form.Photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        
        setError('')
        //console.log(Your_Name, Photo_url, email, password, confirm_password);
        form.reset()

        if (password !== confirm_password) {

            setError("Password doesn't match.")
            return 0;
        }
        if (password.length < 6) {
            setError("Please give atleast 6 characters")
            return 0;
        }
        createUser(email, password)
            .then(result => {
                const logged = result.user;
                navigate({from:location}, {replace})
                setSuccess("Successfully Created Account")
                update_profile(result.user, Your_Name, Photo_url)
                
                
            })
            .catch(error => {
                setError(error.message);
            })


    }
    const btncheck = (event) => {
        setAccept(event.target.checked)
    }
   
    return (
        <section className="h-100 gradient-form " >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4 animation">

                                        <div className="text-center">
                                            <h1><FontAwesomeIcon icon={faBowlFood} /></h1>
                                            <h4 className="mt-1 mb-5 pb-1 headline fw-bold fs-3">We are The <span className='text-danger'>WabiSabi</span> Team</h4>
                                        </div>

                                        <Form onSubmit={btnRegister}>
                                            <p className='fw-bold fs-4 text-center'>Please Register</p>
                                            <Form.Group className=" fw-bold mb-4" controlId="formBasicPassword">
                                                <Form.Label>Your Name</Form.Label>
                                                <Form.Control type="text" name='Your_Name' required placeholder="Your Name" />




                                            </Form.Group>
                                            <Form.Group className=" fw-bold mb-4" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name='email' required placeholder="Email" />

                                            </Form.Group>
                                            <Form.Group className=" fw-bold mb-4" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='password' required placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className=" fw-bold mb-4" controlId="formBasicPassword">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" name='confirm_password' required placeholder="Confirm Password" />
                                            </Form.Group>
                                            <Form.Group className=" fw-bold mb-4" controlId="formBasicPassword">
                                                <Form.Label>Photo url</Form.Label>
                                                <Form.Control type="text" name='Photo_url' required placeholder="Photo url" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                                                <Form.Check type="checkbox" name='accept'
                                                    onClick={btncheck} 

                                                    label={<Link to="/term" className='text-secondary'>Accept Terms & Condition</Link>} />
                                            </Form.Group>
                                            <Button variant="danger" type="submit" disabled={!accept} className='  mb-3 w-100 fw-bold btn-danger border border-0'>
                                                Register
                                            </Button>
                                            <br />
                                            <Form.Text className="text-danger">
                                                <p>{error}</p>
                                            </Form.Text>
                                            <Form.Text className="text-success">
                                                {
                                                    success && <>
                                                     
                                              
                                                    <MyVerticallyCenteredModal
                                                      show={success}
                                                     
                                                      onHide={() => setSuccess("")}
                                                    />
                                                  </>
                                                }
                                            </Form.Text>
                                            <hr />
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Already have an account?</p>
                                                <Link to="/login"><button type="button" className="btn btn-outline-danger ">Login</button></Link>
                                            </div>
                                        </Form>


                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center justify-content-end ">

                                    <img src="https://media-cdn2.greatbritishchefs.com/media/eptorjpd/img61142.whqc_735x1102q90.jpg" className='img-fluid' alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;