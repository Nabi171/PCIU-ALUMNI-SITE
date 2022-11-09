import React from 'react';
import Panel from '../Panel/Panel';
import Subpaneladd from './Subpaneladd';
import SubNewmemberDelete from './SubNewmemberDelete';

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
           <SubNewmemberDelete></SubNewmemberDelete>
           
        </div>
       </div>
    );
};

export default MainPanel;