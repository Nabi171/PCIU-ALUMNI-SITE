import React, { useState, useEffect } from 'react';
import ShowNews from './ShowNews';
import Loading from '../Loading/Loading';

const StuNews = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <div className=' d-flex flex-column-reverse  '>
            {
                posts ? posts.map(post => <ShowNews key={post.id} post={post}></ShowNews>) : <Loading />

            }
        </div>
    );
};



export default StuNews;