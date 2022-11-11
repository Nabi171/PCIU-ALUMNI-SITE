import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const PciuLocation = () => {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default PciuLocation;
