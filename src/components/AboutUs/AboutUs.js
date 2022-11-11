import React from 'react';
import img from '../images/abt.png'
import PciuMap from '../GoogleMap/PciuMap';
// import PciuLocation from '../GoogleMap/PciuLocation';
const AboutUs = () => {
    return (
        <div >
            {/* gogleMap */}
            <h5 className='text-white mx-auto fw-bold mt-4'>Google Location Of PCIU</h5>
            <hr className='text-white w-25 mx-auto' />
            <PciuMap></PciuMap>


            <div className='container my-3'>

                <h5 className='text-white fw-bold text-start'>Organization & Management</h5>
                <hr className='text-white w-25 mx-end' />
                <p className='text-white text-start'>The <strong>
                    PCIU Alumni is guided by its Constitution in its organizational</strong> structure as well as its management system. The Constitution provides for a 3-tier structure in running the business of the organization. The first tier called the COUNCIL comprises all registered members of the organization. They elect every three years a group of members to take leadership in planning and executing the functions of PCIU Alumni. This group, the BOARD OF TRUSTEES (BOT), is a body of 30 Trustees 12 of whom come from PCIU faculty who are nominated by the university authority. The rest 18 are elected from among the Council members. The Trustees elect 12 office bearers from among themselves to form the EXECUTIVE COMMITTEE (EC) of PCIU Alumni, each having a specific designation and concomitant responsibility as prescribed in the Constitution. The EC is responsible to plan and execute various functions of PCIU Alumni under the policy guidance and supervision of the BOT. The EC can form various task-based Committees composed of Council members for implementing specific programs and activities of PCIU Alumni. The tenure of an elected/nominated Trustee of the BOT is three years and he/she can be reelected or renominated for consecutive two terms only. The election of the Trustees is held during the Annual General Meeting.

The Constitution of PCIU Alumni gives, among many other important information, details of the rules and regulations of how the BOT and EC are formed and the responsibilities that each member of them bears. The names of the current Trustees and their designations in the EC are given below.</p>
            </div>

            <div className='container my-3'>

                <h5 className='text-white fw-bold text-start'>
Members of the Board of Trustees (2019-2023)</h5>
                <hr className='text-white w-50 mx-end' />
                <p className='text-white text-start'>
                *Dr. Jamilur Reza Choudhury (CE 1963), President <br/>
*Dr. Md. Delwar Hossain (CE 1981), Coordinator & Treasurer 
                
Members of the Board of Trustees (2013-2016)

*Dr. Jamilur Reza Choudhury (CE 1963), President <br/>

*Dr. Md. Delwar Hossain (CE 1981), Coordinator & Treasurer <br/>

 

*Engr. Serajul Majid Mamoon (ChE 1966), Vice President, Liaison & Public Relations <br/>

*Dr. M M Shaidul Hasan (EEE 1974), Vice President, Research & Development<br/>

*Dr. Md. Mujibur Rahman (CE 1976), Vice President, Member Relation<br/>

*Engr. Muniruddin Ahmed (CE 1979), Vice President, Programs<br/>

*Dr. Sadiqul Islam Bhuiyan (CE 1963), Secretary General<br/>

*Engr. Md. Abdur Rouf (ME 1977), Secretary, Project Management<br/>

*Engr. Mahtab Uddin (EEE 1983), Secretary, Member Services<br/>

*Ar. Qazi M Arif (Arch 1989), Secretary, Publication & Communication<br/>

*Dr. Abdul Hasib Chowdhury (EEE 1992), Joint Secretary General<br/>

*Dr. N M Golam Zakaria, Secretary (NAME 1998), Secretary, Finance<br/>

 Dr. Shamim Z Bosunia (CE 1965)<br/>

 *Dr. A M M Safiullah (CE 1969)<br/>

 *Engr. A K M Shamsuddin (ME 1969)<br/>

 Ar. Mubasshar Hossain (Arch 1972)<br/>

Engr. Rahman Murshed (ChE 1975)<br/>

Engr. Md. Hamidul Hoque (EEE 1975)<br/>

Engr. Mohammad Abdul Awal (CE 1977)<br/>

Dr. Ishrat Islam (Arch 1991) <br/>

Dr. Mahmuda Naznin (CSE 1996) <br/>

-------------------------------------------- <br/>


*Names with asterisk are Trustees who are also members of the Executive Committee
                </p>
            </div>


            {/* abtus */}
            <h5 className='text-white mx-auto fw-bold mt-4'>Contact</h5>
            <hr className='text-white w-25 mx-auto' />
            <div className='row align-items-center container mt-4 mb-4' >
                <div className='col-lg-6 col'>
                    <img className='w-75' src={img} alt="" />
                </div>
                <div className='col-lg-6 text-dark card p-5'>
                    <h5 className='fw-bold'>Contact Us</h5>
                    <hr className='text-dark mx-auto w-50' />
                    <p><strong>Location:</strong> 7-14, Nikunja Housing Society, South Khulshi, Chattogram .</p>
                    <p><strong>Contact:</strong> 88 02333369877
                88 02333369899</p>
                    <p><strong>Mobile:</strong> 01851120791, 01773225500, 01773225511</p>
                    <p><strong>Email:</strong> sakib@gmail.com</p>
                    <hr className='text-dark mx-auto w-50' />
                    <strong className='text-danger'>Authorized By:Sakibul Islam,Dept Cse</strong>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;