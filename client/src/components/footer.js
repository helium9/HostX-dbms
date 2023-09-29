import React, {useState} from 'react'

import git2 from "../images/github2.svg"
import PropTypes from 'prop-types'



export default function Footer(){
return (
<><div className="grid space-y-4">
    <hr className=' invisible sm:visible w-full mx-auto h-px my-2 bg-gray-200 border-0'></hr>
    
    <div className=" invisible sm:visible flex-row flex mx-10 md:mx-20 xl:mx-24">
        <div className="font-[poppins] italic font-semibold text-6xl justify-self-center self-center block ">HostX<sup className='font-thin not-italic'>®</sup></div>
        <img src={git2} className='mx-4'></img>
        <div className='grid grid-cols-2 gap-4 gap-x-0 box-content justify-self-end  ml-auto '>
            <div className='font-[poppins]  self-left '>Home</div>
            <div className='font-[poppins]  self-left '>Contact Us</div>
            <div className='font-[poppins]  self-left '>Docs</div>
            <div className='font-[poppins]  self-left '>About Us</div>
            <div className='font-[poppins]  self-left '>Help</div>
            <div className='font-[poppins]  self-left '>Results</div>
            
        </div>
        
    </div>
    <div className=' grid'>
    <hr className='  w-3/4 sm:w-4/5 xl:w-5/6 mx-auto h-px my-2 border-0.25 border-grey-500'></hr>

    
    <div className='justify-self-center font-[poppins] self-center text-xs'>HostX • 2023 • All rights reserved</div>
    
    </div>
    
</div></>);
}