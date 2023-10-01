import React from "react";
import FooterComponent from "../components/FooterComponent";

import NavbarComponent from "../components/NavbarComponent";
import pyramid from "../images/2_3pyramid.svg"
import donut from "../images/5_3donut.svg"
import strip from "../images/18_3strip.svg"
import wave from "../images/Line 1wave.svg"
import slice from "../images/Mask groupwatermelon.svg"
import person from "../images/Frame 36persons.svg"
import bgcombine from "../images/Frame 31cb.svg"
import {Card, CardBody,CardHeader,CardFooter,Link, Image, Button, Progress} from "@nextui-org/react";

export default function LandingPage(){
    return(<>
        <div className="relative flex flex-col min-h-screen">
          <NavbarComponent />
          <img className="absolute left-0 top-0 h-[200px] sm:w-3/4 sm:h-[250px] " src={wave}></img>
          <img className="absolute hidden lg:block left-[65%] top-[60px] w-[100px] h-[100px]" src={pyramid}></img>
          
          <img src={person} className="w-[120px]  h-[128px] left-3/4 top-[156px] sm:w-1/8 md:top-[60px] md:h-[185px] md:h-[280px] md:w-[20%] absolute"></img>
          <img src={slice} className="absolute w-1/8 h-[100px] top-[230px] sm:top-[280px] md:left-[7%] lg:left-[12%] xl:left-[14%]  left-1/8 "></img>
          <img src={strip} className="absolute w-[30%] h-[180px] hidden md:block top-[235px]  left-1/2"></img>
          <img src={donut} className="absolute w-[15%] h-[100px] left-[85%] top-[400px] md:left-[90%] xl:top-[100px] "></img>
          
          
          
          
          <div className="absolute top-20 left-0 w-full h-full bg-opacity-0 bg-black">
          
          <div className="  grid mx-8 mt-12 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-80">
          <div className=" font-[poppins] text-5xl lg:text-6xl  justify-self-start">Seamlessly<span className="text-blue-500"> Allot</span> Rooms,</div>
          <div className="font-[poppins] text-5xl lg:text-6xl justify-self-start">get started</div>
          
          <Button 
                  as={Link}
                  color="primary"
                  href="#"
                  variant="flat"
                  className=" text-xl lg:text-2xl  h-10 rounded-lg mt-4 justify-self-start"
                >
                  Sign Up
                </Button>
                
          <div className="mt-24 font-[poppins] text-xl lg:text-2xl  justify-self-start">get started in 3 easy steps:</div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-self-start max-w-full">
          <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  sm:w-max-full  p-4 pl-8  "><div className="font-[poppins] font-semibold text-2xl lg:text-3xl"><span className="text-3xl lg:text-4xl whitespace-pre ">①  </span> Register</div><div className="text-xl lg:text-2xl font-[poppins] hidden  sm:block md:p-2">Register either as a resident or an administrator.</div></div>
          <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  sm:w-max-full p-4 pl-8  "><div className="font-[poppins] font-semibold text-2xl lg:text-3xl"><span className="text-3xl  lg:text-4xl whitespace-pre ">②  </span> Let us know your preferences</div><div className="text-xl lg:text-2xl hidden  font-[poppins]  md:p-2  sm:block ">Provide hostel details as an administrator or roommates as a resident.</div></div>
          <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  sm:w-max-full p-4 pl-8  "><div className="font-[poppins] font-semibold text-2xl lg:text-3xl"><span className="text-3xl  lg:text-4xl whitespace-pre ">③  </span> Get allotment</div><div className="text-xl lg:text-2xl font-[poppins] hidden  sm:block md:p-2">Export your alloment list as a PDF or an excel file.</div></div>
          </div>
          </div>
          </div>
          </div>
          
          <FooterComponent className="mt-auto" />
          
          </>
    );
}