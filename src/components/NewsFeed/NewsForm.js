import React from 'react';
import { useForm } from 'react-hook-form';
const NewsForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/posts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        alert('your post is succesfully added');
        window.location.reload(false);

    };
    return (
        <div>
            <div className='card bg-dark border w-75  mx-auto p-5 '>
                <form onSubmit={handleSubmit(onSubmit)} className=" text-center  ">

                    <div className="inputs-form">
                        <h6 className='text-white fw-bold text-start '>Name</h6>
                        <input className="form-input" required type="text" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                        <h6 className='text-white fw-bold text-start mt-4'>Department Name</h6>
                        <input placeholder='department name' required {...register("department")} className="form-input" type="text" />

                        <h6 className='text-white fw-bold text-start mt-4'>Batch Name</h6>
                        <input placeholder='batch name' required {...register("Supply")} className="form-input" type="text" />




                        <h6 className='text-white fw-bold text-start mt-4'>Message</h6>
                        <textarea {...register("message", { required: true, maxLength: 6000 })} required name="message" className='p-3 w-100' />





                        <button
                            className='btn btn-outline-light mt-5' type="submit">Add Post
                         {/* <ToastContainer /> */}


                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsForm;