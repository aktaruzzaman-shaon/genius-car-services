import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = ()=>{
        navigate('/login')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: "ceneter"}}>Plz register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name'/>
                <input type="email" name='email' placeholder='Email Address' required />
                <input type="password" name='password' placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link className='text-danger pe-auto text-decoration-none' to={'/login'} onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;