import React from 'react';

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register Here</h2>
            <form className="row g-3">
  <div className="col-12">
    <label for="inputAddress" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div className="col-12">
    <label for="" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Register</button>
  </div>
</form>
           
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;