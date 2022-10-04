import React from 'react';
import '../Login/Login.css';
import OtherLogin from '../Others/OhterLogin';

const Login = () => {
    return (
        <div className='container my-4'>
            <form className="container-form text-center form-all">
                <div className="form-title">LOGIN</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input className="form-input" type="email" placeholder="example@test.com" />
                    {/* {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>} */}

                    <label className='form-label'>PASSWORD</label>
                    <input className="form-input" type="password" placeholder="Min 6 charaters long" />
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