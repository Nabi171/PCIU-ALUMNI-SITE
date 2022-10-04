import React from 'react';
import '../Events/Events.css';
import imgConvo from '../images/Convo1.jpg';
// import fstconvo from '../images/1stconvo.jpg';
// import footchamp from '../images/football.png';
// import orinFall from '../images/Orientation fall-22.png';
// import wallshw from '../images/.png';
// import iftar from '../images/iftar.jpg';
const Events = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='text-danger'>Popular Events</h1>
                <hr className=' w-25 text-white mx-auto hrpopular' />
            </div>
            <div className='row gy-4'>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1 '>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 col-sm-12 col-md-6      container1'>
                    <img className='img1 img-fluid' src={imgConvo} alt="" srcset="" />
                    <div className="overlay1">
                        <div className="text1">First Convocation Photosession</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Events;