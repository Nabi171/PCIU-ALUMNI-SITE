import React, { useState, useEffect } from 'react';
import { Col, Card, Button, ToastContainer } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
const ShowPanel = (props) => {

    const { _id, name, imageLink, phone, description, Supply, department } = props.member;
    const [mems, setMems] = useState([]);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch("http://localhost:4000/members")
            .then(res => res.json())
            .then(data => setMems(data))
    }, []);
    const id = useParams();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete and reload the page after delete?');
        if (proceed) {
            const url = `http://localhost:4000/members/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = mems.filter(mem => mem._id !== id);
                    setMems(rest);
                })
        }
    }
    // post data from approve
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
        alert('your id is succesfully added')

    };

    // const notify = () => {
    //     // toast("Default Notification !");

    //     toast.success("add your data succesfully !", {
    //         position: toast.POSITION.TOP_CENTER
    //     });

    //     // toast.error("Error Notification !", {
    //     //   position: toast.POSITION.TOP_LEFT
    //     // });

    //     // toast.warn("Warning Notification !", {
    //     //   position: toast.POSITION.BOTTOM_LEFT
    //     // });

    //     // toast.info("Info Notification !", {
    //     //   position: toast.POSITION.BOTTOM_CENTER
    //     // });

    //     // toast("Custom Style Notification with css class!", {
    //     //   position: toast.POSITION.BOTTOM_RIGHT,
    //     //   className: 'foo-bar'
    //     // });
    // };


    return (
        <div className='row align-items-center gy-4 mx-auto'>
            <div className='col-lg-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="container-formTwo text-center  ">

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
                            className='form-btn' type="submit">Add Data
                         {/* <ToastContainer /> */}
                        </button>
                    </div>
                </form>
            </div>
            <div className='col-lg-6'>
                {/* <div className='col-lg-4 col-12 col-sm-12 col-md-6 g-4 '> */}
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <Col>
                    <Card className='cards-container card-container selected-container'>
                        <Card.Img variant="top" className='img-container   mx-auto  ' src={imageLink} />
                        <Card.Body>
                            <Card.Title >Student Name:{name}</Card.Title>
                            <hr />
                            <Card.Text>
                                <span className='fw-bold'>Department Name:</span>{department}
                            </Card.Text>


                            <Card.Text>
                                <span className='fw-bold'>Batch No:</span>{Supply}
                            </Card.Text>
                            <hr />
                            <Card.Text>
                                <span className='fw-bold'>Address:</span>{description}
                            </Card.Text>
                            <Card.Text>
                                <span className='fw-bold'>Phone-Number:</span>{phone}
                            </Card.Text>

                        </Card.Body>
                        <Button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete Id</Button>
                        {/* <button
                        className='btn btn-danger mt-4' type="submit">Approve

                    </button> */}
                    </Card>
                </Col>
                {/* </form> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default ShowPanel;