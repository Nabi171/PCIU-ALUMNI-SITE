import React from 'react';
import img from '../images/imagePciu.jpg';
const NewsFeed = () => {
    return (
        <div className='container bg-black rounded'>
            <div>
                <h5 className='text-white fw-bold pt-2'>Wellcome to PCIU News Feed</h5>
                <hr className='text-white w-50 mx-auto' />
                <img src={img} className='container-fluid' alt="" />
                <p className='text-start text-white p-2'>Since the establishment, Port City International University has been focusing on assisting the students in facing the challenges of the ever advancing world. PCIU is a platform where students can rise to the highest level of their capability. It provides an outstanding and supportive environment for both undergraduate and postgraduate students. A talented and dedicated group of academics provide guidance and tutelage the students need to pursue their research and academic goals. The dynamic teaching and learning environment of PCIU brims with talent, creativity and international connections. PCIU has been doing excellent community services by engaging the students</p>
            </div>
            <div className='card bg-dark border w-25  mx-auto pt-4'>
                <form action="">
                    <h6 className='text-white fw-bold text-end me-5'>Name</h6>
                    <input type="text" />
                    <br /><br />
                    <h6 className='text-white fw-bold text-end me-5'>Write Your Post</h6>
                    {/* <textarea type='text' className='w-75'></textarea> */}

                    <textarea required name="message" className='p-3' />
                    <br />
                    <input className='btn btn-outline-info mt-3 mb-3' type="submit" value="Add Post" />

                </form>
            </div>
        </div>
    );
};

export default NewsFeed;