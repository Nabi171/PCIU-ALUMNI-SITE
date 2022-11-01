import React from 'react';
import img from '../images/imagePciu.jpg';
import NewsForm from './NewsForm';
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
            <div className='card border bg-black p-4 mb-3'>
                <blockquote className='text-white text-start blockquote'> <strong>Saif:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores distinctio, placeat fugiat harum, velit alias sit dolorum eveniet, ea impedit ab ipsa deserunt et. Vel rem tempora molestiae recusandae?
                </blockquote>
                <div className='d-flex justify-content-end align-items-center text-white'>
                    <hr className='text-white w-25' />
                    <h6 className='ms-1'>Name:Saif</h6>
                </div>
                <h6 className='text-white text-end'>Departmet:Cse</h6>
                <h6 className='text-white text-end'>Id No:1234</h6>
            </div>
            <div className='card border bg-black p-4 '>
                <blockquote className='text-white text-start blockquote'> <strong>Saif:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores distinctio, placeat fugiat harum, velit alias sit dolorum eveniet, ea impedit ab ipsa deserunt et. Vel rem tempora molestiae recusandae?
                </blockquote>
                <div className='d-flex justify-content-end align-items-center text-white'>
                    <hr className='text-white w-25' />
                    <h6 className='ms-1'>Name:Saif</h6>
                </div>
                <h6 className='text-white text-end'>Departmet:Cse</h6>
                <h6 className='text-white text-end'>Id No:1234</h6>
            </div>
        </div>
    );
};

export default NewsFeed;