import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import ShowDeltepost from './ShowDeltepost';

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
                    posts ? posts.map(post => <ShowDeltepost key={post.id} post={post}></ShowDeltepost>) : <Loading />

                }
            </div>
        </div>
    );
};

export default PostPanelDelte;