import React, {useState} from 'react'

import git2 from "../images/github2.svg"
import PropTypes from 'prop-types'



export default function Footer(){
return (<div>
    <hr className='w-11/12 mx-auto h-px my-2 bg-gray-200 border-0'></hr>
    <div className="flex-row flex ">
        <div className="font-[poppins] italic font-semibold text-6xl justify-self-center self-center block">HostX</div>
        <img src={git2}></img>
        <div className='grid grid-cols-2 gap-0.25 gap-x-0 content-end box-content content-end '>
            <div className='font-[poppins] justify-self-center self-center box-content'>Home</div>
            <div className='font-[poppins] justify-self-center self-center box-content'>Contact Us</div>
            <div className='font-[poppins] justify-self-center self-center box-content'>Docs</div>
            <div className='font-[poppins] justify-self-center self-center box-content'>About Us</div>
            <div className='font-[poppins] justify-self-center self-center box-content'>Help</div>
            
        </div>
    </div>
    
</div>);
}