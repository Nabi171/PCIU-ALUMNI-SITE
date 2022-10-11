import React, { useState, useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const ShowPanel = (props) => {

    const { name, imageLink, _id, phone, description, Supply, department } = props.member;
    const [mems, setMems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/members")
            .then(res => res.json())
            .then(data => setMems(data))
    }, []);
    const nd = useParams();
    const handleDelete = nd => {
        const proceed = window.confirm('Are you sure to delete and reload the page after delete?');
        if (proceed) {
            const url = `http://localhost:4000/members/${nd}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = mems.filter(mem => mem._id !== nd);
                    setMems(rest);
                })
        }
    }
    return (
        <div className='col-lg-4 col-12 col-sm-12 col-md-6 g-4 '>
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
                </Card>
            </Col>
        </div>
    );
};

export default ShowPanel;