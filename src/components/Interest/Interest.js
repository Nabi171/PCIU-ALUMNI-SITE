import React from 'react';
import img from '../images/interest.png'
import { Link } from 'react-router-dom';
const Interest = () => {
    return (
        <div className='row align-items-center container'>
            <div className='col-lg-6'>
                <img className='w-100' src={img} alt="" />
            </div>
            <div className='col-lg-6 text-white'>
                <h5 className='fw-bold'>Why you have to join there?</h5>
                <hr className='text-white mx-auto w-50' />
                <p>Pciu Alumni Associaltion where thounsands of stundents get connected with the reputed company,if you compplete your BSC. degree we will wellcomme you.Because we will try our best to get you a job.So if you new ,hurry up to complete your form and get connected with us.</p>
                <button className='btn btn-light '><Link className='text-decoration-none fw-bold text-black' to='/membership'>Join Now</Link></button>
            </div>
        </div>
    );
};

export default Interest;