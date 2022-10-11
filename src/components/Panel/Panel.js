import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import ShowPanel from './ShowPanel';

const Panel = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/members')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);
    return (
        <div className='container mb-3'>
            <div className='row'>
                {
                    members ? members.map(member => <ShowPanel key={member.id} member={member}></ShowPanel>) : <Loading />

                }
            </div>
        </div>
    );
};

export default Panel;