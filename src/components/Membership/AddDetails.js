import React from 'react';
import { useForm } from 'react-hook-form';
import '../Membership/Addetails.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const AddDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/members`;
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
        // alert('your id is succesfully added')

    };

    const notify = () => {
        // toast("Default Notification !");

        toast.success("add your data succesfully !", {
            position: toast.POSITION.TOP_CENTER
        });

        // toast.error("Error Notification !", {
        //   position: toast.POSITION.TOP_LEFT
        // });

        // toast.warn("Warning Notification !", {
        //   position: toast.POSITION.BOTTOM_LEFT
        // });

        // toast.info("Info Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER
        // });

        // toast("Custom Style Notification with css class!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   className: 'foo-bar'
        // });
    };

    //sent to backend by post method 
    return (
        <div className='container mb-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="container-formTwo text-center form-all ">
                <div className="form-title">Add Your Deatils</div>
                <div className="inputs-form">
                    <label className='form-label'>Your Name</label>
                    <input className="form-input" type="text" placeholder='Name' required  {...register("name", { required: true, maxLength: 20 })} />

                    <label className='form-label'>Department Name</label>
                    <input placeholder='department name' required {...register("department")} className="form-input" type="text" />

                    <label className='form-label'>Batch Name</label>
                    <input placeholder='batch name' required  {...register("Supply")} className="form-input" type="text" />

                    <label className='form-label'>Phone Number</label>
                    <input placeholder='phone number' required  {...register("phone")} className="form-input" type="number" />

                    <label className='form-label'>Home Address</label>
                    <input placeholder='home address' required  {...register("description")} className="form-input" type="text" />

                    <label className='form-label'>Img Link of youself</label>
                    <input placeholder='you can use imageBB for hosting your image' {...register("imageLink")} className="form-input" type="text" />

                    <button
                        className='form-btn' onClick={notify} type="submit">Add Data
                         <ToastContainer />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDetails;
