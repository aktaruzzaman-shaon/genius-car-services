import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = ()=>{
        navigate('/login')
    }
    const handleRegister = event =>{
        event.prevenDefault();
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: "ceneter"}}>Plz register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name='password' id='' placeholder='Password' required/>
                <input type="button" value="Register" />
            </form>
            <p>Already have an account ? <Link className='text-danger pe-auto text-decoration-none' to={'/login'} onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;