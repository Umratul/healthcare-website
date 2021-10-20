import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <p>Don't have any account?</p>
            <Link to ="/register">Register now!</Link>
        </div>
    );
};

export default Login;