import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <Link className="ms-5" to="/home"><img src={logo} alt="logo" height="50px"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mt-2">
          <Link className="text-dark me-5" to="/order"><i class="fas fa-shopping-cart"></i></Link>
        </li>
        <li class="nav-item mt-2">
        <Link style={{textDecoration: 'none'}} className="text-dark me-5" to="/signin">Signin</Link>
        </li>
        <li class="nav-item">
        <Link to="/signin"><button type="button" class="btn btn-danger rounded-pill">Sign up</button>
</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;