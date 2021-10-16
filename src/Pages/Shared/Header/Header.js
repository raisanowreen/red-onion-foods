import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <Link className="ms-5" to="/home"><img src={logo} alt="logo" height="50px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mt-2">
          <Link className="text-dark me-5" to="/order"><i className="fas fa-shopping-cart"></i></Link>
        </li>
        { user?.email ?
        <li className="nav-item me-3">        <button onClick={logOut} type="button" className="btn btn-danger rounded-pill">Sign out</button>
        </li> :

          <li className="nav-item mt-2">
        <Link style={{textDecoration: 'none'}} className="text-dark me-5" to="/login">Signin</Link>
        </li>
        }
        <li className="nav-item me-3">
        <Link to="/login"><button type="button" className="btn btn-danger rounded-pill">Sign up</button>
</Link>
        </li>
        <li className="nav-item mt-2">
          <p>Hi {user?.displayName} </p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;