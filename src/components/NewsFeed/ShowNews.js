import React from 'react';

const ShowNews = ({ post }) => {
    const { name, department, message } = post;
    return (
        <div className='col-lg-12'>
            <div className='card border bg-black p-4 '>
                <blockquote className='text-white text-start blockquote'> <strong>{name}:</strong> {message}
                </blockquote>
                <div className='d-flex justify-content-end align-items-center text-white'>
                    <hr className='text-white w-25' />
                    <h6 className='ms-1'>Name:Saif</h6>
                </div>
                <h6 className='text-white text-end'>Departmet:{department}</h6>
                <h6 className='text-white text-end'>Id No:1234</h6>
            </div>
        </div>
    );
};

export default ShowNews;