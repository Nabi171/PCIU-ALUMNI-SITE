import React from 'react';
import img from '../images/imagePciu.jpg';
import { useForm } from 'react-hook-form';
const NewsFeed = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className='container bg-black rounded'>
            <div>
                <h5 className='text-white fw-bold pt-2'>Wellcome to PCIU News Feed</h5>
                <hr className='text-white w-50 mx-auto' />
                <img src={img} className='container-fluid' alt="" />
                <p className='text-start text-white p-2'>Since the establishment, Port City International University has been focusing on assisting the students in facing the challenges of the ever advancing world. PCIU is a platform where students can rise to the highest level of their capability. It provides an outstanding and supportive environment for both undergraduate and postgraduate students. A talented and dedicated group of academics provide guidance and tutelage the students need to pursue their research and academic goals. The dynamic teaching and learning environment of PCIU brims with talent, creativity and international connections. PCIU has been doing excellent community services by engaging the students</p>
            </div>

            <div>
                <form className="container-formTwo text-center  ">

                    <div className="inputs-form">

                        <input className="form-input" required type="text" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />


                        <input placeholder='department name' required {...register("department")} className="form-input" type="text" />


                        <input placeholder='batch name' required {...register("Supply")} className="form-input" type="text" />


                        <input placeholder='phone number' required {...register("phone")} className="form-input" type="number" />


                        <input placeholder='home address' required {...register("description")} className="form-input" type="text" />


                        <input placeholder='you can use imageBB for hosting your image' required  {...register("imageLink")} className="form-input" type="text" />

                        <button
                            className='form-btn' type="submit">Add Data
     {/* <ToastContainer /> */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsFeed;