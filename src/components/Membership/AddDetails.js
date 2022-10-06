import React from 'react';
import { useForm } from 'react-hook-form';
import '../Membership/Addetails.css';
const AddDetails = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className='container mb-5'>
            <form className="container-formTwo text-center form-all ">
                <div className="form-title">Add Your Deatils</div>
                <div className="inputs-form">
                    <label className='form-label'>Your Name</label>
                    <input className="form-input" type="text" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                    <label className='form-label'>Department Name</label>
                    <input placeholder='department name' {...register("department")} className="form-input" type="text" />

                    <label className='form-label'>Batch Name</label>
                    <input placeholder='batch name' {...register("Supply")} className="form-input" type="text" />

                    <label className='form-label'>Phone Number</label>
                    <input placeholder='phone number' {...register("phone")} className="form-input" type="number" />

                    <label className='form-label'>Home Address</label>
                    <input placeholder='home address' {...register("description")} className="form-input" type="text" />

                    <label className='form-label'>Img Link of youself</label>
                    <input placeholder='you can use imageBB for hosting your image' {...register("imageLink")} className="form-input" type="text" />

                    <button
                        className='form-btn' type="submit">Add Data</button>
                </div>
            </form>
        </div>
    );
};

export default AddDetails;
