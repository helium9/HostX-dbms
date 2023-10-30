import React from "react";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import pyramid from "../images/2_3pyramid.svg";
import donut from "../images/5_3donut.svg";
import strip from "../images/18_3combine.png";
import wave from "../images/Line 1wave.svg";
import person from "../images/Frame 36persons.svg";
import slice from "../images/Mask groupwatermelon.svg";
import { Link, Button } from "@nextui-org/react";

export default function LandingPage() {
  return (
    <>
      <div className="relative flex flex-col ">
        <NavbarComponent />

        <img
          className="absolute left-0 top-0 h-[200px] sm:w-3/4 sm:h-[250px] "
          src={wave}
        ></img>
        <img
          className="absolute hidden lg:block left-[65%] top-[60px] w-[100px] h-[100px]"
          src={pyramid}
        ></img>

        <img
          src={person}
          className="w-[100px] sm:w-[120px] h-[128px] left-3/4 top-[100px] sm:w-1/8  md:top-[50px] md:h-[185px] lg:h-[280px] md:w-[20%] absolute"
        ></img>
        <img
          src={slice}
          className="absolute w-1/8 h-[120px] top-[190px] sm:top-[230px] lg:top-[280px] xl:left-[12%] left-1/8 "
        ></img>
        <img
          src={strip}
          className="absolute  h-[180px] hidden md:block top-[180px] lg:top-[240px] lg:left-[55%]  left-1/2"
        ></img>
        <img
          src={donut}
          className="absolute w-[15%] h-[100px] left-[85%] top-[400px] md:left-[90%] md:w-[10%] xl:top-[100px] xl:left-[95%] xl:w-[5%] "
        ></img>

        <div className="absolute xl: top-20 left-0 w-full h-full bg-opacity-0 bg-black flex flex-col">
          <div className="flex flex-col p-6 items-center px-6 sm:px-10 self-center max-w-screen-xl mb-24 min-h-screen">
            <div className="font-[poppins] text-3xl lg:text-6xl w-full">
              Seamlessly&nbsp;<span className="text-blue-500">allot rooms</span>
              ,<br></br>
              <div className="lg:mt-5">get started!</div>
            </div>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              className="text-xl h-10 rounded-lg mt-4 self-start my-10"
            >
              Sign Up
            </Button>
            <div className="font-[poppins] text-xl lg:text-2xl self-start my-2 lg:mt-12">
              Get started in 3 easy steps:
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-self-start w-full">
              <div className="flex flex-col bg-opacity-10 backdrop-blur-lg backdrop-filter bg-zinc-100 rounded-xl md:rounded-2xl p-4 pl-8 lg:pt-6 gap-2 lg:pb-10 md:max-w-[200px] lg:max-w-[240px]">
                <div className="flex flex-row font-[poppins] font-semibold text-2xl lg:text-3xl items-center gap-3">
                  <span className="text-4xl lg:text-5xl">①</span>
                  <p>Register</p>
                </div>
                <div className="text-xl lg:text-2xl font-[poppins] hidden sm:block md:p-2">
                  Register either as a resident or an administrator.
                </div>
              </div>

              <div className="flex flex-col bg-opacity-10 backdrop-blur-lg backdrop-filter bg-zinc-100 rounded-xl md:rounded-2xl p-4 pl-8 lg:pt-6 gap-2 lg:pb-10 lg:max-w-[500px]">
                <div className="flex flex-row font-[poppins] font-semibold text-2xl lg:text-3xl items-center gap-3">
                  <span className="text-4xl lg:text-5xl">②</span>
                  <p>Let us know your preferences</p>
                </div>
                <div className="text-xl lg:text-2xl font-[poppins] hidden sm:block md:p-2">
                  Provide hostel details as an administrator or roommates as a
                  resident.
                </div>
              </div>

              <div className="flex flex-col bg-opacity-10 backdrop-blur-lg backdrop-filter bg-zinc-100 rounded-xl md:rounded-2xl p-4 px-8 lg:pt-6 gap-2 lg:pb-10 md:max-w-[300px]">
                <div className="flex flex-row font-[poppins] font-semibold text-2xl lg:text-3xl items-center gap-3">
                  <span className="text-4xl lg:text-5xl">③</span>
                  Get allotment
                </div>
                <div className="text-xl lg:text-2xl font-[poppins] hidden sm:block md:p-2">
                  Export your alloment list as a PDF or an excel file.
                </div>
              </div>
            </div>
          </div>
          <FooterComponent className="mt-auto" />
        </div>
      </div>
      
      
    </>
  );
}
