import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  
  const profilePhoto = [];
  const Name = []
  for (const i in user) {
    if (i == 'photoURL') { profilePhoto.push(user[i]) }
    if (i == 'displayName') { Name.push(user[i]) }
  }


  const btnLogOut = () => {
    logOut()
      .then()
      .catch(console.error(error.massege))
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div className="container-fluid container">
        <div>
          <h1 className='text-white mx-md-auto headline'><FontAwesomeIcon icon={faBowlFood} /> WabiSabi</h1>

        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-md-auto">
            <li className="nav-item text-white mt-2 ">
              <NavLink to='/' className="text-white fw-bold text-decoration-none p-2 rounded-2">   Home</NavLink>
            </li>
            <li className="nav-item text-white mt-2">
              <NavLink to='/blog' className="text-white fw-bold text-decoration-none p-2 rounded-2">   Blog</NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">


            {user && <div><a id="not-clickable"
             
              >
              <Image className='image-responsive profileImg me-2' src={profilePhoto[0]} roundedCircle />
            </a>
              <Tooltip anchorSelect="#not-clickable" className='text-dark bg-light'>
              <button className='text-dark bg-light border-0 '>{Name[0]}</button>
              </Tooltip>


            </div>}

            {user ? <Link to='/'><button className='btn btn-danger fw-bold mt-2' onClick={btnLogOut}>Logout</button></Link> : <Link to="/login">
              <button className='btn btn-danger fw-bold'>Login</button></Link>
            }

          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;