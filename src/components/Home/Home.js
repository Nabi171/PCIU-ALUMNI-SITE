import React from 'react';
import '../Home/Home.css';
import imgOne from '../images/tayub.jpg';
const Home = () => {
    return (
        <div className='main banner-img'>
            <div className='banner-overlay'>
                <div className='col-lg-12 col-sm-12 col-md-12'>
                    <p className='heading text-white fw-bold'>" Welcome To PCIU Alumni Association "</p>

                    <p class="nevr text-white"> - Never Forget Your Roots.</p>
                </div>
                <div className='row align-items-center'>
                    <div className='col-lg-5 col-12 col-md-6 col-sm-12 '>
                        <img className='img-fluid img11' src={imgOne} alt="" />
                    </div>
                    <div className='col-lg-5 col-12 col-md-6 col-sm-12'>
                        <h3 class="textbig text-white">Message from the President</h3>
                        <hr className='text-white' />
                        <p className='text-align-justify text-white'>
                            I welcome you to the new website of PCIU Alumni.
                                           If you are a graduate of PCIU who is yet to become a member of this organization,
                                           I earnestly invite you to become a member– it is easy and inexpensive.
                                           Membership enables you to enjoy being a part of the PCIU Alumni community and related fellowship in
                                           various forms.
                                           Take advantage of the opportunity that this organization offers to all Alumni of PCIU,
                                           our dear alma mater, to give our loving attention and support that she deserves for achieving greater
                                           glory and world class status.
                                           Be “Proud to be a PCIU Graduate!"
              <br /> <br />
                            <strong>- Mohammad Tayub ,Founder & Chief Director at One Man Army</strong>
                        </p>
                    </div>
                </div>
                <hr className='text-white' />

                <h3 className='text-center text-white'>At a glance</h3>
                <div className='row text-center text-white'>
                    <div className='col-lg-3 col-md-6 col-6 col-sm-6'>
                        <h5>30k+</h5>
                        <h5>Registered Alumni</h5>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6 col-sm-6'>
                        <h5>50</h5>
                        <h5>Sessions</h5>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6 col-sm-6'>
                        <h5>19</h5>
                        <h5>Departments</h5>
                    </div>
                    <div className='col-lg-3 col-md-6 col-6 col-sm-6'>
                        <h5>120+</h5>
                        <h5>Faculties</h5>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Home;