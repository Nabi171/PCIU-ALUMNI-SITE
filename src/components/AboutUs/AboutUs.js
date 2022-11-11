import React from 'react';
import img from '../images/abt.png'
import PciuMap from '../GoogleMap/PciuMap';
// import PciuLocation from '../GoogleMap/PciuLocation';
const AboutUs = () => {
    return (
        <div >
            {/* gogleMap */}
            <h5 className='text-white mx-auto fw-bold mt-4'>Google Location Of PCIU</h5>
            <hr className='text-white w-25 mx-auto' />
            <PciuMap></PciuMap>


            {/* abtus */}
            <h5 className='text-white mx-auto fw-bold mt-4'>Contact</h5>
            <hr className='text-white w-25 mx-auto' />
            <div className='row align-items-center container mt-4 mb-4' >
                <div className='col-lg-6 col'>
                    <img className='w-75' src={img} alt="" />
                </div>
                <div className='col-lg-6 text-dark card p-5'>
                    <h5 className='fw-bold'>Contact Us</h5>
                    <hr className='text-dark mx-auto w-50' />
                    <p><strong>Location:</strong> 7-14, Nikunja Housing Society, South Khulshi, Chattogram .</p>
                    <p><strong>Contact:</strong> 88 02333369877
                88 02333369899</p>
                    <p><strong>Mobile:</strong> 01851120791, 01773225500, 01773225511</p>
                    <p><strong>Email:</strong> sakib@gmail.com</p>
                    <hr className='text-dark mx-auto w-50' />
                    <strong className='text-danger'>Authorized By:Sakibul Islam,Dept Cse</strong>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;