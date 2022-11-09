import React from 'react';
import '../NewsFeed/NewsheadPanel.css';
const NewsHeadPanel = () => {
    return (
        <div>
            <h3 className='text-white mx-auto my-2'>Our Estimed Faculty Members</h3>
            <div className='row'>

                <div className='col-sm-4 text-white'>
                    <img className='w-50 imgNewsHead' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30ejsVhxfVnuWp1OQkiogpMYmXWDPir_JloqYP3atc722gRCMFbXSOYzL7yC0ncA4G2Y&usqp=CAU" alt="" />
                    <h6>Dr. Muhammed Monjurl Islalm</h6>
                    <p><i>Phd in Data Structure & Machine Learning</i></p>
                    <p><i>Harvard</i></p>

                </div>
                <div className='col-sm-4 text-white'>
                    <img className='w-50 imgNewsHead' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4P1OxYpn3r7Rj1lXBHsbx6ZnppaXOO_cEh2zhappwuGUbUSqC5b4-I7IhUbKQrPvKlQ&usqp=CAU" alt="" />
                    <h6>Dr. Muhammed Monjurl Islalm</h6>
                    <p><i>Phd in Data Science</i></p>
                    <p><i>Oxford</i></p>

                </div>
                <div className='col-sm-4 text-white'>
                    <img className='w-50 imgNewsHead' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGfRA7BOHEIFxtFzTNyqfWYc-zYSPaTwuHRW072bLhLoeO6c0FI2KuZAULPCUQqi8B8U&usqp=CAU" alt="" />
                    <h6>Dr. Muhammed Monjurl Islalm</h6>
                    <p><i>Phd in Web.30 & BlockChain-Application</i></p>
                    <p><i>MIT</i></p>

                </div>
             
            </div>
            <hr className='text-white' />
        </div>
    );
};

export default NewsHeadPanel;