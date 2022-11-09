import React, { useState, useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ShowNewmember = (props) => {
    const { _id, name, imageLink, phone, description, Supply, department } = props.member;
    const [mems, setMems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/newmembers")
            .then(res => res.json())
            .then(data => setMems(data))
    }, []);
    const id = useParams();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete and reload the page after delete?');
        if (proceed) {
            const url = `http://localhost:4000/newmembers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = mems.filter(mem => mem._id !== id);
                    toast.success('data deleted');
                    setMems(rest);
                    window.location.reload(false);
                })
        }
    }
    return (
        <div>
            <div>

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
                        <Button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete Id
            <ToastContainer></ToastContainer>
                        </Button>

                    </Card>
                </Col>

            </div>
        </div>
    );
};

export default ShowNewmember;