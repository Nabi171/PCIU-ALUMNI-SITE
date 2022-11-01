import React from 'react';
import img from '../images/imagePciu.jpg';
import { useForm } from 'react-hook-form';
const NewsFeed = () => {
    const { register, handleSubmit } = useForm();
    const onsubmit = data => {
        const url = `http://localhost:4000/newmembers`;
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
        alert('your id is succesfully added');
        window.location.reload(false);
    }
    return (
        <div className='container bg-black rounded'>
            <div>
                <h5 className='text-white fw-bold pt-2'>Wellcome to PCIU News Feed</h5>
                <hr className='text-white w-50 mx-auto' />
                <img src={img} className='container-fluid' alt="" />
                <p className='text-start text-white p-2'>Since the establishment, Port City International University has been focusing on assisting the students in facing the challenges of the ever advancing world. PCIU is a platform where students can rise to the highest level of their capability. It provides an outstanding and supportive environment for both undergraduate and postgraduate students. A talented and dedicated group of academics provide guidance and tutelage the students need to pursue their research and academic goals. The dynamic teaching and learning environment of PCIU brims with talent, creativity and international connections. PCIU has been doing excellent community services by engaging the students</p>
            </div>
            <div className='card bg-dark border w-25  mx-auto pt-4'>
                <form onsubmit={handleSubmit(onsubmit)} action="">
                    <h6 className='text-white fw-bold text-end me-5'>Name</h6>
                    <input {...register("name", { required: true, maxLength: 20 })} type="text" />
                    <br /><br />
                    <h6 className='text-white fw-bold text-end me-5'>Name</h6>
                    <input {...register("name", { required: true, maxLength: 20 })} type="text" />
                    <br /><br />
                    <h6 className='text-white fw-bold text-end me-5'>Write Your Post</h6>
                    <textarea {...register("name", { required: true, maxLength: 20 })} required name="message" className='p-3' />
                    <br />
                    <input className='btn btn-outline-info mt-3 mb-3' type="submit" value="Add Post" />

                </form>
            </div>
        </div>
    );
};

export default NewsFeed;