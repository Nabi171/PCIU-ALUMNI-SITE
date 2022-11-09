import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='card bg-black border'>
                <img className='w-50 border m-4 mx-auto' src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png?compress=1&resize=400x300&vertical=top" alt="" srcset="" />
                <hr className='text-white' />
                <Link to='/mainHome'>
            
                    <button className='btn btn-danger mb-1'>
                        Go Back Home
                </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;