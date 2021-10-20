import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css'

const Header = () => {
  const { user,logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-container py-4">
        <div className="container-fluid">
        {/* <NavLink className="title fs-3 fw-bold text-danger fst-italic px-2 py-1 me-5" to="/Home">Cooking Studio <FontAwesomeIcon icon={faUtensils} /></NavLink> */}
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <div className="nav-container m-2">
                <NavLink className="single-nav fw-bold text-dark border border-3 border-info rounded-3 px-2 py-1 me-5" to="/Home">Home</NavLink>

                <NavLink className="single-nav fw-bold text-dark border border-3 border-info rounded-3 px-2 py-1 me-5" to="/About">About</NavLink>

                <NavLink className="single-nav fw-bold text-dark border border-3 border-info rounded-3 px-2 py-1 me-5" to="/Services">Services</NavLink>
                
                <NavLink className="single-nav fw-bold text-dark border border-3 border-info rounded-3 px-2 py-1 me-5" to="/Contact">Contact</NavLink>

                <NavLink className="single-nav fw-bold text-dark border border-3 border-info rounded-3 px-2 py-1 me-5" to="/Login">Login</NavLink>
               
                
                {user?.email && <button onClick={logout}>Log Out</button>}
                
                </div>
            </ul>
          </div>
        </div>
      </nav>


        /*<div className="nav-container">
            <div className="navbar">
                <div className="container-fluid">
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/Contact">Contact Us</NavLink>
                </div>

        </div>
    </div>*/
        
    );
};

export default Header;
