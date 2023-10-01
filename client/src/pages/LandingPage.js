import React from "react";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import pyramid from "../images/2_3pyramid.svg";
import donut from "../images/5_3donut.svg";
import strip from "../images/18_3strip.svg";
import wave from "../images/Line 1wave.svg";
import slice from "../images/Mask groupwatermelon.svg";
import bgcombine from "../images/Frame 31cb.svg";
import {
  Link,
  Button
} from "@nextui-org/react";

export default function LandingPage() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex flex-col p-6 items-center px-6 sm:px-10  max-w-screen-xl self-center mb-24">
          <div className="font-[poppins] text-3xl lg:text-6xl w-full">
            Seamlessly&nbsp;<span className="text-blue-500">allot rooms</span>,<br></br>
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

            <div className="flex flex-col bg-opacity-10 backdrop-blur-lg backdrop-filter bg-zinc-100 rounded-xl md:rounded-2xl p-4 pl-8 lg:pt-6 gap-2 lg:pb-10">
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
      </div>
      <FooterComponent className="mt-auto" />
    </>
  );
}
