import React, { useState } from 'react';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import OtherLogin from '../Others/OhterLogin';
import Loading from '../Loading/Loading';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [confirmPassword, SetConfirnPassword] = useState();
    const [error, setError] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const navigate = useNavigate();
    if (loading) {
        <Loading />
    }
    if (user) {
        navigate('/mainHome')
    }
    const handlePassword = e => {
        SetPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        SetConfirnPassword(e.target.value);
    }
    const handleUser = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('your password didnt match');

        }
        if (password.length < 6) {
            setError('your password is too short');
        }

        if (email && password && confirmPassword) {

            await createUserWithEmailAndPassword(email, password);
        }

        // await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification()
        alert('Sent email');
    }

    return (
        <div className='form-all mx-auto container mt-4' >
            <form onSubmit={handleUser} className="container-form text-center form-all">
                <div className="form-title">Sign Up</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" required />
                    <label className='form-label'>PASSWORD</label>
                    <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" required />
                    <label className='form-label'>CONFIRM PASSWORD</label>
                    <input onBlur={handleConfirmPassword} className="form-input" type="password" placeholder="Min 6 charaters long" required />
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <button className='form-btn' type="submit">SIGN UP</button>
                </div>

            </form>
            <br />
            <p className='fw bold text-white'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none fw-bold'>Please Login</Link></p>


            <h4 className='text-white'>Access in anotherway</h4>
            <hr className='w-25 mx-auto text-white' />
            <OtherLogin></OtherLogin>
        </div>



    );
};

export default SignUp;