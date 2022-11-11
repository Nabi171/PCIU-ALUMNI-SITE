import React from 'react';
import img from '../images/imagePciu.jpg';
import StuNews from './StuNews';
const NewsFeed = () => {

    return (
        <div className='container bg-black rounded mb-4 p-4'>
            <div>
                <h5 className='text-white fw-bold pt-2'>Wellcome to PCIU News Feed</h5>
                <hr className='text-white w-50 mx-auto' />
                <img src={img} className='container-fluid rounded' alt="" />
                <p className='text-start text-white p-2'>Since the establishment, Port City International University has been focusing on assisting the students in facing the challenges of the ever advancing world. PCIU is a platform where students can rise to the highest level of their capability. It provides an outstanding and supportive environment for both undergraduate and postgraduate students. A talented and dedicated group of academics provide guidance and tutelage the students need to pursue their research and academic goals. The dynamic teaching and learning environment of PCIU brims with talent, creativity and international connections. PCIU has been doing excellent community services by engaging the students</p>
            </div>
            <hr className='text-white' />
            <marquee behavior="" direction="" className='text-white'>
                Wellcome to Port City International University students News Section !!!  Wellcome to Port City International University students News Section !!!
                Wellcome to Port City International University students News Section !!!  Wellcome to Port City International University students News Section !!!

            </marquee>
            <hr className='text-white' />

            <StuNews></StuNews>
        </div>
    );
};

export default NewsFeed;