import React, { useState, useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ShowDeltepost = ({ post }) => {
    const { _id, name, department, message } = post;
    const [mems, setMems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then(res => res.json())
            .then(data => setMems(data))
    }, []);

    const id = useParams();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete and reload the page after delete?');
        if (proceed) {
            const url = `http://localhost:4000/posts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = mems.filter(mem => mem._id !== id);
                    toast.success('post deleted');
                    setMems(rest);
                    window.location.reload(false);
                })
        }
    }
    return (
        <div className='mt-2'>
            <div className='card border bg-black p-4 '>
                <blockquote className='text-white text-start blockquote'> <strong>{name}:</strong> {message}
                </blockquote>
                <div className='d-flex justify-content-end align-items-center text-white'>
                    <hr className='text-white w-25' />
                    <h6 className='ms-1'>Name:{name}</h6>
                </div>
                <h6 className='text-white text-end'>Departmet:{department}</h6>
                <h6 className='text-white text-end'>Id No:1234</h6>
                <Button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete post
               <ToastContainer></ToastContainer>
                </Button>
            </div>
        </div>
    );
};

export default ShowDeltepost;


