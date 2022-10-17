import React from 'react';
import Panel from '../Panel/Panel';
import Subpaneladd from './Subpaneladd';

const MainPanel = () => {
    return (
       <div className='container'>
            <div className='row'>
           <div className='col-lg-6'>
           <Subpaneladd></Subpaneladd>
           </div>
           <div className='col-lg-6'>
           <Panel></Panel>
           </div>
           
        </div>
       </div>
    );
};

export default MainPanel;