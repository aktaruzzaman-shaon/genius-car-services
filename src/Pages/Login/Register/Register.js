import React from 'react';

const Register = () => {
    return (
        <div className='register-form'>
            <h2>Plz register</h2>
            <form action="">
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name='password' id='' placeholder='Password' required/>
                <input type="button" value="Register" />
            </form>
        </div>
    );
};

export default Register;