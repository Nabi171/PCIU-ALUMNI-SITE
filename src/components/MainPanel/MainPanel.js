import React from 'react';
import Panel from '../Panel/Panel';
import Subpaneladd from './Subpaneladd';
import SubNewmemberDelete from './SubNewmemberDelete';

const MainPanel = () => {
   return (
      <div className='container'>
         <h5 className='text-danger mx-auto fw-bold'>Add Members</h5>
         <hr className='text-white' />
         {/* add member panel  */}
         <div className='row'>
            <div className='col-lg-6'>
               <Subpaneladd></Subpaneladd>
            </div>
            <div className='col-lg-6'>
               <Panel></Panel>
            </div>

            {/* manage member panel */}
            <div className='mt-4'>
               <h5 className='text-danger mx-auto fw-bold'>Manage Members</h5>
               <hr className='text-white' />
            </div>
            <SubNewmemberDelete></SubNewmemberDelete>

         </div>
      </div>
   );
};

export default MainPanel;