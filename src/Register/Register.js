import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="email"></input> <br/>
                <input type="password"></input> <br/>
                <input type="submit" value="Register"></input> <br/>
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;