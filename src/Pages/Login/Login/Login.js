import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="m-5 text-center">
            <img src={logo} alt="" className="w-25"/>
            <div className="d-flex justify-content-center mt-5">
            <form className="w-25">
  <div class="mb-3">
   <input type="text" class="form-control bg-light" placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
  </div>
  <div class="mb-3">
    <input type="email" class="form-control bg-light" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <input type="password" class="form-control bg-light" placeholder="Password" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <input type="password" class="form-control bg-light" placeholder="Confirm password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-danger px-5 mb-3" style={{height:"50px", width:"310px"}}>Sign in</button>
  <Link style={{textDecoration: "none"}} to="/login"><h6 className="text-danger">Already have an account</h6></Link>
</form>
            </div>
            <button onClick={signInUsingGoogle} type="button" className="btn btn-warning mb-5"><i class="fab fa-google"></i></button>
        </div>
    );
};

export default Login;