import React from 'react';
import { useForm } from 'react-hook-form';

const Subpaneladd = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/newmembers`;
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
        alert('your id is succesfully added');
        window.location.reload(false);

    };
    return (
        <div>
            <div >
                <form onSubmit={handleSubmit(onSubmit)} className="container-formTwo text-center  ">

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

export default Subpaneladd;