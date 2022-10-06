import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

const Gallery = () => {
    return (
        <div className='container'>
            <h3 className='text-white text-center fw-bold'>Intro Of PCIU</h3>
            <hr className='text-white w-25 mx-auto' />
            <YoutubeEmbed embedId="9ugUd4MicYg" />
        </div>
    );
};

export default Gallery;