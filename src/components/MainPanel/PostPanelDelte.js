import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

const PostPanelDelte = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <div>
            <div className='row'>
                {
                    members ? members.map(member => <ShowPanel key={member.id} member={member}></ShowPanel>) : <Loading />

                }
            </div>
        </div>
    );
};

export default PostPanelDelte;