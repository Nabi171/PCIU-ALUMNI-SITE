import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import ShowNewmember from './ShowNewmember';
const SubNewmemberDelete = () => {
    const [members, setNewMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/newmembers')
            .then(res => res.json())
            .then(data => setNewMembers(data));
    }, []);
    return (
        <div className='container mb-3'>
            <div className='row'>
                {
                    members ? members.map(member => <ShowNewmember key={member.id} member={member}></ShowNewmember>) : <Loading />

                }
            </div>
        </div>
    );
};

export default SubNewmemberDelete;