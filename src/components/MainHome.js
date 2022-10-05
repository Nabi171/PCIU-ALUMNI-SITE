import React from 'react';
import Home from './Home/Home';
import Events from './Events/Events';
import Interest from './Interest/Interest';
import Membership from './Membership/Membership';
import Facilityr from './Facility/Facilityr';

const MainHome = () => {
    return (
        <div>
            <Home />
            <Interest></Interest>
            <Events></Events>
            <Facilityr></Facilityr>
        </div>
    );
};

export default MainHome;