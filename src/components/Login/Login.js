import React, { useState } from 'react';
import '../Login/Login.css';
import OtherLogin from '../Others/OhterLogin';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
// import OthersLogin from '../Others/OthersLogin';
// import { AiOutlineExclamationCircle } from "react-icons/ai";
// import Loading from '../Loading/Loading';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    if (loading) {
        // <Loading />
    }

    const handlePassword = e => {
        SetPassword(e.target.value);
    }

    const handleUser = async (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Please Put a Email');
        }
        if (!password) {
            setPasswordError('Please Put a password');
        }
        if (!email || !password) {
            return;
        }
        await signInWithEmailAndPassword(email, password);
    }





    return (
        <div className='container my-4'>
            <form onSubmit={handleUser} c className="container-form text-center form-all">
                <div className="form-title">LOGIN</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" />
                    {/* {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>} */}

                    <label className='form-label'>PASSWORD</label>
                    <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" />
                    {/* {passwordError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordError}</p>} */}
                    <br />
                    <button className='form-btn' type="submit">LOGIN</button>
                </div>
            </form>
            <br />
            <h4 className='text-white'>Access in anotherway</h4>
            <hr className='w-25 mx-auto text-white' />
            <OtherLogin></OtherLogin>

        </div>
    );
};

export default Login;