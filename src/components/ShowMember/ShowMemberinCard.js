import React from 'react';
import { Col, Card } from 'react-bootstrap';
import '../ShowMember/ShowMemberinCard.css';
const ShowMemberinCard = (props) => {
    const { name, imageLink, _id, phone, description, Supply, department } = props.member;

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

                </Card>
            </Col>
        </div>
    );
};

export default ShowMemberinCard;