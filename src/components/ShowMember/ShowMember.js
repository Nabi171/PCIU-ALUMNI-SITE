import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import ShowMemberinCard from './ShowMemberinCard';

const ShowMember = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/newmembers')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
        <div className='container mb-3'>
            <div className='row'>
                {
                    members ? members.map(member => <ShowMemberinCard key={member.id} member={member}></ShowMemberinCard>) : <Loading />

                }
            </div>
        </div>
    );
};

export default ShowMember;