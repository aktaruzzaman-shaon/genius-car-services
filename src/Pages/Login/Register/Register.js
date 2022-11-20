import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        const success = await updateProfile({ displayName: name });
        console.log('Update porfile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: "ceneter" }}>Plz register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email Address' required />
                <input type="password" name='password' placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? `text-primary` : `text-danger`} htmlFor="terms">Accept Genius car terms and condition</label> */}
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accept Genius car terms and condition</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-3' type="submit" value="Register" />
            </form>

            <p>Already have an account ? <Link className='text-primary pe-auto text-decoration-none' to={'/login'} onClick={navigateLogin}>Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;