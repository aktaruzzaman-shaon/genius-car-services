import React from 'react';
import googleIcon from '../../../images/Social/googleIcon.png'
import facebook from '../../../images/Social/facebook.png'
import github from '../../../images/Social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>

            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={googleIcon} alt="" />
                    Google Sign In
                </button>

                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    Facebook Sign In
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 d-block mx-auto'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;