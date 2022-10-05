import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
const OtherLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorhandleing;
    if (error || error1) {
        errorhandleing =
            <p className='text-danger'>Error: {error ?.message} {error1 ?.message}</p>

    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/mainHome')
    }
    return (
        <div>

            <div>
                <h4>Access another way!!</h4>
                <div >
                    <button
                        onClick={() => signInWithGithub()}
                        className='btn btn-info d-block mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src='https://raw.githubusercontent.com/Nabi171/scientific-zone/main/src/components/Others/github.png' alt="" /> <span className='px-2'>Github Sign In</span></button>

                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-info d-block mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src='https://raw.githubusercontent.com/Nabi171/scientific-zone/main/src/components/Others/gogle.png' alt="" /> <span className='px-2'>Goggle Sign In</span></button>
                </div>
                {errorhandleing}
            </div>
        </div>
    );
};

export default OtherLogin;