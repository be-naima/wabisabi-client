import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
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
                    Successfully Logged In!
                </Modal.Title>
                <img className='mx-auto' src='https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.webp'></img>
            </Modal.Body>
            <Modal.Footer>
               
            </Modal.Footer>
        </Modal>
    );
}
const Login = () => {
    const { googleSignIn, logIn, gitHubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const gitHubprovider = new GithubAuthProvider();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [success, setSuccess] = useState('')
    //login with email & password
    const btnLongIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        setError('')
        logIn(email, password)
            .then(result => {
                const logged = result.user;
                setSuccess("Successfully Logged In")
                navigate(from, { replace: true })

            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).')
                    setError('Password is wrong')

                setError(error.message)
            })
    }
    //login with google
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                setSuccess("Successfully Logged In")
                navigate(from, { replace: true })
                //console.log(user);

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message)
                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)


            });
    }
    //login with github
    const handleGitHub = () => {
        gitHubSignIn(gitHubprovider)
            .then((result) => {

                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;


                const user = result.user;
                setSuccess("Successfully Logged In")
                navigate(from, { replace: true })

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message)
                const email = error.customData.email;

                const credential = GithubAuthProvider.credentialFromError(error);

            });

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

                                        <Form onSubmit={btnLongIn}>
                                            <p className='fw-bold fs-4 text-center'>Please Login</p>
                                            <Form.Group className="fw-bold mb-4" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" name='email' required placeholder="Enter email" />

                                            </Form.Group>

                                            <Form.Group className="fw-bold mb-4" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='password' required placeholder="Password" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit" className='"btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100 fw-bold btn-danger border border-0'>
                                                Login
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
                                            <div>
                                                <button onClick={handleGoogle} className="btn btn-dark btn-block fa-lg gradient-custom-2 mb-3 w-100 fw-bold  border border-0" type="button"><Icon className='fs-5 fw-bold ' icon="mdi:google" /> Sign in With Google</button>
                                                <button onClick={handleGitHub} className="btn btn-dark btn-block fa-lg gradient-custom-2 mb-3 w-100 fw-bold  border border-0" type="button"><Icon className='fs-4 fw-bold ' icon="mdi:github" /> Sign in With GitHub</button>


                                            </div>
                                            <div className="mt-5 d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <Link to="/register"><button type="button" className="btn btn-outline-danger ">Create new</button></Link>
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

export default Login;